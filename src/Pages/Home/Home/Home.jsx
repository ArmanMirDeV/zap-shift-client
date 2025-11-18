import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Components/HowItWorks/HowItWorks';
import OurServices from '../../../Components/OurServices/OurServices';
import Brands from '../Brands/Brands';
import FeaturesSection from '../FeatureCard/FeatureSection';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';
import MerchantBanner from '../MarchantBanner/MarchantBanner';


const reviewsPromise = fetch('/reviews.json').then(res => res.json());


const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <OurServices />
            <Brands />
            <FeaturesSection />
            <MerchantBanner />
            <Reviews reviewsPromise={reviewsPromise} />
            <FAQ />
        </div>
    );
};

export default Home;