import React from 'react';
import { InfoItemType } from './CarData';

export const SinglePlan = ({ givenPlan }: { givenPlan: InfoItemType }) => {
    return (
        <li>
            <div className="flex flex-col items-center justify-center gap-4">
                <img src={givenPlan.icon} alt="plan icon" />
                <h3 className="text-2xl font-bold">{givenPlan.title}</h3>
                <p className="px-4 text-gray-500">{givenPlan.text}</p>
            </div>
        </li>
    );
};

export const SingleInfoItem = ({ givenItem }: { givenItem: InfoItemType }) => {
    return (
        <li>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <img src={givenItem.icon} alt="plan icon" />
                <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold">{givenItem.title}</h3>
                    <p className="text-gray-500">{givenItem.text}</p>
                </div>
            </div>
        </li>
    );
};
