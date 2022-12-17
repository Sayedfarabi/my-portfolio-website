import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import { useQuery } from '@tanstack/react-query';

const Services = () => {
    const { data: services = [], isLoading, refetch } = useQuery({
        queryKey: ["/myServices"],
        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:5000/myServices")
                const data = res.json()
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })

    // console.log(services);

    if (isLoading) {
        return <div className='text-center text-xl text-blue-600'>
            <h5>Loading...</h5>
        </div>
    }

    return (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-auto'>
            {
                services.map(service => {
                    return <ServiceCard
                        key={service?._id}
                        image={service?.photoURL}
                        title={service?.name}
                    >
                    </ServiceCard>
                })
            }
        </div>
    );
};

export default Services;