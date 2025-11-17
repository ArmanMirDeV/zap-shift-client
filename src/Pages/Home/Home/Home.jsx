import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Components/HowItWorks/HowItWorks';
import OurServices from '../../../Components/OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <OurServices />
        </div>
    );
};

export default Home;