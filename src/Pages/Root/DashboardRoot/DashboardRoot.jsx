import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../Component/Common/Navbar/Navbar';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const DashboardRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardRoot;