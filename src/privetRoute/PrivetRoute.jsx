import React, { useContext } from 'react';
import { Context } from '../Authentication/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    
    const { user } = useContext(Context)
    const location = useLocation()
    
    return (
        <div>
            {
                user ? children : <Navigate state={{redi:location.pathname}} to='/signin'/>
            }
        </div>
    );
};

export default PrivetRoute;