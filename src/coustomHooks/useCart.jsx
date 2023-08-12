import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';


const useCart = () => { 
    
    const [cartData, setCartData] = useState([]);
    let totalAmount = 0
    let totalQunty = 0
    let totalDiscount = 0;
    let totalVat = 0;


    cartData.forEach(v => {
        totalAmount += v.price * v.qunty;
        totalQunty += v.qunty
    })

    let subTotal = totalAmount + totalVat - totalDiscount;

    useEffect(() => {
        fetch("http://localhost:5000/cart")
            .then((res) => res.json())
            .then((res) => setCartData(res));
    }, []);



    return {cartData,totalAmount,totalQunty,totalDiscount,totalVat,subTotal}
};

export default useCart;






  // const {data:cartData=[],refetch} = useQuery({
    //     queryKey: ['orderData'],
    //     queryFn: async () => {
    //         const fetching = await fetch('http://localhost:5000/cart')
    //         const converting = await fetching.json()   
    //         return converting
    //     }
    // })