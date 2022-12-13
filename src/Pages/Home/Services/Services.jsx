import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const myServices = [
        {
            id: 1,
            image: "https://cdn-icons-png.flaticon.com/512/1458/1458523.png",
            title: "Landing Page Design"
        },
        {
            id: 2,
            image: "https://cdn-icons-png.flaticon.com/512/8099/8099697.png",
            title: "Front-End Development"
        },
        {
            id: 3,
            image: "https://icons-for-free.com/iconfiles/png/512/coding+development+javascript+script+website+window+icon-1320196669451858318.png",
            title: "JavaScript Development"
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIONxUc_D2FJYK885H6O1qXPSFKkl78NbyA&usqp=CAU",
            title: "React Development"
        },
        {
            id: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WklNxRxn5JyH2E40OxuLB82XYdecEGLYrZaJ24zb6S4Icuss0Egzb0vqboJlfcCMaRM&usqp=CAU",
            title: "MERN-Stack Development"
        },
        {
            id: 6,
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Full-Stack Development"
        },
    ]

    return (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-auto'>
            {
                myServices.map(service => {
                    return <ServiceCard
                        key={service?.id}
                        image={service?.image}
                        title={service?.title}
                    >
                    </ServiceCard>
                })
            }
        </div>
    );
};

export default Services;