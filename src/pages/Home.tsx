import React, { useState, useRef, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import Hero from '../components/Hero';
import BookCar from '../components/BookCar';
import Plans from '../components/Plans';
import Models from '../components/Models';
import SupportInfo from '../components/SupportInfo';
import ChooseUs from '../components/ChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Download from '../components/Download';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);

    const homeRef = useRef<HTMLDivElement>(null);
    const bookCarRef = useRef<HTMLSelectElement>(null);
    const heroRef = useRef<HTMLSelectElement>(null);

    const openBookModal = () => {
        setIsBookModalOpen(true);
    };

    const closeBookModal = () => {
        setIsBookModalOpen(false);
    };

    const scrollToBookCar = (e: React.MouseEvent) => {
        e.preventDefault();
        if (bookCarRef.current) {
            bookCarRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHero = (e: React.MouseEvent) => {
        e.preventDefault();
        if (heroRef.current) {
            heroRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (homeRef.current) {
                setIsScrolled(homeRef.current.getBoundingClientRect().top < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={homeRef} className="relative">
            <Hero ref={heroRef} bookRideClick={scrollToBookCar} />
            <BookCar
                ref={bookCarRef}
                isBookModalOpen={isBookModalOpen}
                openModal={openBookModal}
                closeModal={closeBookModal}
            />
            <Plans />
            <Models reserveNowClick={scrollToBookCar} />
            <SupportInfo />
            <ChooseUs findDetailsClick={scrollToHero} />
            <Testimonials />
            <FAQ />
            <Download />
            {isScrolled && !isBookModalOpen ? (
                <button
                    onClick={scrollToHero}
                    className="fixed bottom-5 right-5 z-50 rounded-full bg-primary p-4 text-white"
                >
                    <ChevronUpIcon className="h-4 w-4 md:h-6 md:w-6" />
                </button>
            ) : (
                ''
            )}
        </div>
    );
};

export default Home;
