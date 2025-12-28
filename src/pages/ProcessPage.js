import React from 'react';
import FiltrationProcess from '../components/sections/FiltrationProcess';

const ProcessPage = () => {
    React.useEffect(() => {
        document.title = "Our 7-Stage Water Filtration Process | Aqua Plus RO Tech";
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <FiltrationProcess />
        </div>
    );
};

export default ProcessPage;
