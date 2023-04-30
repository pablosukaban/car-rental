import React from 'react';
import LoaderIcon from '../images/loader.svg';

const Loader = () => {
    return (
        <div className="grid min-h-screen place-items-center">
            <img
                src={LoaderIcon}
                className="animate-spin duration-75"
                alt="loader"
            />
        </div>
    );
};

export default Loader;
