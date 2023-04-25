import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ModelsPage from './pages/VehicleModelsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import OurTeamPage from './pages/OurTeamPage';
import ContactPage from './pages/ContactPage';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/models" element={<ModelsPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/team" element={<OurTeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
