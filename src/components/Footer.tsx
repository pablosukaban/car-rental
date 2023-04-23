import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    return (
        <footer className="container mx-auto my-40 max-w-7xl">
            <div className="px-6">
                <div className="grid gap-y-20 text-center sm:grid-cols-2 sm:gap-12 sm:text-left lg:grid-cols-4 lg:gap-16">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold uppercase">Прокат</h3>
                        <p className="text-lg text-gray-500">
                            Мы предлагаем большой выбор автомобилей для всех
                            ваших потребностей. У нас есть идеальный автомобиль
                            для удовлетворения ваших потребности.
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
                                Дизайн XpeedStudio
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center  gap-3 sm:items-start">
                        <h3 className="text-2xl font-bold uppercase">
                            Компания
                        </h3>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            Нью-Йорк
                        </a>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            Карьера
                        </a>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            Мобильный
                        </a>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            Блог
                        </a>
                        <a
                            href=""
                            className="font-medium transition hover:text-primary"
                        >
                            Как мы работаем
                        </a>
                    </div>
                    <div className="flex flex-col items-center  gap-3 sm:items-start">
                        <h3 className="text-2xl font-bold uppercase">
                            Рабочие часы
                        </h3>
                        <p>Пн - Пт: 9:00 - 21</p>
                        <p>Сб: 9:00 - 19:00</p>
                        <p>Вс: Закрыто</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 sm:items-start">
                        <h3 className="text-2xl font-bold uppercase">
                            Подписка
                        </h3>
                        <p>
                            Подпишитесь, указав свой адрес электронной почты,
                            чтобы быть в курсе последних новостей и обновлений.
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
