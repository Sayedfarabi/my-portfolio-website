import React from 'react';

const ServiceCard = ({ image, title }) => {
    return (
        <div className='w-44 h-60 border-2 rounded-md mx-auto'>
            <div>
                <img src={image} className='w-3/4 h-24 my-5 rounded-md mx-auto' alt="Landing page Icon" />
            </div>
            <div className='mx-1'>
                <h4 className='text-2xl'>{title}</h4>
            </div>
        </div>
    );
};

export default ServiceCard;