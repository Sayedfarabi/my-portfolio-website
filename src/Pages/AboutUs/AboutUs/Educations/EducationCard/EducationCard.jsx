import React from 'react';
import { Link } from 'react-router-dom';

const EducationCard = ({ educationalQualification }) => {
    return (
        <div className='mx-4 my-12 md:my-16'>
            <div className="card sm:w-full md:w-4/5 bg-fuchsia-100 shadow-xl mx-auto">
                <figure><img src={educationalQualification?.image} alt="InstituteImage" className='w-3/4' /></figure>
                <div className="card-body">
                    <div className='md:flex justify-between items-center'>
                        <div>
                            <h2 className="card-title font-bold">||  {educationalQualification?.institute} <span className='text-sm'>__{educationalQualification?.university}</span></h2>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold'>{educationalQualification?.program}   <span>{educationalQualification?.academicYear}</span></h3>
                        </div>
                    </div>
                    <div className='md:flex justify-between items-center font-semibold'>
                        <div>
                            <h4> Subject : {educationalQualification?.subject}</h4>
                        </div>
                        <div>
                            <h4>Course Duration : {educationalQualification?.courseDuration} </h4>
                        </div>
                    </div>
                    <p>{educationalQualification?.paragraph}</p>
                    <div className="card-actions justify-end">
                        <a href={educationalQualification?.websiteLink} target="_blank"><button className="btn btn-primary">Visit Website</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;