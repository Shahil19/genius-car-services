import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <h4>{name}</h4>
            <p><small>{description}</small></p>
            <p>price: ${price}</p>
            <button onClick={() => navigateToServiceDetail(id)} >Book Now</button>
        </div>
    );
};

export default Service; <h4>This is Service</h4>