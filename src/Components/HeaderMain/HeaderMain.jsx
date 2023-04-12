import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center mt-7   mb-20'>
            <div className="dream-job text-start ">
                <h3 className='text-5xl mb-4'>
                    <span className='text-6xl font-bold'>One Step </span> <br /><span className='text-teal-500 text-6xl font-bold'>Closer To Your </span><br /> <span className='text-6xl font-bold'>Dream Job</span>
                </h3>
                <p className='mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button id='btn' className="btn btn-success px-3 py-2 rounded-lg">Get started</button>
            </div>
            <img className='w-full lg:ms-20 sm:ms-0' src="https://i.ibb.co/dfFY4Q1/header.jpg" alt="" />
        </div>
    );
};

export default HeaderMain;