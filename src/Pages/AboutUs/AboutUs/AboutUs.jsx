import React from 'react';
import { Link } from 'react-router-dom';


const AboutUs = () => {
    return (
        <div>
            <div className='text-center my-12'>
                <Link to={"/aboutUs/about"}><button className='btn btn-md btn-info my-4 w-2/3'>About</button></Link>
                <Link to={"/aboutUs/educations"}><button className='btn btn-md btn-info my-4 w-2/3'>Education</button></Link>
                <Link to={"/aboutUs/experience"}><button className='btn btn-md btn-info my-4 w-2/3'>Experience</button></Link>
                <Link to={"/aboutUs/hobbies"}><button className='btn btn-md btn-info my-4 w-2/3'>Hobbies</button></Link>
            </div>
        </div>
    );
};

export default AboutUs;