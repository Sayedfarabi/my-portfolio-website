import React from 'react';

const SpecialSkillCard = ({ title, value }) => {
    return (
        <div className='w-full my-4 rounded-md py-4 px-8 border-2 bg-orange-100'>
            <div className='flex justify-between py-3 text-xl'>
                <div><h5>{title}</h5></div>
                <div>{value}%</div>
            </div>
            <input type="range" min="0" max="100" value={value} className="range range-success" />
        </div>
    );
};

export default SpecialSkillCard;