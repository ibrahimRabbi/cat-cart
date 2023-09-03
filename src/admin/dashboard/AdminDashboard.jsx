import React, { useContext } from 'react';
import BusinessAnalyse from '../BusinessAnalyse/BusinessAnalyse';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Context } from '../../Authentication/AuthContext';

const AdminDashboard = () => {
    const { signout } = useContext(Context)
    const navigate = useNavigate()
    const  signoutHandler = () => {
        signout()
        navigate('/')
        
    }
    return (
        <div className="drawer lg:drawer-open w-[90%]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 relative w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/'><img className='w-56' src="https://i.ibb.co/6tshLqX/IMG-20230813-000938.png" alt="" /></Link></li>
                    <li className='bg-amber-400 rounded-lg mt-4'><Link to='dhome'>Review</Link></li>
                    <li className='bg-amber-400 rounded-lg mt-4'><Link to='allproduct'>Manage product</Link></li>
                    <li className='bg-amber-400 rounded-lg mt-4'><Link to='addproduct'>Add Product</Link></li>
                    <li className='bg-amber-400 rounded-lg mt-4'><Link to='user'>Manage User</Link></li>
                    <li className=' rounded-lg mt-4'> <button className='bg-amber-400 w-full mx-auto' onClick={signoutHandler}>SIGN OUT</button></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminDashboard;