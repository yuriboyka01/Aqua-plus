import React from 'react';
import Contact from '../components/sections/Contact';
import Booking from '../components/sections/Booking';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Booking />
            <Contact />
        </div>
    );
};

export default ContactPage;
