/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <div className='footer bg-gray-900 text-white md:py-32 py-20 px-0 h-max'>
            <div className='px-5 md:py-8 py-0 md:w-3/5 w-full mx-auto md:flex justify-between  items-start grid grid-cols-2 border-b-2 border-slate-600'>
                <div className='company-details md:w-1/3 w-11/12 col-span-2 md:my-0 my-10'>
                    <h1 className='text-2xl font-bold pb-10'>BdJobs24</h1>
                    <p className='text-sm w-9/12 text-slate-400 pb-5'>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
                    <img className='w-1/3' src="assets/icons/Group 9969.png" alt="" />
                </div>
                <div className='about md:ms-10 md:my-0 my-10'>
                    <h1 className='font-semibold text-lg pb-5'>
                        Company
                    </h1>
                    <p className='text-sm pb-5 text-slate-400'>About Us</p>
                    <p className='text-sm pb-5 text-slate-400'>Work</p>
                    <p className='text-sm pb-5 text-slate-400'>Latest news</p>
                    <p className='text-sm  text-slate-400'>Careers</p>

                </div>
                <div className='about md:ms-10 md:my-0 my-10'>
                    <h1 className='font-semibold text-lg pb-5'>
                        Company
                    </h1>
                    <p className='text-sm pb-5 text-slate-400'>About Us</p>
                    <p className='text-sm pb-5 text-slate-400'>Work</p>
                    <p className='text-sm pb-5 text-slate-400'>Latest news</p>
                    <p className='text-sm  text-slate-400'>Careers</p>

                </div>
                <div className='support md:ms-10 md:my-0 my-10'>
                    <h1 className='font-semibold text-lg pb-5'>
                        Support
                    </h1>
                    <p className='text-sm pb-5 text-slate-400'>Help Desk</p>
                    <p className='text-sm pb-5 text-slate-400'>Sales</p>
                    <p className='text-sm pb-5 text-slate-400'>Become a Partner</p>
                    <p className='text-sm  text-slate-400'>Developers</p>

                </div>
                <div className='contact md:ms-10 md:my-0 my-10'>
                    <h1 className='font-semibold text-lg pb-5'>
                        Contact
                    </h1>
                    <p className='text-sm pb-5 text-slate-400'>Wari, Dhaka, Bangladesh</p>
                    <p className='text-sm pb-5 text-slate-400'>+880-1711-73323</p>

                </div>
            </div>
            <div className='md:w-3/5 w-11/12 mx-auto pt-10 text-xs text-slate-400 flex justify-between'>
                <p>©2023 <span className='font-semibold'>BdJobs24</span>. All Rights Reserved</p>
                <p>Powered By <span className='font-semibold'>Rushdi</span></p>
            </div>
            
            
        </div>
    );
};

export default Footer;