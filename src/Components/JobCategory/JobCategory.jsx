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
            <h1 className='text-3xl font-bold text-center'>Job Category List</h1>
            <p className='text-slate-400 text-center font-light mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 gap-8 px-5 py-8 w-3/5 mx-auto'>
            
                {
                    categories.map(category => <Category key={category.id} category={category}/>)
                }
            </div>
        </div>
        
    );
};

export default JobCategory;