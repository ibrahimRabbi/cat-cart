import React, { useEffect, useState } from "react";
import Card from "./Cart_Card";
import Sum from "./Sum";
import './cart.css'
import useCart from "../coustomHooks/useCart";



const Cart = () => {

    const { cartData } = useCart()
   
    return (
        <section className="cart relative my-10 w-[90%] mx-auto lg:grid gap-10 ">
            <div className="space-y-3">
                { cartData.map((v) => <Card key={v._id} data={v}/>)}
            </div>
            <Sum/>
        </section>
    );
};

export default Cart;