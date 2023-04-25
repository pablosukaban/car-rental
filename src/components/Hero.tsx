import React, { forwardRef } from 'react';
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import HeroCar from '../images/hero/main-car.png';
import HeroBg from '../images/hero/hero-bg.png';

type HeroProps = {
    bookRideClick: (e: React.MouseEvent) => void;
};

const Hero = forwardRef<HTMLSelectElement, HeroProps>((props, ref) => {
    return (
        <section ref={ref} className="container mx-auto h-screen max-w-7xl">
            <div className="relative flex h-full">
                <div className="z-20 flex max-w-none flex-col items-center justify-center gap-4 px-8 text-center sm:gap-6 md:max-w-lg md:items-start md:text-left">
                    <h2 className="text-2xl font-bold">
                        Совершите поездку прямо сейчас
                    </h2>
                    <h1 className="text-4xl font-bold md:text-6xl">
                        <span className=" text-primary">Экономьте</span> с нашей
                        арендой автомобилей
                    </h1>
                    <p className="text-gray-500 ">
                        Арендуйте автомобиль своей мечты. Непревзойденные цены,
                        неограниченное количество миль, гибкие возможности
                        получения и многое другое.
                    </p>
                    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href=""
                            className="flex w-full max-w-xs items-center justify-center gap-2 rounded bg-primary py-4 font-bold text-white"
                            onClick={props.bookRideClick}
                        >
                            <span>Заказать поездку</span>{' '}
                            <CheckCircleIcon className="h-4 w-4 " />
                        </a>
                        <button className="flex w-full max-w-xs items-center justify-center gap-2 rounded bg-black py-4 font-bold text-white">
                            <span>Подробнее</span>{' '}
                            <ChevronRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={HeroCar}
                        className="absolute right-0 top-1/3 z-10 hidden w-2/3 md:block lg:max-w-3xl"
                        alt={'Hero Car'}
                    />
                </div>
            </div>
            <div>
                <img
                    src={HeroBg}
                    className="absolute right-0 top-0 z-0 hidden md:block"
                    alt={'Hero Car'}
                />
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
