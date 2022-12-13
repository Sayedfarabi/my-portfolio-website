import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { image, name, category, duration, live, repo } = project;
    return (
        <div className='w-full flex mx-auto h-52 border rounded-md'>
            <div className='flex justify-center items-center w-2/5'>
                <div>
                    <img src={image} alt="projectImage" className='w-full' />
                </div>
            </div>
            <div className='h-full w-3/5 p-4 flex flex-col justify-between items-end'>
                <div>
                    <h4 className='text-xl'>Project Name : {name}</h4>
                    <h5 className='text-xl'>Project Category : {category}</h5>
                    <h6 className='text-xl'>Project Duration : {duration}</h6>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <a href={live} target="_blank">
                            <button className='btn btn-sm btn-success'>Live Site</button>
                        </a>
                    </div>
                    <div>
                        <a href={repo} target="_blank">
                            <button className='btn btn-sm btn-secondary'>Repository</button>
                        </a>
                    </div>
                    <div>
                        <Link to={"/"}>
                            <button className='btn btn-sm btn-primary'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;