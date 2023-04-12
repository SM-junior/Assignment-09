import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='mx-auto'>
            <div className="header container flex justify-between items-center ">
                <div className=" text-4xl font-bold tracking-wide">Kings-Man</div>
                <div className="flex">
                    <Link className='px-4 text-lg text-teal-500 hover:bg-teal-500 hover:text-white rounded-lg ' to="/">Home</Link>
                    <Link className='px-4 text-lg hover:bg-teal-500 hover:text-white rounded-lg' to="/statistics">Statistics</Link>
                    <Link className='px-4 text-lg hover:bg-teal-500 hover:text-white rounded-lg' to="/job">Applied job</Link>
                    <Link className='px-4 text-lg hover:bg-teal-500 hover:text-white rounded-lg' to="/blog">Blog</Link>
                </div>
                <button id='btn' className="btn btn-success px-3 py-2 rounded-lg"><a href="#">Get started</a></button>
                <div className='hidden'><FontAwesomeIcon icon={faBars} /></div>
            </div>
        </div>

    );
};

export default Header;