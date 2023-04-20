import React, { useState } from 'react';
import Logo from '../images/logo/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = [
    'Home',
    'About',
    'Vehicle Models',
    'Testimonials',
    'Our Team',
    'Contact',
];

const Header = () => {
    const [isMenuClicked, seIsMenuClicked] = useState(false);

    return (
        <header className="container ">
            <div className="absolute left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-7 py-7 font-semibold lg:px-5">
                <div className="w-[8rem]">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex items-center justify-center gap-2">
                        {links.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer transition hover:text-primary"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="hidden items-center justify-center gap-4 lg:flex">
                    <button className="transition hover:text-primary">
                        Sign In
                    </button>
                    <button className="rounded-md bg-primary px-6 py-3 text-white shadow-sm transition hover:scale-105">
                        Register
                    </button>
                </div>
                <div className="block lg:hidden">
                    <Bars3Icon
                        className="h-10 w-10 text-black"
                        onClick={() => seIsMenuClicked(true)}
                    />
                </div>
            </div>
            <div
                className={`absolute inset-0 z-50 h-screen w-screen bg-white transition duration-300 ${
                    isMenuClicked ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <XMarkIcon
                    onClick={() => seIsMenuClicked(false)}
                    className="absolute right-7 top-7 h-10 w-10 text-black"
                />

                <ul className="flex h-full w-full flex-col items-center justify-center gap-4">
                    {links.map((item, index) => (
                        <li
                            key={index}
                            className="text-center text-xl font-semibold transition hover:text-primary"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
