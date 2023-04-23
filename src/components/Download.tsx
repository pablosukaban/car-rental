import React from 'react';
import AppStore from '../images/download/appstore.svg';
import GooglePlay from '../images/download/googleapp.svg';
import BgImage from '../images/banners/bg02.png';

const Download = () => {
    return (
        <section className="relative my-40 w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-6 lg:justify-start">
                <div className="flex w-full max-w-md flex-col items-center justify-center gap-12 text-center lg:justify-start lg:text-start">
                    <h1 className="w-full text-4xl font-semibold md:text-5xl">
                        Download our app to get most out of it
                    </h1>
                    <p className="text-gray-500">
                        Thrown shy denote ten ladies though ask saw. Or by to he
                        going think order event music. Incommode so intention
                        defective at convinced. Led income months itself and
                        houses you.
                    </p>
                    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                        <a
                            href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={AppStore} />
                        </a>
                        <a
                            href="https://play.google.com/store/games?hl=ru&gl=US"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={GooglePlay} />
                        </a>
                    </div>
                </div>
            </div>
            <img
                src={BgImage}
                className="absolute -bottom-1/4 right-0 hidden lg:block"
            />
        </section>
    );
};

export default Download;
