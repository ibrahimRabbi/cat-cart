import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useState } from 'react';
 

const Card = ({ obj }) => {
    const { _id, img, title, specification, price } = obj
    let [isOpen, setIsOpen] = useState(false)
    
    const openModal =() =>{
        setIsOpen(true)
    }

    return (
        <div className=" card card-compact lg:w-72 w-96 mx-auto bg-slate-100 shadow-xl duration-150 hover:drop-shadow-xl hover:scale-105">
            <Link to={_id}>
                <img className="h-[240px] w-full" src={img} alt="T-shirt" />
            </Link>
            <div className="card-body">
                <Link className='hover:text-amber-600 duration-100' to={_id}>
                    <h2 className="card-title">{title}</h2>
                </Link>
                <p className='text-sm' >{specification}</p>
                <div className="card-actions justify-end items-center">
                    <p className="text-2xl text-amber-700">{price}-TK</p>
                    <button onClick={openModal} className='bg-amber-500 p-2 rounded-lg font-semibold'>Quick View</button>
                    <Modal data={obj} open={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>

    );
};

export default Card;