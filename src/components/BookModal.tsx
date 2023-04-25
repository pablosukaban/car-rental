import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useRef } from 'react';
import { CAR_DATA, modalInputs } from './CarData';
import { Inputs } from './BookCar';

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
            className="fixed inset-0 z-[1000] grid h-screen w-screen  place-items-center overflow-y-scroll bg-black/50 p-2 sm:p-4 lg:p-8"
            onClick={handleModalClick}
            ref={modalBgRef}
        >
            <div
                onClick={handleModalContentClick}
                className="relative z-[1000] max-w-[830px] bg-white"
            >
                <div className="flex  items-center justify-between bg-primary  p-4">
                    <h1 className="text-bold text-2xl uppercase text-white">
                        Завершите Бронирование
                    </h1>
                    <button onClick={closeModal}>
                        <XMarkIcon className="h-6 w-6 text-white/80 transition hover:text-white" />
                    </button>
                </div>
                <div className="bg-primary/20 p-6">
                    <h2 className="flex gap-2 text-xl text-primary">
                        <InformationCircleIcon className="h-7 w-7 " /> Заполнив
                        этот запрос на бронирование, вы получите:
                    </h2>
                    <p className="text-gray-500 ">
                        Ваш ваучер на аренду, который необходимо предъявить по
                        прибытии в пункт проката, и бесплатный номер службы
                        поддержки клиентов.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-center justify-center gap-4 p-4 text-center sm:grid-cols-2 sm:justify-start sm:text-left">
                    <div className=" flex h-full flex-col gap-6 ">
                        <h3 className="text-xl text-primary">Место и дата</h3>
                        <div>
                            <h4>Дата и время получения</h4>
                            <div className=" flex items-center justify-center gap-1 sm:justify-start">
                                <p className="text-gray-500">{pickDate} / </p>{' '}
                                <input
                                    type="time"
                                    className="cursor-pointer border border-gray-700 bg-white px-2 text-gray-500 transition hover:border-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <h4>Дата и время сдачи</h4>
                            <div className=" flex items-center justify-center gap-1 sm:justify-start">
                                <p className="text-gray-500">{dropDate} / </p>{' '}
                                <input
                                    type="time"
                                    className="cursor-pointer  border border-gray-700 bg-white text-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <h4>Место получения</h4>
                            <p className="text-gray-500">{pickCity}</p>
                        </div>
                        <div>
                            <h4>Место сдачи</h4>
                            <p className="text-gray-500">{dropCity}</p>
                        </div>
                    </div>
                    <div className=" flex h-full flex-col gap-6">
                        <h3>
                            Автомобиль -{' '}
                            <span className="text-primary">{name}</span>
                        </h3>
                        <div>
                            <img src={carImgae} alt="Car image" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-400 p-4">
                    <h2 className="text-xl text-primary">Личные сведения</h2>
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
                                    Это поле обязательно к заполнению.
                                </div>
                            </div>
                        ))}
                        <div>
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                            />
                            <label className="text-gray-500">
                                Пожалуйста, присылайте мне последние новости и
                                обновления
                            </label>
                        </div>
                        <button
                            type="button"
                            onClick={submitModal}
                            className="self-center rounded-md bg-primary px-4 py-2 text-white sm:self-end"
                        >
                            Завершить бронирование
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookModal;
