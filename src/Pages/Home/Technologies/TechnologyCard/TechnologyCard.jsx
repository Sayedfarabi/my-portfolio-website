import React from 'react';

const TechnologyCard = ({ image, title }) => {
    return (
        <div className='w-40 h-44 rounded-md mx-auto'>
            <div>
                <img src={image} className='w-2/4 h-16 my-3 rounded-md mx-auto' alt="TechnologyIcon" />
            </div>
            <div className='mx-1 text-center'>
                <h4 className='text-2xl'>{title}</h4>
            </div>
        </div>
    );
};

export default TechnologyCard;