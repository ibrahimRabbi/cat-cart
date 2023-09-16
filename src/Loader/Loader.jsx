import React from 'react';
import { HashLoader } from 'react-spinners';
const Loader = () => {
    return (
        <div className='h-[100vh] flex justify-center'>
            <HashLoader className='mt-36' speedMultiplier={2} size={80} color="#36d7b7" />
        </div>
    );
};

export default Loader;