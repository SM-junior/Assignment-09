import { faDove } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Job = ({ job }) => {
    const { id, name, seat, img } = job
    return (
        <div className='bg-indigo-100 p-10 text-start rounded-lg'>
            <img className='mb-4' src={img} alt="" />
            <h3 className='text-bolder text-2xl mb-4'>{name}</h3>
            <h4>{seat} job available</h4>
        </div>
    );
};

export default Job;