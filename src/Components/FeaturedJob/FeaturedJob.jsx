import React, { useEffect, useState } from 'react';
import FJob from '../fJobs/FJob';

const FeaturedJob = () => {
    const [data, setData] = useState([]);
    const [showall, setShowall]=useState(false)
    useEffect(() => {
        fetch('featureJob.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const handleshowall=()=>{
        setShowall(true);
    }

    return (
        <div>
            <h2 className='text-5xl text-bold '>Featured Jobs</h2>
            <p className='mb-10'>Check out our featured jobs section for the latest and most exciting career opportunities.</p>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-10'>
                {
                    data?.slice(0,showall?6:4).map(y => <FJob
                        key={y.id}
                        x={y}
                    ></FJob>)
                }
            </div>
                {
                    !showall && <button onClick={handleshowall} id='btn' className='mt-10 px-3 py-1 rounded-md'>Show all</button>

                }
        </div>
    );
};

export default FeaturedJob;