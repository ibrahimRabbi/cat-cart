import React, { useContext, useEffect, useState } from "react";
import useCart from "../coustomHooks/useCart";
import { Context } from "../Authentication/AuthContext";
import dateFormat from "dateformat";
 

const Sum = () => {

    const {subTotal,totalAmount,totalQunty,totalDiscount,totalVat} = useCart()
    const { user } = useContext(Context)
    const date = new Date()
    

     
 
    
    const clickHandler = () => {
        const tran_history = {
            amount: totalAmount,
            name: user?.displayName,
            email: user?.email,
            currency: 'BDT',
            phone: 8801986711517,
            date: dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT")
        }
        fetch('http://localhost:5000/payment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body : JSON.stringify(tran_history)   
        })
        .then(res => res.json())
            .then(res => {
            window.location.replace(res.url)
        })
    }
    return (
        <div className="lg:mt-0 mt-10">
             
                <div className=" h-[320px] bg-gradient-to-t bg-slate-200 from-slate-100 p-4 rounded-lg     sticky top-10 shadow-lg">
                    <h1 className="font-semibold rounded-lg mt-2">Quantitiy : {totalQunty}</h1>
                    <h1 className="font-semibold rounded-lg mt-2">Total Amount : {totalAmount}-TK</h1>
                    <h1 className="font-semibold rounded-lg mt-2">Total Vat : {totalVat}-TK</h1>
                    <h1 className="font-semibold rounded-lg mt-2">Discount : {totalDiscount}-TK</h1>
                    <div className="divider"></div>
                    <h1 className="text-2xl text-gray-900 font-semibold rounded-lg mt-2">Sub Total : {subTotal}-TK</h1>
                <button onClick={clickHandler} className="bg-amber-500 btn text-center w-full rounded-lg mt-8 font-semibold text-gray-950 hover:bg-amber-600 hover:scale-90 hover:duration-75">proceed to Checkout</button>
                </div>
                
           
        </div>
    );
};

export default Sum;