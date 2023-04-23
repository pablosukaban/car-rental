import React, { useState } from 'react';
import { FaqList, FaqType } from './CarData';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import CarImage from '../images/faq/car.png';

type AccordionItem = {
    item: FaqType;
    children: React.ReactNode;
    isOpen: boolean;
    handleClick: (item: FaqType) => void;
};

const AccordionItem = ({
    item,
    children,
    handleClick,
    isOpen,
}: AccordionItem) => {
    // const [isOpen, setIsOpen] = useState(false);

    const handleAccordion = () => {
        handleClick(item);
    };

    return (
        <>
            <h2>
                <button
                    type="button"
                    className={`flex w-full items-center justify-between gap-4 border-b border-gray-200 px-8 py-4 text-left text-lg font-semibold transition  ${
                        isOpen ? 'bg-primary text-white' : 'text-black '
                    }`}
                    onClick={handleAccordion}
                    aria-expanded={isOpen}
                >
                    <span>{item.question}</span>
                    {isOpen ? (
                        <ChevronUpIcon className="h-6 w-6 shrink-0" />
                    ) : (
                        <ChevronDownIcon className="h-6 w-6 shrink-0 transition hover:text-primary" />
                    )}
                </button>
            </h2>
            <div
                className={`${isOpen ? '' : 'hidden'}`}
                aria-labelledby={`accordion-flush-heading-${item.question}`}
            >
                <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                    {children}
                </div>
            </div>
        </>
    );
};

const FAQ = () => {
    const [currentFaq, setCurrentFaq] = useState<FaqType | null>(null);

    const handleClick = (item: FaqType) => {
        // if (currentFaq) {
        //     setCurrentFaq(null);
        // } else {
        //     setCurrentFaq(item);
        // }
        if (item == currentFaq) {
            setCurrentFaq(null);
        } else {
            setCurrentFaq(item);
        }
    };

    return (
        <section className="relative z-30 my-40 w-full text-center">
            <div className="mx-auto max-w-4xl">
                <div className="relative z-50 flex flex-col justify-center gap-12 px-6 ">
                    <div className="mx-auto max-w-xl space-y-4">
                        <h2 className="text-2xl font-semibold">FAQ</h2>
                        <h1 className="text-3xl font-bold md:text-4xl">
                            Frequently Asked Questions
                        </h1>
                        <p className=" text-gray-500">
                            Frequently Asked Questions About the Car Rental
                            Booking Process on Our Website: Answers to Common
                            Concerns and Inquiries.
                        </p>
                    </div>
                    <div className="rounded bg-white shadow-xl">
                        {FaqList.map((item, index) => (
                            <AccordionItem
                                item={item}
                                handleClick={handleClick}
                                key={index}
                                isOpen={item == currentFaq}
                            >
                                <p className="px-8 text-start text-gray-500">
                                    {item.answer}
                                </p>
                            </AccordionItem>
                        ))}
                    </div>
                </div>
                <img
                    src={CarImage}
                    className="absolute left-0 top-1/4 z-0 hidden md:block"
                />
            </div>
        </section>
    );
};

export default FAQ;
