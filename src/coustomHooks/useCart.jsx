import { Context } from '../Authentication/AuthContext';
import { useContext } from 'react'
import { useGetPostsQuery } from '../redux/features/baseApi';



const useCart = () => {
    const { user } = useContext(Context)
    const { data: cartData = [], refetch } = useGetPostsQuery(user?.email)

    let totalAmount = 0
    let totalQunty = 0
    let totalDiscount = 20;
    let totalVat = 0;


    cartData.forEach(v => {
        totalAmount += v.price * v.qunty;
        totalQunty += v.qunty
    })

    let subTotal = totalAmount + totalVat - totalDiscount;

    return { cartData, refetch, totalAmount, totalQunty, totalDiscount, totalVat, subTotal }
};

export default useCart;




/******************************************* tanstack query *****************************************/

// import { useQuery } from '@tanstack/react-query';
// const { data: cartData = [], refetch } = useQuery({
    //     queryKey: ['orderData'],
    //     queryFn: async () => {
    //         const fetching = await fetch('https://cat-cart-server.vercel.app/cart')
    //         const converting = await fetching.json()
    //         return converting
    //     }
    // })





