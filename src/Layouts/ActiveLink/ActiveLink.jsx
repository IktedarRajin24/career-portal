/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "text-purple-800" : "hover:text-purple-400 "
                }
            
            >
            {children}
            </NavLink>
            
        </div>
    );
};

export default ActiveLink;