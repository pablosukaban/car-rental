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

export type FaqType = {
    question: string;
    answer: string;
};

export const FaqList: FaqType[] = [
    {
        question:
            '1. Что особенного в сравнении предложений по аренде автомобилей?',
        answer: 'Сравнение предложений по аренде автомобилей очень важно, поскольку оно помогает найти наилучшее предложение, соответствующее вашему бюджету и требованиям, гарантируя, что вы получите максимальную отдачу за свои деньги. Сравнивая различные варианты, вы можете найти предложения, предлагающие более низкие цены, дополнительные услуги или лучшие модели автомобилей. Вы можете найти предложения по аренде автомобилей, проведя исследование в Интернете и сравнив цены от различных прокатных компаний.',
    },
    {
        question: '2. Как найти предложения по аренде автомобилей?',
        answer: 'Вы можете найти предложения по аренде автомобилей, изучив информацию в Интернете и сравнив цены от различных компаний по прокату. Такие сайты, как Expedia, Kayak и Travelocity, позволяют сравнивать цены и просматривать доступные варианты аренды. Также рекомендуется подписаться на рассылку новостей по электронной почте и следить за компаниями по прокату автомобилей в социальных сетях, чтобы быть в курсе любых специальных предложений или акций.',
    },
    {
        question: '3. Как я найду такие низкие цены на аренду автомобиля?',
        answer: 'Забронируйте заранее: Заблаговременное бронирование автомобиля напрокат часто может привести к более низким ценам. Сравните цены от нескольких компаний: используйте такие веб-сайты, как Kayak, Expedia или Travelocity, чтобы сравнить цены от нескольких компаний по аренде автомобилей. Ищите коды скидок и купоны: ищите коды скидок и купоны, которые можно использовать для снижения стоимости аренды. Аренда за пределами аэропорта иногда может привести к более низким ценам.',
    },
];

export const CAR_DATA: CarDataType[] = [
    {
        name: 'VW Golf 6',
        price: '37',
        img: Golf6,
        model: 'Golf 6',
        mark: 'Volkswagen',
        year: '2008',
        doors: '4/5',
        air: 'Да',
        transmission: 'Механика',
        fuel: 'Дизель',
    },
    {
        name: 'Audi A1 S-Line',
        price: '45',
        img: AudiA1,
        model: 'Audi',
        mark: 'A1',
        year: '2012',
        doors: '4/5',
        air: 'Да',
        transmission: 'Механика',
        fuel: 'Бензин',
    },
    {
        name: 'Toyota Camry',
        price: '30',
        img: Toyota,
        model: 'Camry',
        mark: 'Toyota',
        year: '2006',
        doors: '4/5',
        air: 'Да',
        transmission: 'Автомат',
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
        air: 'Да',
        transmission: 'Механика',
        fuel: 'Дизель',
    },
    {
        name: 'Mercedes-Benz GLK',
        price: '50',
        img: Benz,
        model: 'Benz GLK',
        mark: 'Mercedes',
        year: '2006',
        doors: '4/5',
        air: 'Да',
        transmission: 'Механика',
        fuel: 'Дизель',
    },
    {
        name: 'VW Passat CC',
        price: '25',
        img: Passat,
        model: 'Passat CC',
        mark: 'Volkswagen',
        year: '2008',
        doors: '4/5',
        air: 'Да',
        transmission: 'Автомат',
        fuel: 'Бензин',
    },
];

export const plans: InfoItemType[] = [
    {
        icon: PlanImage1,
        title: 'Выберите автомобиль',
        text: 'Мы предлагаем большой выбор автомобилей для всех ваших потребностей. У нас есть идеальный автомобиль для удовлетворения ваших потребностей',
    },
    {
        icon: PlanImage2,
        title: 'Свяжитесь с оператором',
        text: 'Наши знающие и доброжелательные операторы всегда готовы помочь в решении любых вопросов и проблем',
    },
    {
        icon: PlanImage3,
        title: 'В путь',
        text: 'Если вы собираетесь на открытую дорогу, мы позаботимся о вас, предоставив широкий выбор автомобилей.',
    },
];

export const benefits: InfoItemType[] = [
    {
        icon: BenefitImage1,
        title: 'Поездка через страну',
        text: 'Поднимите свой опыт вождения на новый уровень с нашими первоклассными автомобилями для ваших приключений по пересеченной местности.',
    },
    {
        icon: BenefitImage2,
        title: 'Ценообразование по системе "Все включено',
        text: 'Получите все необходимое по одной удобной и прозрачной цене благодаря нашей политике ценообразования "все включено".',
    },
    {
        icon: BenefitImage3,
        title: 'Никаких скрытых платежей',
        text: 'Наслаждайтесь душевным спокойствием благодаря нашей политике отсутствия скрытых платежей. Мы верим в прозрачное и честное ценообразование.',
    },
];

export const testimonials: TestimonialType[] = [
    {
        name: 'Парри Хоттер',
        city: 'Екатеринбург',
        image: TestimonialsImage1,
        text: '"Мы арендовали автомобиль с этого сайта и получили потрясающий опыт! Бронирование было простым, а цены на аренду были очень доступными."',
    },
    {
        name: 'Рон Риззли',
        city: 'Тюмень',
        image: TestimonialsImage2,
        text: '"Автомобиль был в отличном состоянии и сделал нашу поездку еще лучше. Очень рекомендую этот сайт по аренде автомобилей!"',
    },
];
