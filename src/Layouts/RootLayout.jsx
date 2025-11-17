import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto' >
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;