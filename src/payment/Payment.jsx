import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useCart from '../coustomHooks/useCart';
import { FcApproval } from 'react-icons/fc'
const Payment = () => {

    const tran_id = useParams()
    const { subTotal } = useCart()
    return (
        <div className='text-center w-96 border justify-center mx-auto mt-36 py-8 rounded-md'>
            
                <div><FcApproval className='text-6xl mx-auto' /></div>
                <h1 className='text-2xl text-lime-600 font-semibold'>Payment successfull</h1>
                <p className='text-sm mt-3'>transection id : {tran_id.id}</p>
                <p className='text-xl font-semibold'>total pay : {subTotal} </p>
            <Link to='/' className='btn mt-8 bg-lime-500'>Go Home</Link>
        </div>
    );
};

export default Payment;