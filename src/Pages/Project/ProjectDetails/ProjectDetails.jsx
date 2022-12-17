import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpdatingSite from '../../../Component/Utilities/UpdateingSite/UpdatingSite';

const ProjectDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='bg-violet-200'>
            {/* <UpdatingSite></UpdatingSite> */}
            <div>
                <h3 className='text-4xl text-secondary font-bold text-center py-12'>Project Details</h3>
            </div>
            <div className='md:flex'>
                <div className='sm:w-2/3 md:w-1/2'>
                    <img src={data.imageURL} alt="" className='sm:w-full md:w-1/2 mx-auto border-2' />
                </div>
                <div className='md:w-1/2 mx-4 my-4'>
                    <h3 className='text-3xl font-semibold mb-2'>||  {data?.name}</h3>
                    <h3 className='text-2xl font-semibold mb-2'>Service Name : <span className='text-xl'>{data?.serviceName}</span></h3>
                    <h3 className='text-xl font-semibold mb-2'>Used Technologies : <span className='font-normal'>{data?.technologies}</span></h3>
                    <h3 className='text-xl font-semibold mb-2'>Project Duration : <span className='font-normal'>{data?.duration} {data.duration > 1 ? "Days" : "Day"}</span></h3>
                    <h3 className='text-xl font-semibold mb-2'>Project Features :</h3>
                    <div className='mx-6'>
                        <ul className='list-disc'>
                            <li>{data.featureLine1}</li>
                            <li>{data.featureLine2}</li>
                            <li>{data.featureLine3}</li>
                            <li>{data.featureLine4}</li>
                            <li>{data.featureLine5}</li>
                        </ul>
                    </div>
                    <div className='my-4'>
                        <h3 className='text-2xl font-semibold mb-2'>Please Visit :</h3>
                        {/* <h3 className="text-xl text-semiboldmb"><span className='mx-4'><a href={data?.liveSide}>Live Website Link</a></span> <span><a href={data?.gitHub}>Repository Link</a></span></h3> */}
                        <a className='mr-3' href={data?.liveSide} target="_blank"><button className='btn btn-sm btn-primary'>Live Website Link</button></a>
                        <a href={data?.gitHub} target="_blank"><button className='btn btn-sm btn-primary'>Repository Link</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;