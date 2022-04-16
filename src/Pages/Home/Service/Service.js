import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p><small>{description}</small></p>
            <p>price: ${price}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service; <h4>This is Service</h4>