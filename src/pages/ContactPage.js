import React from 'react';
import Contact from '../components/sections/Contact';
import Booking from '../components/sections/Booking';

const ContactPage = () => {
    React.useEffect(() => {
        document.title = "Contact Aqua Plus RO Tech - Madurai's #1 RO Experts";
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <Booking />
            <Contact />
        </div>
    );
};

export default ContactPage;
