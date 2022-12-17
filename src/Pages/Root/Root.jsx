import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Common/Footer/Footer';
import Navbar from '../../Component/Common/Navbar/Navbar';
import EmailForm from '../Home/EmailForm/EmailForm';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div style={{ minHeight: "25vh" }}>
                <Outlet></Outlet>
            </div>
            <div>
                <div className='py-12'>
                    <h3 className='text-3xl font-bold text-secondary my-12 text-center'>|| CONTACT ME ||</h3>
                    <EmailForm></EmailForm>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;