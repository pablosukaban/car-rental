import React, { forwardRef, useState } from 'react';
import { CAR_DATA, places } from './CarData';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    TagIcon,
    MapPinIcon,
    CalendarDaysIcon,
} from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import BookModal from './BookModal';

export type Inputs = {
    name: string;
    pickCity: string;
    dropCity: string;
    pickDate: string;
    dropDate: string;
};

type BookCarProps = {
    isBookModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const BookCar = forwardRef<HTMLSelectElement, BookCarProps>((props, ref) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => setUserData(data);

    const [userData, setUserData] = useState<Inputs | null>(null);
    const [isModalSubmitted, setIsModalSubmitted] = useState(false);

    const handleOpenClick = () => {
        props.openModal();
        document.body.style.overflow = 'hidden';
    };

    const handleCLoseClick = () => {
        props.closeModal();
        document.body.style.overflow = 'auto';
    };

    const submitModal = () => {
        setIsModalSubmitted(true);
        handleCLoseClick();
    };

    const closeCheckEmailWindow = () => {
        setIsModalSubmitted(false);
    };

    return (
        <section
            id="bookCar"
            className="container relative z-20 mx-auto max-w-7xl bg-white"
            ref={ref}
        >
            <div className=" z-20 mx-4 border border-gray-300/40 bg-white  px-4 py-6 shadow-xl">
                <h2 className="mb-4 text-3xl font-bold">Заказать автомобиль</h2>
                {isModalSubmitted && (
                    <div className="flex items-center justify-between gap-4 rounded-md bg-green-300 p-4 text-green-700">
                        <h2>Check your email to confirm an order.</h2>
                        <button onClick={closeCheckEmailWindow}>
                            <XMarkIcon className="h-6 w-6 text-green-700" />
                        </button>
                    </div>
                )}
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
                            value="2023-04-20"
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
                            value="2023-04-20"
                        />
                    </div>
                    <button
                        onClick={handleOpenClick}
                        className="w-full self-end rounded bg-primary px-6 py-2 font-bold text-white"
                    >
                        Найти
                    </button>
                </form>
            </div>

            {props.isBookModalOpen ? (
                <BookModal
                    userData={userData}
                    closeModal={handleCLoseClick}
                    submitModal={submitModal}
                />
            ) : (
                ''
            )}
        </section>
    );
});

BookCar.displayName = 'BookCar';

export default BookCar;
