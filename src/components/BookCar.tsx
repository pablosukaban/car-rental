import React, { forwardRef } from 'react';
import { CAR_DATA } from './CarData';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    TagIcon,
    MapPinIcon,
    CalendarDaysIcon,
} from '@heroicons/react/24/solid';

const places = [
    'Москва',
    'Екатеринбург',
    'Казань',
    'Челябинск',
    'Санкт-Петербург',
    'Пермь',
];

type Inputs = {
    name: string;
    pickCity: string;
    dropCity: string;
    pickDate: string;
    dropDate: string;
};

// type BookCarProps = {};

const BookCar = forwardRef<HTMLSelectElement>((props, ref) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <section
            id="bookCar"
            className="container z-30 mx-auto max-w-7xl  bg-white"
            ref={ref}
        >
            <div className=" z-30 mx-4 border border-gray-300/40 bg-white  px-4 py-6 shadow-xl">
                <h2 className="mb-4 text-3xl font-bold">Заказать автомобиль</h2>
                <form
                    className="z-30 grid grid-cols-1  gap-4 bg-white md:grid-cols-2 lg:grid-cols-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-2">
                        <label
                            className="z-30 flex items-center gap-1 font-semibold"
                            htmlFor="type-car"
                        >
                            <TagIcon className="h-4 w-4 text-primary" />
                            Тип автомобиля{' '}
                            <span className="text-primary">*</span>
                        </label>
                        <select
                            required={true}
                            className="cursor-pointer border border-gray-300 bg-transparent px-4 py-2 text-gray-600"
                            id="type-car"
                            {...register('name', { required: true })}
                        >
                            {CAR_DATA.map((item) => (
                                <option value={item.name} key={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="z-30 flex items-center gap-1 font-semibold"
                            htmlFor="pick-up"
                        >
                            <MapPinIcon className="h-4 w-4 text-primary" />
                            Место получения{' '}
                            <span className="text-primary">*</span>
                        </label>
                        <select
                            required={true}
                            className="cursor-pointer border border-gray-300 bg-transparent px-4 py-2 text-gray-600"
                            id="pick-up"
                            {...register('pickCity', { required: true })}
                        >
                            {places.map((item) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="z-30 flex items-center gap-1 font-semibold"
                            htmlFor="drop-of"
                        >
                            <MapPinIcon className="h-4 w-4 text-primary" />
                            Место сдачи <span className="text-primary">*</span>
                        </label>
                        <select
                            required={true}
                            className="cursor-pointer border border-gray-300 bg-transparent px-4 py-2 text-gray-600"
                            id="drop-of"
                            {...register('dropCity', { required: true })}
                        >
                            {places.map((item) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="flex items-center gap-1 font-semibold"
                            htmlFor="pick-up-date"
                        >
                            <CalendarDaysIcon className="h-4 w-4 text-primary" />
                            Дата получения{' '}
                            <span className="text-primary">*</span>
                        </label>
                        <input
                            type="date"
                            id="pick-up-date"
                            className="border border-gray-300 px-4 py-2 text-gray-600"
                            {...register('pickDate', { required: true })}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className="flex items-center gap-1 font-semibold"
                            htmlFor="drop-of-date"
                        >
                            <CalendarDaysIcon className="h-4 w-4 text-primary" />
                            Дата сдачи <span className="text-primary">*</span>
                        </label>
                        <input
                            type="date"
                            id="drop-of-date"
                            className="border border-gray-300 px-4 py-2 text-gray-600"
                            {...register('dropDate', { required: true })}
                        />
                    </div>
                    <button className="w-full self-end rounded bg-primary px-6 py-2 font-bold text-white">
                        Найти
                    </button>
                </form>
            </div>
        </section>
    );
});

BookCar.displayName = 'BookCar';

export default BookCar;
