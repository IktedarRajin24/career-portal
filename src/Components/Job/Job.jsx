/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Job.css'

const Job = ({job}) => {
    const {id, name, company, type, status, icon, salary, location} = job
    return (
        <div className='job border-2 border-slate-100 rounded-lg p-8'>
            <img className='h-6 mb-4' src={icon} alt="company-logo" />
            <p className='text-xl font-semibold mb-2'>{name}</p>
            <p className='text-lg text-slate-500 mb-2'>{company}</p>
            <div className='job-info mb-4 w-2/5 flex justify-between'>
                <p className='px-2 py-2 rounded-md border-gradient'>{type}</p>
                <p className='px-2 py-2 rounded-md border-gradient'>{status}</p>
            </div>
            <div className='salary-location mb-3 w-9/12 flex justify-between'>
                <p className='flex justify-between items-center text-slate-400'><img src="assets/icons/Frame-4.png" alt="" /> {location}</p>
                <p className='flex justify-between items-center text-slate-400'><img src="assets/icons/Frame.png" alt="" /> Salary : {salary}</p>

            </div>
            <button className='details-btn px-3 py-2 rounded-md text-white font-bold'>
                View Details
            </button>

            
        </div>
    );
};

export default Job;