/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const [open, setOpen] = useState(false);
    return (
        <div className='header'>
            <nav className='nav flex justify-between items-center md:px-5 py-8 md:w-3/5 mx-auto'>
                <div className="logo text-2xl ps-5 font-bold">
                    <p>BdJobs24</p>
                </div>
                <div className={`flex md:flex-row md:items-center items-start md:gap-0 gap-3 md:bg-transparent bg-purple-50 md:p-0 px-5 pt-2 pb-10 md:w-9/12 w-full flex-col justify-between absolute md:static ${open? 'top-16':'-top-96'}`}>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                    <button className='apply-btn md:ms-44 px-4 py-3 text-xs rounded-lg text-white font-bold'>Start Applying</button>

                </div>
                
                <div onClick={()=>setOpen(!open)} className='md:hidden pe-5'>
                    {
                        open? <XMarkIcon className="h-8 w-8 text-purple-900"></XMarkIcon>:<Bars3Icon className="h-8 w-8 text-purple-900"></Bars3Icon>
                    }

                </div>
            </nav>
            {
                path === '/'? 
                <div className='banner flex md:flex-row flex-col items-center justify-between px-5 pt-8 md:w-3/5 w-11/12 mx-auto'>
                    <div className="text-section md:w-1/2 w-11/12">
                        <h1 className='md:text-6xl text-3xl md:w-9/12 w-11/12 font-bold heading'> 
                            One Step Closer To Your <span className='dream-job'>Dream Job</span>
                        </h1>
                        <p className='text-slate-400 md:text-md text-sm mt-8 w-4/5'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className='apply-btn mt-8 md:px-4 px-2 md:py-3 py-2 rounded-lg text-white font-bold'>
                            Get Started
                        </button>
                    </div>
                    <div className="image-section md:w-1/2 w-full flex  md:flex-row flex-col items-end">
                        <img className='md:w-full w-1/2' src="assets/images/P3OLGJ1 copy 1.png" alt="user" />
                    </div>

                </div>: 
                path.includes('/job-details') ? <h1 className='text-2xl font-bold w-full flex justify-center py-32'>Job Details</h1>: 
                path === '/applied-jobs'? <h1 className='text-2xl font-bold w-full flex justify-center py-32'>Applied jobs</h1>: 
                path === '/blog'? <h1 className='text-2xl font-bold w-full flex justify-center py-32'>Blogs</h1>: 
                path === '/statistics'? <h1 className='text-2xl font-bold w-full flex justify-center py-32'>Assignment Marks</h1>:
                <h1 className='text-2xl font-bold w-full flex justify-center py-32'>404 not found</h1>
            }
        </div>
    );
};

export default Header;