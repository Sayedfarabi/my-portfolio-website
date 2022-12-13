import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import furnitureBeaImage from '../../../Assets/project-image/furniturebea.jpg';
import easyYogaImage from '../../../Assets/project-image/easy-yoga.jpg';
import dailyNewsOnlineImage from '../../../Assets/project-image/news-today-online.jpg';
import twistQuizImage from '../../../Assets/project-image/twist-quiz.jpg';
import eshoShikhiImage from '../../../Assets/project-image/esho-shikhi.jpg';
import myActivitiesTodayImage from '../../../Assets/project-image/my-activities-today.jpg';
import calculatorImage from '../../../Assets/project-image/calculator.jpg';
import moneyMasterImage from '../../../Assets/project-image/money-master.jpg';
import pinMatcherImage from '../../../Assets/project-image/pin-matcher.jpg';
import donateTodayImage from '../../../Assets/project-image/donate-today.jpg';
import sayedTechImage from '../../../Assets/project-image/sayed-tech.jpg';
import worldCupImage from '../../../Assets/project-image/world-cup.jpg';
import eSchoolImage from '../../../Assets/project-image/E-school.jpg';
import hotGadgetImage from '../../../Assets/project-image/hot-gadget.jpg';
import pandaEcommerceImage from '../../../Assets/project-image/Panda-commerce.jpg';

const Projects = () => {

    const projects = [
        {
            id: "project01",
            image: { furnitureBeaImage },
            url: "furnitureBeaImage",
            name: "FurnitureBea",
            category: "Full-Stack web development",
            duration: "05",
            feature: "",
            technology: "",
            live: "https://furniturebea-7b359.web.app",
            repo: "https://github.com/Sayedfarabi/furniture-bea-client-side"
        },
        {
            id: "project02",
            image: { easyYogaImage },
            name: "Easy Yoga",
            category: "React web development",
            duration: "03",
            feature: "",
            technology: "",
            live: "https://easy-yoga-c675c.web.app",
            repo: "https://github.com/Sayedfarabi/easy-yoga-client-side"
        },
        {
            id: "project03",
            image: { dailyNewsOnlineImage },
            name: "Daily News Online",
            category: "Java script web development",
            duration: "02",
            feature: "",
            technology: "",
            live: "https://marvelous-snickerdoodle-73458f.netlify.app/",
            repo: "https://github.com/Sayedfarabi/daily-news-online"
        },
        {
            id: "project04",
            image: { twistQuizImage },
            name: "Twist Quiz",
            category: "React web development",
            duration: "03",
            feature: "",
            technology: "",
            live: "https://shiny-donut-67e402.netlify.app/",
            repo: "https://github.com/Sayedfarabi/twist-quiz"
        },
        {
            id: "project05",
            image: { eshoShikhiImage },
            name: "Esho Shikhi",
            category: "React web development",
            duration: "03",
            feature: "",
            technology: "",
            live: "https://esho-shikhi.web.app/",
            repo: "https://github.com/Sayedfarabi/esho-shikhi-client-side"
        },
        {
            id: "project06",
            image: { myActivitiesTodayImage },
            name: "My Activities Today",
            category: "React web development",
            duration: "03",
            feature: "",
            technology: "",
            live: "https://unrivaled-dolphin-e7d755.netlify.app/",
            repo: "https://github.com/Sayedfarabi/my-activities-today"
        },
        {
            id: "project07",
            image: { calculatorImage },
            name: "Calculator",
            category: "Java Script web development",
            duration: "01",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/calculator-js/",
            repo: "https://github.com/Sayedfarabi/calculator-js"
        },
        {
            id: "project08",
            image: { moneyMasterImage },
            name: "Money Master",
            category: "Java Script web development",
            duration: "02",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/money-master/",
            repo: "https://github.com/Sayedfarabi/money-master"
        },
        {
            id: "project09",
            image: { pinMatcherImage },
            name: "Pin Matcher",
            category: "Java Script web development",
            duration: "01",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/pin-matcher-practise/",
            repo: "https://github.com/Sayedfarabi/pin-matcher-practise"
        },
        {
            id: "project10",
            image: { donateTodayImage },
            name: "Donate Today",
            category: "Landing Page web development",
            duration: "01",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/donate-today/",
            repo: "https://github.com/Sayedfarabi/donate-today"
        },
        {
            id: "project11",
            image: { sayedTechImage },
            name: "Sayed Tech",
            category: "Landing Page web development",
            duration: "01",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/sayed-tech/",
            repo: "https://github.com/Sayedfarabi/sayed-tech"
        },
        {
            id: "project12",
            image: { worldCupImage },
            name: "World Cup",
            category: "Front-End web development",
            duration: "01",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/world-cup/",
            repo: "https://github.com/Sayedfarabi/world-cup"
        },
        {
            id: "project13",
            image: { eSchoolImage },
            name: "E-School",
            category: "Landing Page web development",
            duration: "01",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/E-School/",
            repo: "https://github.com/Sayedfarabi/E-School"
        },
        {
            id: "project14",
            image: { hotGadgetImage },
            name: "Hot Gadget",
            category: "Landing Page web development",
            duration: "01",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/hot-gadget/",
            repo: "https://github.com/Sayedfarabi/hot-gadget"
        },
        {
            id: "project15",
            image: { pandaEcommerceImage },
            name: "Panda E-commerce",
            category: "Landing Page web development",
            duration: "01",
            feature: "",
            technology: "",
            live: "https://sayedfarabi.github.io/Panda-commerce/",
            repo: "https://github.com/Sayedfarabi/Panda-commerce"
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                projects.map(project => {
                    return <ProjectCard
                        key={project?.id}
                        project={project}
                    >
                    </ProjectCard>
                })
            }

        </div>
    );
};

export default Projects;