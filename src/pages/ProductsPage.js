import React from 'react';
import Products from '../components/sections/Products';
import IndustrialSection from '../components/sections/IndustrialSection';
import WhatsAppCTA from '../components/sections/WhatsAppCTA';

const ProductsPage = () => {
    React.useEffect(() => {
        document.title = "Buy RO Water Purifiers Madurai - Wholesale Prices | Aqua Plus";
    }, []);

    return (
        <>
            <div style={{ paddingTop: '80px' }}>
                <Products />
                <WhatsAppCTA />
                <IndustrialSection />
            </div>
        </>
    );
};

export default ProductsPage;

