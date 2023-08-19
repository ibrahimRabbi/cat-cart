import React, { useContext } from 'react';
import { Context } from '../Authentication/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FcSettings } from 'react-icons/fc'
import useOrderHistory from '../coustomHooks/useOrderHistory';


const Dashboard = () => {
    const {user,signout} = useContext(Context)
    const { orderData } = useOrderHistory()
    const navigate = useNavigate()
   
    
    const remaining = orderData.filter(v => v.payment_status === true)
    
    const signoutHandler = () => {
        signout()
        navigate('/')
    }
    
    
    
    return (
        <section className='my-11 w-[90%] mx-auto'>
            <div className='flex gap-7'>
                <img className='w-36 rounded-lg' src={user?.photoURL} alt="" />
                <div>
                    <h1 className='text-4xl'>{user?.displayName}</h1>
                    <p className='font-semibold text-sm text-gray-500'>phone : {user?.number}</p>
                    <p className='font-semibold text-sm mb-5 text-gray-500'>Email : {user?.email}</p>
                    <div className='flex gap-7'>
                        <Link className='bg-amber-400 gap-2 items-center w-24 font-semibold rounded-md p-2 flex'><FcSettings />setting</Link>
                        <button onClick={signoutHandler} className='bg-red-600 p-2 text-slate-50 rounded-lg text-sm'>Sign Out</button>
                    </div>
                </div>
            </div>

                <h1 className='mt-14 text-2xl font-semibold'>Payment History</h1>
                     
            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-amber-500 text-gray-600 text-base'>
                            <tr>
                                <th>S.N</th>
                                <th>Transection ID</th>
                                <th>Payment</th>
                                <th>Shopping Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                remaining.map((v,index) => {
                                    return (
                                        <tr key={v._id}>
                                            <th>{index+1}</th>
                                            <td>{v.tran_id}</td>
                                            <td>{v.pay}</td>
                                            <td>{v.date}</td>
                                        </tr>
                                   )
                               }) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;