import React, { useEffect, useState } from "react";
import Card from "./Cart_Card";
import Sum from "./Sum";
import './cart.css'
const Cart = () => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/cart")
            .then((res) => res.json())
            .then((res) => setCartData(res));
    }, [cartData]);

   

    return (
        <section className="cart my-10 w-[90%] mx-auto grid gap-10 ">
            <div className="space-y-3">
                { cartData.map((v) => <Card key={v._id} data={v}/>)}
            </div>
            <Sum data={cartData} />
        </section>
    );
};

export default Cart;