import React from 'react';
import AppStore from '../images/download/appstore.svg';
import GooglePlay from '../images/download/googleapp.svg';
import BgImage from '../images/banners/bg02.png';

const Download = () => {
    return (
        <section className="relative my-40 w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-6 lg:justify-start">
                <div className="relative z-50 flex w-full max-w-md flex-col items-center justify-center gap-12 text-center lg:justify-start lg:text-start">
                    <h1 className="w-full text-3xl font-semibold md:text-4xl">
                        Загрузите приложение, чтобы получить максимальную отдачу
                    </h1>
                    <p className="text-gray-500">
                        Раскройте весь потенциал наших услуг, загрузив наше
                        приложение уже сегодня! Благодаря удобному интерфейсу и
                        эксклюзивным функциям вы получите доступ ко всему, что
                        необходимо, чтобы оставаться на связи и быть в курсе
                        последних событий.
                    </p>
                    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                        <a
                            href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={AppStore} />
                        </a>
                        <a
                            href="https://play.google.com/store/games?hl=ru&gl=US"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={GooglePlay} />
                        </a>
                    </div>
                </div>
            </div>
            <img
                src={BgImage}
                className="absolute -bottom-1/4 right-0 hidden lg:block"
            />
        </section>
    );
};

export default Download;
