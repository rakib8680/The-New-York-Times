import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;