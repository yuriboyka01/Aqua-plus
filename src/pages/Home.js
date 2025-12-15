import React from 'react';
import Hero from '../components/sections/Hero';
import BestSellers from '../components/sections/BestSellers';
import About from '../components/sections/About';
import WhyUs from '../components/sections/WhyUs';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <BestSellers />
            <About />
            <WhyUs />
            <Testimonials />
        </>
    );
};

export default Home;
