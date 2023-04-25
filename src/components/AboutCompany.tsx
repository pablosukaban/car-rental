import React from 'react';
import MainImage from '../images/about/about-main.jpg';
import { aboutInfo } from './CarData';

const AboutCompany = () => {
    return (
        <section className="container mx-auto my-20 max-w-6xl">
            <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 lg:flex-row">
                <img src={MainImage} alt="about company" className="" />
                <div className="flex max-w-lg flex-col  items-center justify-center gap-8">
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h2 className="text-xl font-semibold">О компании</h2>
                        <h1 className="text-4xl font-bold md:text-5xl">
                            Заводите авто, и ваше приключение начнется
                        </h1>
                        <p className="text-gray-500">
                            Наша компания является лидером на рынке аренды
                            автомобилей, и мы гордимся тем, что всегда ставим
                            комфорт наших клиентов на первое место. Наш парк
                            автомобилей представлен широким ассортиментом марок
                            и моделей для того, чтобы удовлетворить потребности
                            даже самых требовательных водителей.
                        </p>
                    </div>
                    <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
                        {aboutInfo.map((item, index) => (
                            <li
                                key={index}
                                className="flex flex-col items-center justify-center gap-2 sm:items-start"
                            >
                                <img src={item.icon} alt="about company" />
                                <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-4">
                                    <h3 className="break-words text-5xl font-bold">
                                        {item.number}
                                    </h3>
                                    <p className="text-base text-gray-500 sm:max-w-[90px] sm:text-lg">
                                        {item.title}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
