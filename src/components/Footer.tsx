import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    return (
        <footer className="container mx-auto my-40 max-w-7xl">
            <div className="px-6">
                <div className="grid gap-y-20 text-center sm:grid-cols-2 sm:gap-12 sm:text-left lg:grid-cols-4 lg:gap-16">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">
                            <span className="font-bold">CAR</span> Rental
                        </h3>
                        <p className="text-lg text-gray-500">
                            We offers a big range of vehicles for all your
                            driving needs. We have the perfect car to meet your
                            needs.
                        </p>
                        <div className="flex flex-col items-center  gap-2 sm:items-start">
                            <a
                                className="flex items-center  gap-2 font-bold transition hover:text-primary"
                                href="tel:(123)-456-789"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <PhoneIcon className="h-6 w-6" />
                                (123)-456-789
                            </a>
                            <a
                                className="flex items-center  gap-2 font-bold transition hover:text-primary"
                                href="mailto:carrental@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <EnvelopeIcon className="h-6 w-6" />
                                carrental@gmail.com
                            </a>
                            <a
                                className="transition hover:text-primary"
                                href="https://xpeedstudio.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Design by XpeedStudio
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center  gap-3 sm:items-start">
                        <h3 className="text-2xl font-bold uppercase">
                            Company
                        </h3>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            New York
                        </a>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            Careers
                        </a>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            Mobile
                        </a>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            Blog
                        </a>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            How we work
                        </a>
                    </div>
                    <div className="flex flex-col items-center  gap-3 sm:items-start">
                        <h3 className="text-2xl font-bold uppercase">
                            Working Hours
                        </h3>
                        <p>Mon - Fri: 9:00AM - 9:00PM</p>
                        <p>Sat: 9:00AM - 19:00PM</p>
                        <p>Sun: Closed</p>
                    </div>
                    <div className="flex flex-col items-center  gap-3 sm:items-start">
                        <h3 className="text-2xl font-bold uppercase">
                            Subscription
                        </h3>
                        <p>
                            Subscribe your Email address for latest news &
                            updates.
                        </p>
                        <div className="flex w-full flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Ваша почта"
                                className="bg-gray-200 px-10 py-4 text-gray-500 transition focus:outline-primary"
                            />
                            <button className="bg-primary px-10 py-4 text-lg font-semibold text-white">
                                Подтвердить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
