import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ModelsPage = lazy(() => import('./pages/VehicleModelsPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const OurTeamPage = lazy(() => import('./pages/OurTeamPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loader />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Suspense fallback={<Loader />}>
                            <AboutPage />{' '}
                        </Suspense>
                    }
                />
                <Route
                    path="/models"
                    element={
                        <Suspense fallback={<Loader />}>
                            <ModelsPage />{' '}
                        </Suspense>
                    }
                />
                <Route
                    path="/testimonials"
                    element={
                        <Suspense fallback={<Loader />}>
                            <TestimonialsPage />{' '}
                        </Suspense>
                    }
                />
                <Route
                    path="/team"
                    element={
                        <Suspense fallback={<Loader />}>
                            <OurTeamPage />{' '}
                        </Suspense>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Suspense fallback={<Loader />}>
                            <ContactPage />{' '}
                        </Suspense>
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
