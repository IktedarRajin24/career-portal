/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Category = ({category}) => {
    // console.log(category)
    const {img, name, jobs} = category;
    return (
        <div className='category bg-purple-50 p-10 rounded-lg'>
            <img className='bg-purple-100 rounded-lg mb-8 p-3' src={img} alt="" />
            <p className='text-lg font-bold mb-3'>{name}</p>
            <p className='text-sm text-slate-400'>{jobs} Jobs Available</p>
        </div>
    );
};

export default Category;