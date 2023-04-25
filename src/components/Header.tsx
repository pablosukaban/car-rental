import React, { useState } from 'react';
import Logo from '../images/logo/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

type linksType = {
    url: string;
    name: string;
};

const links: linksType[] = [
    { name: 'Домашняя страница', url: '/' },
    { name: 'О нас', url: 'about' },
    { name: 'Модели ', url: 'models' },
    { name: 'Отзывы', url: 'testimonials' },
    { name: 'Наша команда', url: 'team' },
    { name: 'Контакты', url: 'contact' },
];

const Header = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const openMenu = () => {
        setIsMenuClicked(true);
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        setIsMenuClicked(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header className="container ">
            <div className="absolute left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-7 py-7 font-semibold lg:px-5">
                <Link to={'/'}>
                    <div className="w-[8rem]">
                        <img src={Logo} alt="Logo" />
                    </div>
                </Link>
                <nav className="hidden lg:block">
                    <ul className="flex items-center justify-center gap-2">
                        {links.map((item, index) => (
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive
                                        ? 'rgb(255 77 48)'
                                        : 'black',
                                })}
                                to={item.url}
                                key={index}
                            >
                                <li className="cursor-pointer transition hover:text-primary">
                                    {item.name}
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </nav>
                <div className="hidden items-center justify-center gap-4 lg:flex">
                    <button className="transition hover:text-primary">
                        Вход
                    </button>
                    <button className="rounded-md bg-primary px-6 py-3 text-white shadow-sm transition hover:scale-105">
                        Регистрация
                    </button>
                </div>
                <div className="block lg:hidden">
                    <Bars3Icon
                        className="h-10 w-10 cursor-pointer text-black transition hover:text-primary"
                        onClick={openMenu}
                    />
                </div>
            </div>
            <div
                className={`fixed inset-0 z-[500] w-screen bg-white transition duration-300 ${
                    isMenuClicked ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <XMarkIcon
                    onClick={closeMenu}
                    className="absolute right-7 top-7 h-10 w-10 cursor-pointer text-black transition hover:text-primary"
                />

                <ul className="flex h-full w-full flex-col items-center justify-center gap-4">
                    {links.map((item, index) => (
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? 'rgb(255 77 48)' : 'black',
                            })}
                            to={item.url}
                            key={index}
                            onClick={closeMenu}
                        >
                            <li className="text-center text-xl font-semibold transition hover:text-primary">
                                {item.name}
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
