import React from 'react';
import sayedImg from '../../../Assets/sayed.png';
import resume from '../../../Assets/Resume.png';

const Banner = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 bg-sky-100'>
                <div className='text-center flex justify-center items-center'>
                    <img src={sayedImg} alt="SayedImg" className='sm:w-4/5 md:w-4/5' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-5xl">Hello !! I'm</h2>
                            <h1 className='text-6xl'>Abu Sayed</h1>
                            <p className='text-2xl'>I am a web developer. I have good skills on web development. Please download my Resume.</p>
                            <div className="card-actions justify-center mt-8">
                                <a href={resume} download="sayed-resume" >
                                    <button className="btn btn-sm btn-primary">
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;