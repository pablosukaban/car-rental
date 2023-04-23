import React, { useState } from 'react';
import { CAR_DATA } from './CarData';
import { CarDataType } from './CarData';

const CarBox = ({ givenCar }: { givenCar: CarDataType }) => {
    const keys = [
        'Модель',
        'Марка',
        'Год',
        'Двери',
        'AC',
        'Передача',
        'Топливо',
    ];

    const values = [
        givenCar.model,
        givenCar.mark,
        givenCar.year,
        givenCar.doors,
        givenCar.air,
        givenCar.transmission,
        givenCar.fuel,
    ];

    return (
        <div className="flex w-full flex-col border-l-2 border-r-2 border-gray-500 font-medium">
            {values.map((item, index) => (
                <div
                    key={index}
                    className="grid w-full grid-cols-2 border-b-2 border-b-gray-500 px-1 py-2"
                >
                    <span className="border-r-2 border-r-gray-500 px-1">
                        {keys[index]}
                    </span>
                    <span className="px-2 ">{item}</span>
                </div>
            ))}
        </div>
    );
};

type ModelsProps = {
    reserveNowClick: (e: React.MouseEvent) => void;
};

const Models = ({ reserveNowClick }: ModelsProps) => {
    const [currentCar, setCurrentCar] = useState(CAR_DATA[0]);

    return (
        <section className="container z-30 mx-auto my-40 max-w-7xl text-center">
            <div className="mb-12 space-y-4">
                <h2 className="text-3xl font-semibold">Модели автомобилей</h2>
                <h1 className="text-4xl font-bold lg:text-5xl">
                    Наш арендный парк
                </h1>
                <p className="text-gray-500">
                    Выбирайте из множества наших замечательных автомобилей для
                    аренды для для вашего следующего приключения или деловой
                    поездки
                </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr]   ">
                <div className="flex w-full flex-col items-center gap-2 md:col-span-2 lg:col-span-1">
                    {CAR_DATA.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentCar(item)}
                            className={`w-full px-6 py-4 text-start text-xl font-semibold ${
                                currentCar.name === item.name
                                    ? ' bg-primary text-white'
                                    : 'bg-gray-200 text-black'
                            } transition hover:bg-primary hover:text-white`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="flex justify-center md:justify-start lg:justify-center">
                    <img
                        className="w-[500px] object-contain"
                        src={currentCar.img}
                    />
                </div>
                <div className="px-6">
                    <div className="bg-primary px-4 py-2 text-lg text-white">
                        <span className="text-xl font-bold">
                            ${currentCar.price}
                        </span>{' '}
                        / в день
                    </div>
                    <div>
                        <CarBox givenCar={currentCar} />
                    </div>
                    <button
                        onClick={reserveNowClick}
                        className="mt-4 w-full bg-primary py-3 font-semibold text-white transition hover:bg-primary/80"
                    >
                        {'Подтвердить'.toUpperCase()}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Models;
