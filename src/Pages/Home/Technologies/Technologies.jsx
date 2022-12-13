import React from 'react';
import TechnologyCard from './TechnologyCard/TechnologyCard';

const Technologies = () => {
    const frontEndTechnologies = [
        {
            id: "001",
            image: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-html-file-document-icon-png-image_927519.jpg",
            title: "HTML"
        },
        {
            id: "002",
            image: "https://icon-library.com/images/css-icon-png/css-icon-png-0.jpg",
            title: "CSS"
        },
        {
            id: "003",
            image: "https://logospng.org/wp-content/uploads/bootstrap.png",
            title: "BootsTrap"
        },
        {
            id: "004",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
            title: "Tailwind"
        },
        {
            id: "005",
            image: "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png",
            title: "Java Script"
        },
        {
            id: "006",
            image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png",
            title: "React"
        },
        {
            id: "007",
            image: "https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png",
            title: "React Router DOM"
        },
        {
            id: "008",
            image: "https://img1.daumcdn.net/thumb/C176x176/?fname=https://k.kakaocdn.net/dn/cfnvfU/btq5WI1oqDO/Q8GK3PcmOkEO3LDx2XmSkk/img.png",
            title: "Tan Stack Query"
        },
        {
            id: "009",
            image: "https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg",
            title: "React Hook Form"
        },
    ];

    const backEndTechnologies = [
        {
            id: "0001",
            image: "https://tublitzed.com/img/portfolio/node/browser/full/2.jpg",
            title: "React"
        },
        {
            id: "0002",
            image: "https://w7.pngwing.com/pngs/465/234/png-transparent-cinema-marquee-film-theatre-others-angle-text-rectangle.png",
            title: "Node"
        },
        {
            id: "0003",
            image: "https://e7.pngegg.com/pngimages/119/167/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangle-thumbnail.png",
            title: "Firebase"
        },
        {
            id: "0004",
            image: "https://initialcommit.com/img/initialcommit/beginners-guide-to-using-express-js-and-node-js-framework.png",
            title: "Express"
        },
        {
            id: "0005",
            image: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg",
            title: "MongoDB"
        },
        {
            id: "0006",
            image: "https://www.snow-mirror.com/wp-content/uploads/2014/08/learnmore-api1.png",
            title: "APIs"
        },
        {
            id: "0007",
            image: "https://cdn-icons-png.flaticon.com/512/136/136525.png",
            title: "JSON"
        },
        {
            id: "0008",
            image: "https://w7.pngwing.com/pngs/669/853/png-transparent-security-token-json-web-token-access-token-representational-state-transfer-others-miscellaneous-angle-rectangle-thumbnail.png",
            title: "JSON Web Token"
        },
        {
            id: "0009",
            image: "https://raw.githubusercontent.com/cdimascio/dotenv-kotlin/master/assets/kotlin-dotenv-logo.png",
            title: "Dot Env"
        },
        {
            id: "0010",
            image: "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png",
            title: "Vercel"
        }
    ];
    const tools = [
        {
            id: "01",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
            title: "VS Code"
        },
        {
            id: "02",
            image: "https://w7.pngwing.com/pngs/321/703/png-transparent-computer-icons-github-logo-github-monochrome-rim-black-and-white.png",
            title: "GitHub"
        },
        {
            id: "01",
            image: "https://img.stackshare.io/service/2748/default_5dfbb146cf22182bca88c7d07f2515a5888fc12a.jpg",
            title: "Netlify"
        },
        {
            id: "01",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
            title: "Figma"
        },
        {
            id: "01",
            image: "https://toppng.com/uploads/preview/oogle-chrome-developer-tools-google-developers-icon-11563029118otjotftm9o.png",
            title: "Chrome Dev Tool"
        }
    ]
    return (
        <div>
            <div className='py-8'>
                <h5 className='py-8 text-3xl text-info'>Front-End Technology and Skills</h5>
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
                <h5 className='py-8 text-3xl text-info text-right'>Back-End Technology and Skills</h5>
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
                <h5 className='py-8 text-3xl text-info'>Comfortable Tools</h5>
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