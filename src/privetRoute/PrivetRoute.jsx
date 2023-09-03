import React, { useContext } from 'react';
import { Context } from '../Authentication/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const PrivetRoute = ({ children }) => {
    
    const { user,loading } = useContext(Context)
    const location = useLocation()

    if (loading) {
        return <div className='h-[100vh] flex justify-center'>
            <HashLoader className='mt-36' speedMultiplier={2} size={80} color="#36d7b7" />
        </div>
    }
    if (user) {
        return children
    }
    
    return <Navigate state={{redi:location.pathname}} to='/signin'/>
            
};

export default PrivetRoute;