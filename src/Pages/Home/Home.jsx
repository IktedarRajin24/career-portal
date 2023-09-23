/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;