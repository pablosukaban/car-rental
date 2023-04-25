import React from 'react';
import { vehiclesData, CarDataType } from './CarData';
import { InformationCircleIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

type SingleModelProps = {
    givenCar: CarDataType;
};

const SingleModel = ({ givenCar }: SingleModelProps) => {
    const { fuel, doors, mark, transmission, price, img, name } = givenCar;

    return (
        <div className="flex h-full max-w-[474px] flex-col items-center justify-between gap-4 border border-gray-300 shadow-lg transition hover:shadow-2xl">
            <img src={img} alt="car image" className="h-[300px] object-cover" />

            <div className="my-6 w-full space-y-6 px-6">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">{name}</h3>
                        <span className="flex max-w-[80px]">
                            <StarIcon className="text-yellow-400" />
                            <StarIcon className="text-yellow-400" />
                            <StarIcon className="text-yellow-400" />
                            <StarIcon className="text-yellow-400" />
                            <StarIcon className="text-yellow-400" />
                        </span>
                    </div>
                    <div className="text-end">
                        <h3 className="text-xl font-bold">${price}</h3>
                        <span className="text-lg font-medium">в день</span>
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 justify-between gap-4 border-b border-gray-300 pb-4">
                    <div className="text-lg font-medium text-gray-500">
                        {' '}
                        <InformationCircleIcon className="inline-block h-6 w-6 text-gray-400" />
                        {mark}
                    </div>
                    <div className="text-end text-lg font-medium text-gray-500">
                        {doors}{' '}
                        <InformationCircleIcon className="inline-block h-6 w-6 text-gray-400" />
                    </div>
                    <div className="text-lg font-medium text-gray-500 ">
                        {' '}
                        <InformationCircleIcon className="inline-block h-6 w-6 text-gray-400" />
                        {transmission}
                    </div>
                    <div className="text-end text-lg font-medium text-gray-500">
                        {fuel}{' '}
                        <InformationCircleIcon className="inline-block h-6 w-6 text-gray-400" />
                    </div>
                </div>
            </div>

            <div className="w-full px-6">
                <Link to="/">
                    <button className="mb-6 w-full rounded bg-primary px-4 py-2 text-xl font-bold text-white ">
                        Заказать
                    </button>
                </Link>
            </div>
        </div>
    );
};

const VehicleModels = () => {
    return (
        <section className="mx-auto my-40 min-h-screen max-w-7xl">
            <div className="grid h-full grid-cols-1 place-items-center gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
                {vehiclesData.map((item, index) => (
                    <SingleModel key={index} givenCar={item} />
                ))}
            </div>
        </section>
    );
};

export default VehicleModels;
