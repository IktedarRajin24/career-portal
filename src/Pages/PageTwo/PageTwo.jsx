/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PageTwo.css'

const PageTwo = () => {
    const job = useLoaderData();
    const {job_description, job_responsibilities, educational_requirements, experience_requirements, salary, name, contact} = job[0];
    
    return (
        <div className='job-info-details w-3/5 mx-auto py-20 flex justify-between'>
            <div className='job-info w-1/2'>
                <p className='text-sm text-slate-400 leading-8 mb-5 text-justify'><span className='font-bold text-black'>Job Description: </span>{job_description}</p>
                <p className='text-sm text-slate-400 leading-8 mb-5 text-justify'><span className='font-bold text-black'>Job Responsibility: </span>{job_responsibilities.map(( res, indx) => <p className='inline' key={indx}>{res} </p>)}</p>
                <p className='text-sm text-slate-400 leading-8 mb-5 text-justify'><span className='font-bold text-black'>Educational Requirements: <br /></span>{educational_requirements}</p>
                <p className='text-sm text-slate-400 leading-8 mb-5 text-justify'><span className='font-bold text-black'>Experiences: </span> <br />{experience_requirements}</p>
            </div>
            <div className='w-1/3 h-full'>
                <div className='job-details h-full bg-purple-100 p-5 mb-5 rounded-lg'>
                    <h1 className='text-lg font-bold pb-7 border-b-2 border-purple-200'>Job Details</h1>
                    <p className='pt-3 pb-1 text-slate-400 text-md'>
                        <span className='font-bold text-slate-600'>Salary: </span>{salary} (Per Month)
                    </p>
                    <p className='pt-2 pb-5 text-slate-400 text-md'>
                        <span className='font-bold text-slate-600'>Job Title: </span>{name}
                    </p>
                    <h1 className='text-lg font-bold pb-7 border-b-2 border-purple-200'>
                        Contact Information
                    </h1>
                    <p className='pt-3 pb-1 text-slate-400 text-md'>
                        <span className='font-bold text-slate-600'>Phone: </span>{contact.phone} 
                    </p>
                    <p className='pt-2 text-slate-400 text-md pb-1'>
                        <span className='font-bold text-slate-600'>Email: </span>{contact.email}
                    </p>
                    <p className='pt-2 text-slate-400 text-md pb-5'>
                        <span className='font-bold text-slate-600'>Address: </span>{contact.address}
                    </p>
                </div>
                <button className='apply-now-btn w-full mx-auto px-3 py-3 rounded-md text-white font-bold'>Apply Now</button>
            </div>
        </div>
    );
};

export default PageTwo;