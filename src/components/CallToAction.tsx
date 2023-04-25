import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';

const CallToAction = () => {
    return (
        <section className="w-full bg-gray-800 text-center text-white">
            <div className="mx-auto max-w-5xl px-6 py-6">
                <h1 className="mb-4 text-4xl font-bold">
                    Забронируйте автомобиль, связавшись с нами
                </h1>
                <h2 className="space-x-4 text-4xl font-bold text-primary">
                    <PhoneIcon className="inline-block h-8 w-8 text-primary" />
                    <span>(123) 456-7869</span>
                </h2>
            </div>
        </section>
    );
};

export default CallToAction;
