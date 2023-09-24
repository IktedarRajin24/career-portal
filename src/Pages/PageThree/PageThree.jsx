/* eslint-disable no-unused-vars */
import React from 'react';
import { appliedJobs } from '../../Utilities/appliedJobs';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../../Components/AppliedJob/AppliedJob';

const PageThree = () => {
    const appliedJobs = useLoaderData()
    // console.log(appliedJobs)
    return (
        <div className='applied-jobs w-3/5 mx-auto py-20'>
            <div className='w-full flex justify-end'>
                <select className='bg-gray-200 w-1/12 p-2 text-sm mb-10' name="filter" id="filter" disabled>
                    <option value="">Filter By</option>
                </select>

            </div>
            <div className='flex flex-col gap-6 '>
                {
                    appliedJobs.map(appliedJob => <AppliedJob 
                        key={appliedJob.id}
                        appliedJob={appliedJob} />)

                }
            </div>
            
        </div>
    );
};

export default PageThree;