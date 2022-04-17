import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className='container mt-5'>
            <h2 className='service-title mb-3'>Our Services</h2>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Outlet></Outlet>
        </section>
    );
};

export default Services;