import React, { forwardRef, useRef, useState } from 'react';
import { CAR_DATA, modalInputs, places } from './CarData';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    TagIcon,
    MapPinIcon,
    CalendarDaysIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';

type Inputs = {
    name: string;
    pickCity: string;
    dropCity: string;
    pickDate: string;
    dropDate: string;
};

type BookModalProps = {
    userData: Inputs | null;
    closeModal: () => void;
    submitModal: () => void;
};

const BookModal = ({ closeModal, userData, submitModal }: BookModalProps) => {
    if (!userData) return null;

    const { name, pickCity, dropCity, pickDate, dropDate } = userData;
    const carImgae = CAR_DATA.find((car) => car.name === name)?.img;

    const modalBgRef = useRef<HTMLDivElement>(null);

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === modalBgRef.current) {
            closeModal();
        }
    };
    const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 z-50 grid h-screen w-screen  place-items-center overflow-y-scroll bg-black/50 p-2 sm:p-4 lg:p-8"
            onClick={handleModalClick}
            ref={modalBgRef}
        >
            <div
                onClick={handleModalContentClick}
                className=" z-[500] max-w-[830px] bg-white"
            >
                <div className="flex  items-center justify-between bg-primary  p-4">
                    <h1 className="text-bold text-2xl uppercase text-white">
                        Complete Reservation
                    </h1>
                    <button onClick={closeModal}>
                        <XMarkIcon className="h-6 w-6 text-white/80 transition hover:text-white" />
                    </button>
                </div>
                <div className="bg-primary/20 p-6">
                    <h2 className="flex gap-2 text-xl text-primary">
                        <InformationCircleIcon className="h-7 w-7 " /> Upon
                        completing this reservation enquiry, you will receive:
                    </h2>
                    <p className="text-gray-500 ">
                        Your rental voucher to produce on arrival at the rental
                        desk and a toll-free customer support number.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-center justify-center gap-4 p-4 text-center sm:grid-cols-2 sm:justify-start sm:text-left">
                    <div className=" flex h-full flex-col gap-6 ">
                        <h3 className="text-xl text-primary">
                            Location & Date
                        </h3>
                        <div>
                            <h4>Pick-Up Date & Time</h4>
                            <div className=" flex items-center justify-center gap-1 sm:justify-start">
                                <p className="text-gray-500">{pickDate} / </p>{' '}
                                <input
                                    type="time"
                                    className="cursor-pointer border border-gray-700 bg-white text-gray-500 transition hover:border-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <h4>Drop-Off Date & Time</h4>
                            <div className=" flex items-center justify-center gap-1 sm:justify-start">
                                <p className="text-gray-500">{dropDate} / </p>{' '}
                                <input
                                    type="time"
                                    className="cursor-pointer  border border-gray-700 bg-white text-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <h4>Pick-Up Location</h4>
                            <p className="text-gray-500">{pickCity}</p>
                        </div>
                        <div>
                            <h4>Drop-Off Location</h4>
                            <p className="text-gray-500">{dropCity}</p>
                        </div>
                    </div>
                    <div className=" flex h-full flex-col gap-6">
                        <h3>
                            Car - <span className="text-primary">{name}</span>
                        </h3>
                        <div>
                            <img src={carImgae} alt="Car image" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-400 p-4">
                    <h2 className="text-xl text-primary">
                        Personal Information
                    </h2>
                    <form className="flex flex-col gap-6">
                        {modalInputs.map((input) => (
                            <div
                                className="flex flex-col gap-2 sm:text-lg"
                                key={input.title}
                            >
                                <label className="text-gray-500" htmlFor="">
                                    {input.title}{' '}
                                    <span className="text-primary"> * </span>
                                </label>
                                <input
                                    type="text"
                                    className=" bg-gray-200 p-2 text-gray-500 focus:outline-none sm:p-4 "
                                    placeholder={input.placeholder}
                                    required
                                />
                                <div className="text-xs">
                                    This field is required.
                                </div>
                            </div>
                        ))}
                        <div>
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                            />
                            <label className="text-gray-500">
                                Please send me latest news and updates
                            </label>
                        </div>
                        <button
                            type="button"
                            onClick={submitModal}
                            className="self-center rounded-md bg-primary px-4 py-2 text-white sm:self-end"
                        >
                            Complete Reservation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const BookCar = forwardRef<HTMLSelectElement>((props, ref) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => setUserData(data);

    const [userData, setUserData] = useState<Inputs | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalSubmitted, setIsModalSubmitted] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const submitModal = () => {
        setIsModalSubmitted(true);
        closeModal();
    };

    const closeCheckEmailWindow = () => {
        setIsModalSubmitted(false);
    };

    return (
        <section
            id="bookCar"
            className="container relative z-30 mx-auto max-w-7xl bg-white"
            ref={ref}
        >
            <div className=" z-30 mx-4 border border-gray-300/40 bg-white  px-4 py-6 shadow-xl">
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
                    <button
                        onClick={openModal}
                        className="w-full self-end rounded bg-primary px-6 py-2 font-bold text-white"
                    >
                        Найти
                    </button>
                </form>
            </div>

            {isModalOpen ? (
                <BookModal
                    userData={userData}
                    closeModal={closeModal}
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
