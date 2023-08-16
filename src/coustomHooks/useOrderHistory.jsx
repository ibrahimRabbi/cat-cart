import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Context } from '../Authentication/AuthContext';


const useOrderHistory = () => {
    const {user} = useContext(Context)
    const {data:orderData=[] } = useQuery({
        queryKey: [user?.email],
        queryFn: async() => {
            const orderData = await fetch(`http://localhost:5000/orderhistory?email=${user?.email}`)
            return await orderData.json()
        }
    })

    return  {orderData}
};

export default useOrderHistory;