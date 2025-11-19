import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';

import authImage from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo /> 
            <div className='flex items-center h-full '>
                <div className='flex-1'>
                    <Outlet />
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;