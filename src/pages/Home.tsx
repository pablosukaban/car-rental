import React from 'react';
import Hero from '../components/Hero';
import BookCar from '../components/BookCar';
import Plans from '../components/Plans';
import Models from '../components/Models';
import SupportInfo from '../components/SupportInfo';

const Home = () => {
    return (
        <div>
            <Hero />
            <BookCar />
            <Plans />
            <Models />
            <SupportInfo />
        </div>
    );
};

export default Home;
