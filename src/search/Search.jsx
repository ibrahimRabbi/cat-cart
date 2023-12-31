import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../CategoryData/Card';

const Search = () => {
    const { state } = useLocation()


    return (
        <div className='my-10 w-[90%] mx-auto flex justify-start'>
            {
                state?.data.length === 0 ? <div className='mx-auto h-[60vh]'>
                    <div className='flex items-center'>
                        <img width={70} src="https://i.ibb.co/5cLFPSK/1bc5a7ea14c0618c435ac828698e1b8f.jpg"/>
                        <p className='text-2xl'>{`your expected ${state.search}  does not available here`}</p>
                    </div>
                    <Link className='bg-amber-500 text-center mx-auto block w-1/2 rounded-lg p-2' to='/'>Go To Home</Link>
                </div> : state?.data.map(v => <Card key={v._id} obj={v} />)
            }
        </div>
    );
};

export default Search;