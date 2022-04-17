import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { ServiceId } = useParams();

    return (
        <div>
            <h3>Welcome To Service Details: {ServiceId}</h3>
        </div>
    );
};

export default ServiceDetail;