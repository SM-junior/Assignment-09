import React from 'react';
import { Link } from 'react-router-dom';
import './FJob.css'

const FJob = ({ x }) => {
    const { img, title, subtitle, salary, location, id, remote, fulltime, icon } = x;
    return (
        <div className='bg-red-200 text-start p-10 rounded-lg'>
            <img src={img} alt="" />
            <h2 className='text-2xl text-bold mb-3 mt-2'>{title}</h2>
            <p className='mb-5'>{subtitle}</p>
            <div className='flex mb-5'>
                <button id='button' className="btn px-3 mr-4">{fulltime}</button>
                <button id='button' className="btn px-3 mr-4">{remote}</button>
            </div>
            <div className='flex mb-3'>
                <div className='mr-5'>Any <img src={icon} alt="" /></div>
                <div><p>Salary: ${salary}</p></div>
            </div>
            <Link to={`jobdetail/${id}`}>
                <button id='btn' className='px-5 py-1 rounded-md'>View Details</button>
            </Link>
        </div>
    );
};

export default FJob;