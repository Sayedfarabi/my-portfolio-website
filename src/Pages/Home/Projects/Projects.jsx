import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import { useQuery } from '@tanstack/react-query';

const Projects = () => {


    const { data: myProjects = [], isLoading, refetch } = useQuery({
        queryKey: ["/myProjects"],
        queryFn: async () => {
            try {
                const res = await fetch("https://my-portfolio-server-side.vercel.app/myProjects")
                const data = res.json()
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })

    console.log(myProjects);

    if (isLoading) {
        return <div className='text-center text-xl text-blue-600'>
            <h5>Loading...</h5>
        </div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4'>
            {
                myProjects.map(project => {
                    return <ProjectCard
                        key={project?._id}
                        project={project}
                    >
                    </ProjectCard>
                })
            }

        </div>
    );
};

export default Projects;