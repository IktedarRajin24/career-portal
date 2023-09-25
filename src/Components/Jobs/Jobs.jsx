/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import './Jobs.css'
import { useLoaderData } from 'react-router-dom';

const Jobs = () => {
    const jobs = useLoaderData()
    
    
    const [allJobs, setAllJobs] = useState(jobs.slice(0,4));
    const [hidden, setHidden] = useState(true);
    const handleShowAllJobs = () =>{
        fetch('data/jobs.json')
        .then(res => res.json())
        .then(data => setAllJobs(data))

        setHidden(false)
    }
    

    return (
        <div className='jobs-section px-5 py-40 flex flex-col justify-center items-center'>
            <h1 className='md:text-3xl text-xl font-bold text-center'>
                Featured Jobs
            </h1>
            <p className='text-slate-400 md:w-full w-11/12 text-center font-light mt-5 md:text-md text-sm'>
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            <div className='grid md:grid-cols-2 gap-8 md:px-5 px-2 py-8 md:w-3/5 w-full mx-auto'>
                {
                    allJobs && allJobs.map(job => <Job key={job.id} job={job}/>)
                }
            </div>
            {
                hidden && <button onClick={handleShowAllJobs} className='all-jobs-btn md:w-1/12 mx-auto px-3 py-2 rounded-md text-white font-bold'>
                See All Jobs
            </button>
            }
            
        </div>
    );
};

export default Jobs;