import React from 'react';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const TestimonialsPage = () => {
    return (
        <div>
            <div className="grid min-h-screen place-content-center">
                <Testimonials />
            </div>
            <CallToAction />
        </div>
    );
};

export default TestimonialsPage;
