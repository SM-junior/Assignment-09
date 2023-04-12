import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id="footer" className='grid lg:grid-cols-4 sm:grid-cols-2 gap-10 bg-black text-white  justify-center rounded-md'>
            <div id="contact-info" className='sm:pt-3 sm:pl-10 lg:py-8 lg:pl-5'>
                <h2 className='text-4xl text-bold mb-4'>Kings-Man</h2>
                <h5 className='mb-3'>Lords Industries Ltd</h5>
                <h5>Active since 1800</h5>
            </div>
            <div id="contact-info" className='sm:pt-3 sm:pl-10 lg:py-8'>
                <li id="footer-item">
                    <p>Customer</p>
                    <a href="">HugoBoss</a>
                    <a href="">Michael Core</a>
                    <a href="">Target</a>
                    <a href="">Tesco</a>
                </li>
            </div>
            <div id="contact-info">
                <li id="footer-item" className='sm:pt-3 sm:pl-10 lg:py-8'>
                    <p>Services</p>
                    <a href="">HTML</a>
                    <a href="">CSS</a>
                    <a href="">JavaScript</a>
                    <a href="">ReactJs </a>
                </li>
            </div>
            <div id="contact-info">
                <li id="footer-item" className='sm:pt-3 sm:pl-10 lg:py-8'>
                    <p>Contact</p>
                    <a href="">Call: +697785475</a>
                    <a href="">Email: pro123@gmail.com</a>
                    <a href="">Gulshan-2, Dhaka-1200</a>
                    <a href="">Bangladesh</a>
                </li>
            </div>
        </div>
    );
};

export default Footer;