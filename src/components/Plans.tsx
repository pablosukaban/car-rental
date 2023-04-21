import React from 'react';
import { plans, PlanType } from './CarData';

const SinglePlan = ({ givenPlan }: { givenPlan: PlanType }) => {
    return (
        <li>
            <div className="flex flex-col items-center justify-center gap-4">
                <img src={givenPlan.icon} alt="plan icon" />
                <h3 className="text-2xl font-semibold">{givenPlan.title}</h3>
                <p className="px-4 text-gray-500">{givenPlan.text}</p>
            </div>
        </li>
    );
};

const Plans = () => {
    return (
        <section className="container z-30 mx-auto mt-24 max-w-7xl text-center">
            <div className="px-6">
                <div className="mb-12 ">
                    <h2 className="text-3xl font-semibold">
                        Plan your trip now
                    </h2>
                    <h1 className="mt-8 text-4xl font-bold lg:text-5xl">
                        Quick & easy car rental
                    </h1>
                </div>
                <ul className="grid grid-cols-1 items-center justify-center gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                    {plans.map((item, index) => (
                        <SinglePlan key={index} givenPlan={item} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Plans;
