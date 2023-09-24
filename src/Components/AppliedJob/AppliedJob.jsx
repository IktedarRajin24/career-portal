/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({appliedJob}) => {
    // console.log(appliedJob)
    const navigate = useNavigate()
    const {icon, name, company, status, type, location, salary, id} = appliedJob;
    const handleDetails = (id) =>{
        navigate(`/job-details/${id}`)
    }

    return (
        <div className='border-2 border-slate-100 rounded-lg p-3 flex justify-between items-center'>
            <div className='bg-slate-50 w-32 h-32 rounded-lg flex items-center justify-center'>
                <img className='w-20 mb-4' src={icon} alt="" />
            </div>
            
            <div className='job-details w-9/12'>
                <p className='text-xl font-semibold mb-2'>{name}</p>
                <p className='text-md text-slate-500 mb-2'>{company}</p>
                <div className='job-info mb-4 w-1/5 flex justify-between'>
                    <p className='px-2 py-2 text-sm font-semibold rounded-md border-gradient'>{type}</p>
                    <p className='px-2 py-2 text-sm font-semibold rounded-md border-gradient'>{status}</p>
                </div>
                <div className='salary-location mb-3 w-2/5 flex justify-between'>
                    <p className='flex justify-between items-center text-slate-400'><img src="assets/icons/location.png" alt="" /> {location}</p>
                    <p className='flex justify-between items-center text-slate-400'><img src="assets/icons/dollar.png" alt="" /> Salary : {salary}</p>

                </div>
            </div>
            <button className='details-btn px-3 py-2 rounded-md text-white font-bold' onClick={()=>handleDetails(id)}>
                View Details
            </button>
            
        </div>
    );
};

export default AppliedJob;