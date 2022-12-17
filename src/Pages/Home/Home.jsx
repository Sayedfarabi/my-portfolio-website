import React from 'react';
import Footer from '../../Component/Common/Footer/Footer';
import Banner from './Banner/Banner';
import EmailForm from './EmailForm/EmailForm';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import SpecialSkills from './SpecialSkills/SpecialSkills';
import Technologies from './Technologies/Technologies';


const Home = () => {
    return (
        <div>
            <div className='px-5'>
                <Banner></Banner>
                <div className='text-center py-12'>
                    <h3 className='text-3xl font-bold text-secondary my-12 '>
                        || MY SERVICES ||
                    </h3>
                    <Services></Services>
                </div>
                <div className='py-12'>
                    <h3 className='text-3xl font-bold text-secondary my-12 text-center'>|| TECHNOLOGY AND SKILLS ||</h3>
                    <Technologies></Technologies>
                </div>
                <div className='py-12'>
                    <h3 className='text-3xl font-bold text-secondary my-12 text-center'>|| SPECIAL SKILLS ||</h3>
                    <SpecialSkills></SpecialSkills>
                </div>
                <div className='py-12'>
                    <h3 className='text-3xl font-bold text-secondary my-12 text-center'>|| PROJECTS ||</h3>
                    <Projects></Projects>
                </div>

            </div>
        </div>
    );
};

export default Home;