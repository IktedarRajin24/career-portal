/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/5 mx-auto grid grid-cols-2 gap-5 py-40'>
            <div className='bg-purple-50 border-2 border-slate-200 rounded-lg px-3 py-5'>
                <p className='font-bold text-xl pb-5'>
                    a. When should you use context API?
                </p>
                <p className='text-slate-500 text-justify'>
                    We usually pass data as props from parent to child. However if we need to pass to a child from parent through a lot of components in between it is possible but inefficient. Context API creates a chance for the parent component to make a certain information available to any component in the tree. As a result this allows the parent to pass that context or prop or information to any component in the tree.

                </p>
            </div>
            <div className='bg-purple-50 border-2 border-slate-200 rounded-lg px-3 py-5'>
                <p className='font-bold text-xl pb-5'>
                    b. What is a custom hook?
                </p>
                <p className='text-slate-500 text-justify'>
                    Hooks are reusable function. If we face a situation where we need to perform same logic or operation in multiple components we need to bind that logic in a custom function to make it reusable. It it called custom hook. Custom hook starts with &quot;use&quot; .  
                </p>
            </div>
            <div className='bg-purple-50 border-2 border-slate-200 rounded-lg px-3 py-5'>
                <p className='font-bold text-xl pb-5'>
                    c. What is useRef?
                </p>
                <p className='text-slate-500 text-justify'>
                    useRef allows a value to not rerender. If we need to store a mutable value that does not require rerender we use useRef.

                </p>
            </div>
            <div className='bg-purple-50 border-2 border-slate-200 rounded-lg px-3 py-5'>
                <p className='font-bold text-xl pb-5'>
                    d. What is useMemo?
                </p>
                <p className='text-slate-500 text-justify'>
                    useMemo returns a cached value and does not run continuously. It runs when a dependency is updated.
                </p>
            </div>
            
        </div>
    );
};

export default Blog;