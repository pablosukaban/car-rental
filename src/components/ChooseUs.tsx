import React from 'react';
import MainImage from '../images/chooseUs/main.png';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { benefits } from './CarData';
import { SingleInfoItem } from './SingleItem';

const ChooseUs = () => {
    return (
        <section className="container z-30 mx-auto mb-24 max-w-7xl px-4 ">
            <div className="flex flex-col items-center justify-center px-6">
                <div>
                    <img src={MainImage} alt="cars image" />
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-8 text-center lg:flex-row lg:justify-between lg:text-start">
                    <div className="flex w-full max-w-xl flex-col items-center justify-center gap-4 lg:items-stretch lg:justify-start ">
                        <h3 className="text-3xl font-semibold">
                            Why Choose Us
                        </h3>
                        <h1 className="text-4xl font-bold lg:text-5xl">
                            Best valued deals you will ever find
                        </h1>
                        <p className="max-w-lg px-4 text-gray-500 lg:px-0">
                            Discover the best deals you&apos;ll ever find with
                            our unbeatable offers. We&apos;re dedicated to
                            providing you with the best value for your money, so
                            you can enjoy top-quality services and products
                            without breaking the bank. Our deals are designed to
                            give you the ultimate renting experience, so
                            don&apos;t miss out on your chance to save big.
                        </p>
                        <button className="mt-4 flex items-center justify-center gap-2 rounded bg-primary px-5 py-3 text-lg font-semibold text-white transition hover:bg-primary/80 lg:self-start">
                            Узнайте детали{' '}
                            <ChevronRightIcon className="h-4 w-4 text-white" />
                        </button>
                    </div>
                    <ul className="flex max-w-md flex-col gap-4">
                        {benefits.map((item, index) => (
                            <SingleInfoItem key={index} givenItem={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
