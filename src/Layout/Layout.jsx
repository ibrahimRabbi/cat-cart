import React from 'react';
import Navber from '../Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';

const Layout = () => {
    return (
        <div>
            <Navber />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;