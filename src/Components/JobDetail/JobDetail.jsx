import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleJobDetails from '../SinlgeJobDetails/SingleJobDetails';

const JobDetail = () => {
    const Job_Deteils = useLoaderData()
    let JobId = useParams()
    const [jobDeteils, setJobDeteils] = useState([])
    useEffect(() => {
        const saveJob = [];
        const jobDeteils = Job_Deteils.find(job => job.id == JobId.id)
        if (jobDeteils) {
            saveJob.push(jobDeteils)
            setJobDeteils(saveJob)
        }
    }, [])
    console.log(Job_Deteils);
    return (
        <div>
            {
                jobDeteils.map(job=> <SingleJobDetails
                key={job.id}
                x={job}
                ></SingleJobDetails>)
            }
        </div>
    );
};

export default JobDetail;