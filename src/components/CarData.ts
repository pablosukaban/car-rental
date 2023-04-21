import Golf6 from '../images/cars-big/golf6.jpg';
import AudiA1 from '../images/cars-big/audia1.jpg';
import Toyota from '../images/cars-big/toyotacamry.jpg';
import Bmw320 from '../images/cars-big/bmw320.jpg';
import Benz from '../images/cars-big/benz.jpg';
import Passat from '../images/cars-big/passatcc.jpg';

import Image1 from '../images/plan/icon1.png';
import Image2 from '../images/plan/icon2.png';
import Image3 from '../images/plan/icon3.png';

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

export type PlanType = {
    icon: string;
    title: string;
    text: string;
};

export const plans: PlanType[] = [
    {
        icon: Image1,
        title: 'Select Car',
        text: 'We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs',
    },
    {
        icon: Image2,
        title: 'Contact Operator',
        text: 'Our knowledgeable and friendly operators are always ready to help with any questions or concerns',
    },
    {
        icon: Image3,
        title: "Let's Drive",
        text: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
    },
];
