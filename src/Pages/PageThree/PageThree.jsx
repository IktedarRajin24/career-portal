/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { appliedJobs } from '../../Utilities/appliedJobs';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../../Components/AppliedJob/AppliedJob';

const PageThree = () => {
    const appliedJobs = useLoaderData()
    const [filteredJobs, setFilteredJobs] = useState(appliedJobs)
    const [filter, setFilter] = useState('');
    const setFilterValue = (e) =>{
        setFilter(e.target.value);
        if(e.target.value === ''){
            console.log(e.target.value);
            setFilteredJobs(appliedJobs)
            
        }
        else{
            let filtered = appliedJobs.filter(appliedJob => appliedJob.type === e.target.value)
            setFilteredJobs(filtered)
            
        }
    }
    // console.log(appliedJobs)
    return (
        <div className='applied-jobs w-3/5 mx-auto py-20'>
            <div className='w-full flex justify-end'>
                <select onChange={setFilterValue} className='bg-gray-200 w-2/12 p-2 text-sm text-slate-500 mb-10' name="filter" id="filter">
                    <option value="">All</option>
                    <option value="On-site">Filter By: On-site</option>
                    <option value="Remote">Filter By: Remote</option>

                </select>

            </div>
            <div className='flex flex-col gap-6 '>
                {
                    filteredJobs && filteredJobs.map(appliedJob => <AppliedJob 
                        key={appliedJob.id}
                        appliedJob={appliedJob} />)

                }
            </div>
            
        </div>
    );
};

export default PageThree;