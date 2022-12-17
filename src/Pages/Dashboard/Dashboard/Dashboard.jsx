import React from 'react';
import { Link } from 'react-router-dom';
// import DashboardHome from './DashboardHome/DashboardHome';

const Dashboard = () => {
    return (
        <div>
            {/* <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-fuchsia-600 font-semibold">
                            <li><Link to={"/dashboard/addService"} >Add Service</Link></li>
                            <li><Link to={"/dashboard/addProject"}>Add Project</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-fuchsia-600 font-semibold">
                        <li><Link to={"/dashboard/addService"}>Add Service</Link></li>
                        <li><Link to={"/dashboard/addProject"}>Add Project</Link></li>
                    </ul>
                </div>
            </div> */}

            <div className='text-center my-12'>
                <Link to={"/dashboard/addService"}><button className='btn btn-md btn-info my-4 w-2/3'>Add Service</button></Link>
                <Link to={"/dashboard/addProject"}><button className='btn btn-md btn-info my-4 w-2/3'>Add Project</button></Link>
                {/* <Link to={"/aboutUs/experience"}><button className='btn btn-md btn-info my-4 w-2/3'>Experience</button></Link>
                <Link to={"/aboutUs/hobbies"}><button className='btn btn-md btn-info my-4 w-2/3'>Hobbies</button></Link> */}
            </div>
        </div>
    );
};

export default Dashboard;