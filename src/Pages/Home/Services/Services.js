import React, { useEffect, useState } from 'react';
import SeviceCard from './SeviceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () => {
        fetch('services.json')
        .then( res => res.json())
        .then( data => setServices(data))
    }, [])

    return (
        <div className='mb-20'>
            <div className='w-7/12 mx-auto flex flex-col gap-5 text-center'>
                <p className='text-2xl font-bold text-orange-600'>Service</p>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='font-semibold text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                {
                    services.map( service => <SeviceCard key={service._id} service={service}></SeviceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-outline btn-error'>More Services</button>
            </div>
        </div>
    );
};

export default Services;