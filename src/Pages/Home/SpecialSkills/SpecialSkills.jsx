import React from 'react';
import SpecialSkillCard from './SpecialSkillCard/SpecialSkillCard';

const SpecialSkills = () => {
    const specialSkills = [
        {
            id: "01",
            title: "Communication",
            value: 90
        },
        {
            id: "02",
            title: "Leadership",
            value: 85
        },
        {
            id: "03",
            title: "Teamwork",
            value: 80
        },
        {
            id: "04",
            title: "Flexibility",
            value: 75
        }
    ]
    return (
        <div>
            <div className=' md:flex justify-center items-center'>
                <div className='w-full sm:my-6'>
                    <h2 className='text-3xl px-6'>
                        My Special skills field here.
                    </h2>
                </div>
                <div className='w-full'>
                    {
                        specialSkills.map(skill => {
                            return <SpecialSkillCard
                                key={skill?.id}
                                title={skill?.title}
                                value={skill?.value}
                            >
                            </SpecialSkillCard>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SpecialSkills;