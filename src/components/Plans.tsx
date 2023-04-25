import React from 'react';
import { plans } from './CarData';
import { SinglePlan } from './SingleItem';

const Plans = () => {
    return (
        <section className="container z-30 mx-auto mt-24 max-w-7xl text-center">
            <div className="px-6">
                <div className="mb-12 ">
                    <h2 className="text-3xl font-medium">
                        Планируйте поездку прямо сейчас
                    </h2>
                    <h1 className="mt-8 text-4xl font-bold lg:text-5xl">
                        Быстрый и простой прокат автомобилей
                    </h1>
                </div>
                <ul className="grid grid-cols-1 items-start justify-center gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                    {plans.map((item, index) => (
                        <SinglePlan key={index} givenPlan={item} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Plans;
