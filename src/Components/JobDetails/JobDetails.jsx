import React from 'react';
const JobDetails = () => {
    return (
        <div>
            <h2 className='text-5xl text-bold mt-10 mb-10'>Job details </h2>
            <div className='grid grid-cols-2 justify-around'>
                <div className='text-start'>
                    <p className='mb-5'><span className='text-bold text-lg'> Job Description: </span>We're seeking a talented software engineer to join our team and help us build innovative software products. As a Software Engineer, you will work collaboratively with a team of experienced developers to design, develop, and implement software solutions that meet the needs of our customers.</p>
                    <p className='mb-5'><span className='text-bold text-lg'> Job Responsibility: </span>Develop and maintain software applications.</p>
                    <p className='mb-5'><span className='text-bold text-lg'> Job Responsibility: </span>Develop and maintain software applications.</p>
                    <p className='mb-5'><span className='text-bold text-lg'> Educational Requirements: </span>Bachelor's degree in computer science or related field.</p>
                    <p className='mb-5'><span className='text-bold text-lg'> Experiences: </span>5+ years of experience in software development.</p>
                </div>
                <div className='border-amber-600 text-start bg-green-300 flex justify-center'>
                    <div>
                        <h2>Job details</h2>
                        <p>Salary:</p>
                        <p>Job title:</p>
                        <h2>Contact Information</h2>
                        <p>Phone:</p>
                        <p>Email:</p>
                        <p>Address:</p>
                        <button id='btn' className='py-1 px-3 rounded-md'>Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;