import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ModelsPage from './pages/VehicleModelsPage';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path='/models' element={<ModelsPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
