/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('data/category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='category-section px-5 pt-40'>
            <h1 className='md:text-3xl text-xl font-bold text-center'>Job Category List</h1>
            <p className='text-slate-400 text-center w-11/12 mx-auto md:text-md text-sm font-light mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4 gap-8 md:px-5 py-8 md:w-3/5 w-9/12 mx-auto'>
            
                {
                    categories.map(category => <Category key={category.id} category={category}/>)
                }
            </div>
        </div>
        
    );
};

export default JobCategory;