import React from 'react';
import BusinessAnalyse from '../BusinessAnalyse/BusinessAnalyse';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="drawer lg:drawer-open w-[90%]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                {/* <BusinessAnalyse /> */}
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><img className='w-56' src="https://i.ibb.co/6tshLqX/IMG-20230813-000938.png" alt="" /></li>
                    <li className='bg-amber-400 mt-2'><Link to='dhome'>Home</Link></li>
                    <li className='bg-amber-400 mt-2'><Link to='allproduct'>Manage product</Link></li>
                    <li className='bg-amber-400 mt-2'><Link to='addproduct'>Add Product</Link></li>
                    <li className='bg-amber-400 mt-2'><Link to='user'>Manage User</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminDashboard;