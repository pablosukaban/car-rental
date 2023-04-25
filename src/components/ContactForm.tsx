import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    EnvelopeOpenIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <section className="mx-auto my-40 max-w-7xl">
            <div className="grid grid-cols-1 justify-center gap-x-6 gap-y-12 p-6 lg:grid-cols-2">
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className=" text-4xl font-bold">
                        Нужна дополнительная <br /> информация?
                    </h1>
                    <p className="text-lg font-semibold text-gray-500">
                        Свяжитесь с нами, и мы поможем вам
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
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
                            className="flex items-center  gap-2 font-bold transition hover:text-primary"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <MapPinIcon className="h-6 w-6" />
                            Москва, Россия
                        </a>
                    </div>
                </div>
                <form className="text-center lg:text-left">
                    <div className="space-y-4 py-2">
                        <label className="text-lg font-semibold">
                            Полное Имя <span className="text-primary">*</span>
                        </label>
                        <input
                            className="w-full border px-4 py-2 text-gray-500 focus:outline-none"
                            placeholder="Максим Александров"
                            type="text"
                        />
                    </div>
                    <div className="space-y-4 py-2">
                        <label className="text-lg font-semibold">
                            Email <span className="text-primary">*</span>
                        </label>
                        <input
                            className="w-full border px-4 py-2 text-gray-500 focus:outline-none"
                            placeholder="maxim@mail.ru"
                            type="text"
                        />
                    </div>
                    <div className="space-y-4 py-2">
                        <label className="text-lg font-semibold">
                            Сообщение <span className="text-primary">*</span>
                        </label>
                        <textarea
                            className="w-full border px-4 py-2 text-gray-500 focus:outline-none"
                            placeholder="Здравствуйте! Я хотел бы узнать..."
                        />
                    </div>
                    <Link to="/">
                        <div className="mt-8 grid place-items-center lg:place-items-start">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded bg-primary px-4 py-2 text-xl font-bold text-white"
                            >
                                <EnvelopeOpenIcon className="inline-block h-6 w-6 text-center text-white" />{' '}
                                Отправить
                            </button>
                        </div>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
