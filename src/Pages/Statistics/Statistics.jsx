/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [marks, setMarks] = useState([]);
    useEffect(()=>{
        fetch('data/marks.json')
        .then(res => res.json())
        .then(data => setMarks(data))
    },[marks])
    return (
        <div className=' bg-purple-50'>
            <PieChart className='mx-auto' width={1000} height={500}>
                <Pie
                    dataKey="marks"
                    isAnimationActive={false}
                    data={marks}
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill='#9873FF'
                    label
                    
                />
                <Tooltip />
            </PieChart>
            {/* {console.log(marks)} */}
        </div>
    );
};

export default Statistics;