/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Job.css'
import { useNavigate } from 'react-router-dom';
import { addToDb } from '../../Utilities/fakeDB';

const Job = ({job}) => {
    const navigate = useNavigate() 
    const {id, name, company, type, status, icon, salary, location} = job
    const handleDetails = (id) =>{
        navigate(`/job-details/${id}`)
    }
    
    return (
        <div className='job border-2 border-slate-100 rounded-lg p-8'>
            <img className='h-6 w-20 mb-4' src={icon} alt="company-logo" />
            <p className='text-xl font-semibold mb-2'>{name}</p>
            <p className='text-md text-slate-500 mb-2'>{company}</p>
            <div className='job-info mb-4 md:w-1/3 w-1/2 flex justify-between'>
                <p className='px-2 py-2 md:text-sm text-xs font-semibold rounded-md border-gradient'>{type}</p>
                <p className='px-2 py-2 md:text-sm text-xs font-semibold rounded-md border-gradient'>{status}</p>
            </div>
            <div className='salary-location md:mb-3 mb-5 md:w-9/12 w-full flex justify-between'>
                <p className='flex justify-between items-center md:text-md text-xs text-slate-400'><img src="assets/icons/location.png" alt="" /> {location}</p>
                <p className='flex justify-between items-center md:text-md text-xs text-slate-400'><img src="assets/icons/dollar.png" alt="" /> Salary : {salary}</p>

            </div>
            <button className='details-btn md:px-3 px-2 md:py-2 py-1 md:text-md text-sm rounded-md text-white md:font-bold font-semibold' onClick={()=>handleDetails(id)}>
                View Details
            </button>

            
        </div>
    );
};

export default Job;