import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const JobList = () => {

    const jobs = [
        {
            "id": "64344dd8715c90e12c4b25e6",
            "seat": 120,
            "name": "Account & Finance",
            "gender": "female",
            "img": "https://i.ibb.co/RhMHTPz/accounts-1.png"
        },
        {
            "id": "64344dd8cf4e91248fad9bab",
            "seat": 340,
            "name": "Creative Design",
            "gender": "female",
            "img": "https://i.ibb.co/dQh8BpM/business-1.png"
        },
        {
            "id": "64344dd8e1b75d79a5bbdc74",
            "seat": 200,
            "name": "Marketing & Sales",
            "gender": "female",
            "img": "https://i.ibb.co/CwCjsHk/chip-1.png"
        },
        {
            "id": "64344dd85c86010ede6af55e",
            "seat": 190,
            "name": "Engineering Job",
            "gender": "female",
            "img": "https://i.ibb.co/PTGLwhY/social-media-1.png"
        }
    ]
    return (
        <div className='mb-20'>
            <div>
                <h2 className='text-5xl text-bolder mb-4'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3 mt-8'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
}

export default JobList;