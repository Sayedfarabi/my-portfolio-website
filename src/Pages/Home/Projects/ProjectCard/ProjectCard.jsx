import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { imageURL, name, serviceName, duration, _id } = project;
    return (
        <div className='w-full flex mx-auto h-48 border rounded-md'>
            <div className='flex justify-center items-center w-2/5'>
                <div>
                    <img src={imageURL} alt="projectImage" className='w-full h-44' />
                </div>
            </div>
            <div className='h-full w-3/5 p-4 flex flex-col justify-between items-end'>
                <div className=''>
                    <h4 className='font-bold'>Project Name : {name}</h4>
                    <h5 className='font-bold'>Project Category : {serviceName}</h5>
                    {/* <h6 className='text-'>Project Duration : {duration} days</h6> */}
                </div>
                <div className='flex justify-end items-center w-full'>
                    {/* <div>
                        <a href={live} target="_blank">
                            <button className='btn btn-sm btn-success'>Live Site</button>
                        </a>
                    </div>
                    <div>
                        <a href={repo} target="_blank">
                            <button className='btn btn-sm btn-secondary'>Repository</button>
                        </a>
                    </div> */}
                    <div>
                        <Link to={`/projectDetails/${_id}`}>
                            <button className='btn btn-sm btn-primary font-bold'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;