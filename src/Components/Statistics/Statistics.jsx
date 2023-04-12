import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const Statistics = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:gap-30 items-center justify-center px-28 py-20'>
                <img className='w-64' src="https://i.ibb.co/wLgD3wB/success.jpg" alt="" />
                <div className='text-start'>
                    <h2 className='text-5xl text-bold mb-5'>Assignment <br /> marks of <br /> Programming Hero</h2>
                    <p>The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.</p>
                </div>
            </div>
            <Dashboard></Dashboard>
        </div>
    );
};

export default Statistics;