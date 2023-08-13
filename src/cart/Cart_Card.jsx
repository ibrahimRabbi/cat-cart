import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../coustomHooks/useCart";



const Card = ({ data }) => {
    const { img, size, qunty, title, price, _id: id } = data;
     const {refetch} = useCart()

    const deleteHandler = () => {
        fetch(`http://localhost:5000/cart/${id}`, { method: 'DELETE' })
            .then((res) => res.json())
            .then(() => {
                refetch()
            });
    }


    return (
        <section>
             <div className="flex items-start gap-6 border p-4 rounded-lg shadow-md bg-slate-100">
                <div className="avatar">
                    <div className="w-32 rounded-xl">
                        <img src={img} alt=""/>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl text font-semibold">{title}</h1>
                    <div className="flex items-center gap-10 mt-2 text-gray-500 font-semibold">
                        <p>Size: {size}</p>
                        <p>Quantity: {qunty}</p>
                    </div>
                    <div className="flex items-center gap-11 mt-3">
                        <p className="text-xl font-semibold mt-2">Price:{price}-TK</p>
                        <button onClick={deleteHandler}>
                            <FaTrashAlt className="text-red-600 text-xl mt-2" />
                        </button>
                    </div>
                </div> 
            </div>  
        </section>
    );
};

export default Card;