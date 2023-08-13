import React from 'react';
import { Link } from 'react-router-dom';
 

const Card = ({ obj }) => {
    const { _id, img, title, specification, price } = obj

    return (
        <div className="card card-compact w-72 bg-slate-100 shadow-xl">
            <Link to={_id}>
                <img className="h-[240px] w-full" src={img} alt="T-shirt" />
            </Link>
            <div className="card-body">
                <Link className='hover:text-amber-600 duration-100' to={_id}>
                    <h2 className="card-title">{title}</h2>
                </Link>
                <p>{specification}</p>
                <div className="card-actions justify-end">
                    <p className="text-2xl text-amber-700">{price}-TK</p>
                    <button className='bg-amber-500 p-2 rounded-lg font-semibold'>Quick View</button>

                </div>
            </div>
        </div>

    );
};

export default Card;