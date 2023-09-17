import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sizeQuntyHandler } from '../../redux/features/sizeQuantySlice';

const SizeQuanty = ({sizeHandler,incrementHandler,decrimentHandler,qunty,size}) => {
    const sizArry = ['M', 'L', 'S', 'XL', '2XL', '3XL']
    

    // const { size: hello } = useSelector(state => state.sizeQuntySlice)
    // const dispatch = useDispatch()
    // dispatch(sizeQuntyHandler(e.target.value))
    
    return (
        <div className="text font-semibold lg:mt-10 mt-6 flex gap-12 items-center">
            <div>
                <p className="text-md">Size:</p>
                <select onChange={sizeHandler} value={size} className="select size-selector border-amber-500 w-full max-w-xs">
                    <option disabled selected>choose a option...</option>
                    {sizArry.map(v => <option key={Math.random()}>{v}</option>)}
                </select>
            </div>

            <div>
                <p className="text-md">Quantity:</p>
                <div className="flex size-selector border border-amber-500 rounded-lg px-2 items-center gap-2">
                    <button onClick={decrimentHandler} className="text-amber-700 text-4xl">-</button>
                    <span className='px-2'>{qunty}</span>
                    <button onClick={incrementHandler} className="text-3xl text-amber-700">+</button>
                </div>
            </div>
        </div>
    );
};

export default SizeQuanty;