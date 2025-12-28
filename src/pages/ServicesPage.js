import React from 'react';
import ServicesHero from '../components/sections/ServicesHero';
import Services from '../components/sections/Services';
import AMCPlans from '../components/sections/AMCPlans';
import Booking from '../components/sections/Booking';

const ServicesPage = () => {
    React.useEffect(() => {
        document.title = "RO Repair, Installation & AMC Services Madurai | Aqua Plus";
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <ServicesHero />
            <Services />
            <AMCPlans />
            <Booking />
        </div>
    );
};

export default ServicesPage;

