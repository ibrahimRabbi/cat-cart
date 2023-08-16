import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Authentication/AuthContext';
import { Link } from 'react-router-dom';
import { FcSettings } from 'react-icons/fc'


const Dashboard = () => {
    const { user } = useContext(Context)
    const [userData, setUserData] = useState({})
    console.log(userData)
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
        .then(res=>setUserData(res))
    }, [])
    
    return (
        <section className='my-11 w-[90%] mx-auto'>
            <div className='flex gap-7'>
                <img className='w-36 rounded-lg' src={user?.photoURL} alt="" />
                <div>
                    <h1 className='text-4xl'>{user?.displayName}</h1>
                    <p className='font-semibold text-sm text-gray-500'>account ID : {userData?._id}</p>
                    <p className='font-semibold text-sm mb-5 text-gray-500'>Email : {userData?.email}</p>
                    <Link className='bg-amber-400 gap-2 items-center w-24 font-semibold rounded-md p-2 flex'><FcSettings/>setting</Link>
                </div>
            </div>

            <h1 className='mt-14 text-2xl font-semibold'>Payment History</h1>
            <hr />
            <div>

            </div>
        </section>
    );
};

export default Dashboard;