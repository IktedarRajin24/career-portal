/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <div className='footer bg-gray-900 text-white py-32 px-0 h-max'>
            <div className='px-5 py-8 w-3/5 mx-auto flex justify-between  items-start border-b-2 border-slate-600'>
                <div className='company-details w-1/3'>
                    <h1 className='text-2xl font-bold pb-10'>BdJobs24</h1>
                    <p className='text-sm w-9/12 text-slate-400 pb-5'>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
                    <img className='w-1/3' src="assets/icons/Group 9969.png" alt="" />
                </div>
                <div className='about ms-10'>
                    <h1 className='font-semibold text-lg pb-5'>
                        Company
                    </h1>
                    <p className='text-sm pb-5 text-slate-400'>About Us</p>
                    <p className='text-sm pb-5 text-slate-400'>Work</p>
                    <p className='text-sm pb-5 text-slate-400'>Latest news</p>
                    <p className='text-sm  text-slate-400'>Careers</p>

                </div>
                <div className='about ms-10'>
                    <h1 className='font-semibold text-lg pb-5'>
                        Company
                    </h1>
                    <p className='text-sm pb-5 text-slate-400'>About Us</p>
                    <p className='text-sm pb-5 text-slate-400'>Work</p>
                    <p className='text-sm pb-5 text-slate-400'>Latest news</p>
                    <p className='text-sm  text-slate-400'>Careers</p>

                </div>
                <div className='support ms-10'>
                    <h1 className='font-semibold text-lg pb-5'>
                        Support
                    </h1>
                    <p className='text-sm pb-5 text-slate-400'>Help Desk</p>
                    <p className='text-sm pb-5 text-slate-400'>Sales</p>
                    <p className='text-sm pb-5 text-slate-400'>Become a Partner</p>
                    <p className='text-sm  text-slate-400'>Developers</p>

                </div>
                <div className='contact ms-10'>
                    <h1 className='font-semibold text-lg pb-5'>
                        Contact
                    </h1>
                    <p className='text-sm pb-5 text-slate-400'>Wari, Dhaka, Bangladesh</p>
                    <p className='text-sm pb-5 text-slate-400'>+880-1711-73323</p>

                </div>
            </div>
            <div className='w-3/5 mx-auto pt-10 text-xs text-slate-400 flex justify-between'>
                <p>©2023 <span className='font-semibold'>BdJobs24</span>. All Rights Reserved</p>
                <p>Powered By <span className='font-semibold'>Rushdi</span></p>
            </div>
            
            
        </div>
    );
};

export default Footer;