import React from 'react';
import { TestimonialType, testimonials } from './CarData';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';

const SingleTestimonial = ({
    testimonial,
}: {
    testimonial: TestimonialType;
}) => {
    return (
        <div className="flex w-full max-w-lg flex-1 flex-col justify-between gap-4 px-8 py-12 text-center shadow-xl sm:text-start">
            <p className="text-xl font-medium">{testimonial.text}</p>
            <div className="grid grid-cols-2 items-center gap-2 sm:grid-cols-4">
                <img
                    src={testimonial.image}
                    className="col-start-1 h-20 w-20 rounded-full"
                />
                <div className="col-start-2">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <h4 className="font-semibold">{testimonial.city}</h4>
                </div>
                <div className="col-start-4 hidden justify-self-end sm:block">
                    <ChatBubbleBottomCenterIcon className="h-10 w-10 text-primary" />
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="container z-30 mx-auto my-40 max-w-7xl space-y-20 px-6 text-center">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Проверено людьми</h2>
                <h1 className="text-3xl font-bold md:text-4xl">
                    Отзывы клиентов
                </h1>
                <p className="mx-auto max-w-xl text-gray-500">
                    Узнайте о положительном влиянии, которое мы оказали на наших
                    клиентов, прочитав их отзывы. Наши клиенты испытали на себе
                    наши услуги и результаты, и они хотят поделиться с вами
                    своим положительным опытом.
                </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-stretch md:justify-between">
                {testimonials.map((item, index) => (
                    <SingleTestimonial key={index} testimonial={item} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
