/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div className='header'>
            <nav className='nav flex justify-between items-center px-5 py-8 w-3/5 mx-auto'>
                <div className="logo text-2xl font-bold">
                    <p>BdJobs24</p>
                </div>
                <div className='flex justify-between w-2/5'>
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/applied-jobs'>Applied Jobs</Link>
                    <Link>Blog</Link>

                </div>
                <button className='apply-btn px-4 py-3 rounded-lg text-white font-bold'>Start Applying</button>
            </nav>
            {
                path === '/'? 
                <div className='banner flex items-center justify-between px-5 pt-8 w-3/5 mx-auto'>
                    <div className="text-section w-1/2">
                        <h1 className='text-6xl w-9/12 font-bold heading'> 
                            One Step Closer To Your <span className='dream-job'>Dream Job</span>
                        </h1>
                        <p className='text-slate-400 mt-8 w-4/5'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className='apply-btn mt-8 px-4 py-3 rounded-lg text-white font-bold'>
                            Get Started
                        </button>
                    </div>
                    <div className="image-section w-1/2">
                        <img src="assets/images/P3OLGJ1 copy 1.png" alt="user" />
                    </div>

                </div>: 
                path.includes('/job-details') ? <h1 className='text-2xl font-bold w-full flex justify-center py-32'>Job Details</h1>: 
                path === '/applied-jobs'? <h1 className='text-2xl font-bold w-full flex justify-center py-32'>Applied jobs</h1>: 
                path === '#'? <h1 className='text-2xl font-bold w-full flex justify-center py-32'>Blogs</h1>: 
                path === '/statistics'? <h1 className='text-2xl font-bold w-full flex justify-center py-32'>Assignment Marks</h1>:
                <h1 className='text-2xl font-bold w-full flex justify-center py-32'>404 not found</h1>
            }
        </div>
    );
};

export default Header;