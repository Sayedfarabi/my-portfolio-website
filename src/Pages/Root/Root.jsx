import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Common/Footer/Footer';
import Navbar from '../../Component/Common/Navbar/Navbar';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div style={{ minHeight: "90vh" }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;