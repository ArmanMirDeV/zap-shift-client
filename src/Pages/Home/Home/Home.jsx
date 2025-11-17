import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Components/HowItWorks/HowItWorks';
import OurServices from '../../../Components/OurServices/OurServices';
import Brands from '../Brands/Brands';
import FeaturesSection from '../FeatureCard/FeatureSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <OurServices />
            <Brands />
            <FeaturesSection />
        </div>
    );
};

export default Home;