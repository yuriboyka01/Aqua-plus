import React from 'react';
import Hero from '../components/sections/Hero';
import BestSellers from '../components/sections/BestSellers';
import About from '../components/sections/About';
import WhyUs from '../components/sections/WhyUs';
import FAQ from '../components/sections/FAQ';
import BlogSection from '../components/sections/BlogSection';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
    React.useEffect(() => {
        document.title = "Aqua Plus RO Tech - Best RO Sales & Service in Madurai";
    }, []);

    return (
        <>
            <Hero />
            <BestSellers />
            <About />
            <WhyUs />
            <BlogSection />
            <FAQ />
            <Testimonials />
        </>
    );
};

export default Home;
