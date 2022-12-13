import React from 'react';
import TechnologyCard from './TechnologyCard/TechnologyCard';

const Technologies = () => {
    const frontEndTechnologies = [
        {
            id: "001",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "HTML"
        },
        {
            id: "002",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "CSS"
        },
        {
            id: "003",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "BootsTrap"
        },
        {
            id: "004",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Tailwind"
        },
        {
            id: "005",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Java Script"
        },
        {
            id: "006",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "React"
        },
        {
            id: "007",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "React Router DOM"
        },
        {
            id: "008",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Tan Stack Query"
        },
        {
            id: "009",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "React Hook Form"
        },
    ];

    const backEndTechnologies = [
        {
            id: "0001",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "React"
        },
        {
            id: "0002",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Node"
        },
        {
            id: "0003",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Firebase"
        },
        {
            id: "0004",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Express"
        },
        {
            id: "0005",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "MongoDB"
        },
        {
            id: "0006",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "APIs"
        },
        {
            id: "0007",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "JSON"
        },
        {
            id: "0008",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "JSON Web Token"
        },
        {
            id: "0009",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Dot Env"
        },
        {
            id: "0010",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Vercel"
        }
    ];
    const tools = [
        {
            id: "01",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "VS Code"
        },
        {
            id: "02",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "GitHub"
        },
        {
            id: "01",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Netlify"
        },
        {
            id: "01",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Figma"
        },
        {
            id: "01",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Chrome Dev Tool"
        }
    ]
    return (
        <div>
            <div className='py-8'>
                <h5 className='py-8 text-2xl text-info'>Front-End Technology and Skills</h5>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                    {
                        frontEndTechnologies.map(technology => {
                            return <TechnologyCard
                                key={technology?.id}
                                image={technology?.image}
                                title={technology?.title}
                            >
                            </TechnologyCard>
                        })
                    }

                </div>
            </div>
            <div className='py-8'>
                <h5 className='py-8 text-2xl text-info'>Back-End Technology and Skills</h5>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                    {
                        backEndTechnologies.map(technology => {
                            return <TechnologyCard
                                key={technology?.id}
                                image={technology?.image}
                                title={technology?.title}
                            >
                            </TechnologyCard>
                        })
                    }

                </div>
            </div>
            <div className='py-8'>
                <h5 className='py-8 text-2xl text-info'>Comfortable Tools</h5>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                    {
                        tools.map(tool => {
                            return <TechnologyCard
                                key={tool?.id}
                                image={tool?.image}
                                title={tool?.title}
                            >
                            </TechnologyCard>
                        })
                    }

                </div>
            </div>

        </div>
    );
};

export default Technologies;