import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Authentication/AuthContext';
import { useQuery } from '@tanstack/react-query';

const useUserInfo = () => {
    const {user} = useContext(Context)
   
    const { data={} } = useQuery({
        queryKey: [user?.email],
        queryFn: async() => {
            const fetching = await fetch(`http://localhost:5000/user?email=${user?.email}`)
            const cont = await fetching.json()
            return cont
        }
    })
        
    


    return data  
};

export default useUserInfo;