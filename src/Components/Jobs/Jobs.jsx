/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('data/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className='jobs-section px-5 pt-40'>
            <h1 className='text-3xl font-bold text-center'>
                Featured Jobs
            </h1>
            <p className='text-slate-400 text-center font-light mt-5'>
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            <div className='grid grid-cols-2 gap-8 px-5 py-8 w-3/5 mx-auto'>
                {
                    jobs.slice(0,4).map(job => <Job key={job.id} job={job}/>)
                }
            </div>
            
            
        </div>
    );
};

export default Jobs;