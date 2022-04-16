import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='footer-section'>
            <i>All Right Reserved | &#169;{year} </i>
        </footer>
    );
};

export default Footer;