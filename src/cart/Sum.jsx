import React from "react";
import useCart from "../coustomHooks/useCart";
 

const Sum = () => {

    const {subTotal,totalAmount,totalQunty,totalDiscount,totalVat} = useCart()

    return (
        <div className="">
             
                <div className=" h-[320px] bg-gradient-to-t bg-slate-200 from-slate-100 p-4 rounded-lg sticky top-10 shadow-lg">
                    <h1 className="font-semibold rounded-lg mt-2">Quantitiy : {totalQunty}</h1>
                    <h1 className="font-semibold rounded-lg mt-2">Total Amount : {totalAmount}-TK</h1>
                    <h1 className="font-semibold rounded-lg mt-2">Total Vat : {totalVat}-TK</h1>
                    <h1 className="font-semibold rounded-lg mt-2">Discount : {totalDiscount}-TK</h1>
                    <div className="divider"></div>
                    <h1 className="text-2xl text-gray-900 font-semibold rounded-lg mt-2">Sub Total : {subTotal}-TK</h1>
                <button className="bg-amber-500 p-2.5 text-center w-full rounded-lg mt-8 font-semibold text-gray-950 hover:bg-amber-600 hover:scale-90 hover:duration-75">Check Out</button>
                </div>
                
           
        </div>
    );
};

export default Sum;