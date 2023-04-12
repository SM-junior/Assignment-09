import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ViewApply = ({ y }) => {
    const { img, title, subtitle, salary, location, id, remote, fulltime, icon } = y;
    return (
        <div className="w-3/5 mx-auto border-4 my-10 rounded-md flex justify-between items-center  h-auto p-5 ">
            <div className="flex items-center gap-5">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='text-start ml-4'>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    <div className="flex gap-5 my-2">
                        <p className="my-outline">{remote}</p>
                        <p className="my-outline">{fulltime}</p>
                    </div>
                    <div className="flex gap-4 items-center text-gray-500 my-5">
                        <p className="flex justify-between items-center">
                            <MapPinIcon className="w-7 text-[#757575]" />
                            {location}
                        </p>
                        <p className="flex mt-2 items-center">
                            <CurrencyDollarIcon className="w-5 text-[#757575]" />
                            <span className="font-semibold text-xl">Salary:</span> &nbsp;{" "}
                            {salary}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/jobdetail/${id}`}>
                    <button id='btn' className='px-5 py-1 rounded-md'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ViewApply;