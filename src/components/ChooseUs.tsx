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
                            Почему выбирают нас
                        </h3>
                        <h1 className="text-4xl font-bold lg:text-5xl">
                            Самые выгодные предложения, которые вы когда-либо
                            найдете
                        </h1>
                        <p className="max-w-lg px-4 text-gray-500 lg:px-0">
                            Откройте для себя лучшие предложения, которые вы
                            когда-либо найдете, благодаря нашим непревзойденным
                            предложениям. Мы стремимся предоставить вам лучшее
                            соотношение цены и качества, чтобы вы могли
                            наслаждаться высококачественными услугами и
                            продуктами, не разоряя банк. Наши предложения
                            разработаны для того, чтобы обеспечить вам
                            максимальный опыт аренды, поэтому не упустите свой
                            шанс сэкономить.
                        </p>
                        <button className="mt-4 flex items-center justify-center gap-2 rounded bg-primary px-5 py-3 text-lg font-semibold text-white transition hover:bg-primary/80 lg:self-start">
                            Узнайте детали{' '}
                            <ChevronRightIcon className="h-4 w-4 text-white" />
                        </button>
                    </div>
                    <ul className="flex max-w-md flex-col gap-8">
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
