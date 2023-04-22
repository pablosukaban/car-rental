import Golf6 from '../images/cars-big/golf6.jpg';
import AudiA1 from '../images/cars-big/audia1.jpg';
import Toyota from '../images/cars-big/toyotacamry.jpg';
import Bmw320 from '../images/cars-big/bmw320.jpg';
import Benz from '../images/cars-big/benz.jpg';
import Passat from '../images/cars-big/passatcc.jpg';

import PlanImage1 from '../images/plan/icon1.png';
import PlanImage2 from '../images/plan/icon2.png';
import PlanImage3 from '../images/plan/icon3.png';

import BenefitImage1 from '../images/chooseUs/icon1.png';
import BenefitImage2 from '../images/chooseUs/icon2.png';
import BenefitImage3 from '../images/chooseUs/icon3.png';

import TestimonialsImage1 from '../images/testimonials/pfp1.jpg';
import TestimonialsImage2 from '../images/testimonials/pfp2.jpg';

export type CarDataType = {
    name: string;
    price: string;
    img: string;
    model: string;
    mark: string;
    year: string;
    doors: string;
    air: string;
    transmission: string;
    fuel: string;
};

export type InfoItemType = {
    icon: string;
    title: string;
    text: string;
};

export type TestimonialType = {
    name: string;
    city: string;
    image: string;
    text: string;
};

export const CAR_DATA: CarDataType[] = [
    {
        name: 'VW Golf 6',
        price: '37',
        img: Golf6,
        model: 'Golf 6',
        mark: 'Volkswagen',
        year: '2008',
        doors: '4/5',
        air: 'Yes',
        transmission: 'Manual',
        fuel: 'Diesel',
    },
    {
        name: 'Audi A1 S-Line',
        price: '45',
        img: AudiA1,
        model: 'Audi',
        mark: 'A1',
        year: '2012',
        doors: '4/5',
        air: 'Yes',
        transmission: 'Manual',
        fuel: 'Gasoline',
    },
    {
        name: 'Toyota Camry',
        price: '30',
        img: Toyota,
        model: 'Camry',
        mark: 'Toyota',
        year: '2006',
        doors: '4/5',
        air: 'Yes',
        transmission: 'Automatic',
        fuel: 'Hybrid',
    },
    {
        name: 'BMW 320 ModernLine',
        price: '35',
        img: Bmw320,
        model: '320',
        mark: 'BMW',
        year: '2012',
        doors: '4/5',
        air: 'Yes',
        transmission: 'Manual',
        fuel: 'Diesel',
    },
    {
        name: 'Mercedes-Benz GLK',
        price: '50',
        img: Benz,
        model: 'Benz GLK',
        mark: 'Mercedes',
        year: '2006',
        doors: '4/5',
        air: 'Yes',
        transmission: 'Manual',
        fuel: 'Diesel',
    },
    {
        name: 'VW Passat CC',
        price: '25',
        img: Passat,
        model: 'Passat CC',
        mark: 'Volkswagen',
        year: '2008',
        doors: '4/5',
        air: 'Yes',
        transmission: 'Automatic',
        fuel: 'Gasoline',
    },
];

export const plans: InfoItemType[] = [
    {
        icon: PlanImage1,
        title: 'Select Car',
        text: 'We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs',
    },
    {
        icon: PlanImage2,
        title: 'Contact Operator',
        text: 'Our knowledgeable and friendly operators are always ready to help with any questions or concerns',
    },
    {
        icon: PlanImage3,
        title: "Let's Drive",
        text: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
    },
];

export const benefits: InfoItemType[] = [
    {
        icon: BenefitImage1,
        title: 'Cross Country Drive',
        text: 'Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.',
    },
    {
        icon: BenefitImage2,
        title: 'All Inclusive Pricing',
        text: 'Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.',
    },
    {
        icon: BenefitImage3,
        title: 'No Hidden Charges',
        text: 'Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.',
    },
];

export const testimonials: TestimonialType[] = [
    {
        name: 'Parry Hotter',
        city: 'Belgrade',
        image: TestimonialsImage1,
        text: '"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "',
    },
    {
        name: 'Ron Rizzly',
        city: 'Novi Sad',
        image: TestimonialsImage2,
        text: '"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"',
    },
];
