import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../coustomHooks/useCart";
import { Context } from "../Authentication/AuthContext";
import { useGetSearchQuery, useGetUserInfoQuery } from "../redux/features/baseApi";




const Navber = () => {

    const { subTotal, totalQunty } = useCart()
    const { user } = useContext(Context)
    const ref = useRef(null)
    const { data: userData } = useGetUserInfoQuery(user?.email)
    const navigate = useNavigate()


    const searchHandler = () => {
        fetch(`http://localhost:5000/alldata?search=${ref.current.value}`)
            .then(res => res.json())
            .then(res => {
                navigate('/search', { state: { data: res, search: ref.current.value } })
            })

    }




    return (
        <nav className=" bg-slate-100 ">
            <div className="w-[90%] lg:py-0 py-1 mx-auto flex justify-between items-center">
                {/* navbar start */}
                <div className="">
                    <Link to="/">
                        <img className="lg:w-[140px] w-[120px]" src="https://i.ibb.co/6tshLqX/IMG-20230813-000938.png" />
                    </Link>
                </div>

                {/* navbar middle */}

                <div className="lg:w-[600px] px-5">
                    <div className="form-control hidden lg:block w-full">
                        <div className="input-group">
                            <input
                                type="text"
                                ref={ref}
                                placeholder="Search product...."
                                className="input  w-full input-bordered" />
                            <button onClick={searchHandler} className="btn bg-amber-500 btn-square">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>


                {/* navbar end */}
                <div className=" flex items-center gap-4">


                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=" mt-2 btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-warning badge-sm indicator-item">{totalQunty}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className=" z-10 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{totalQunty} items</span>
                                <span className="text-info">Subtotal:{subTotal}-TK</span>
                                <div className="card-actions">
                                    <Link to='/cart' className="bg-amber-500 p-2 text-center rounded-lg font-semibold btn-block">
                                        View cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div>
                        {
                            user ? <div className="dropdown dropdown-end z-10">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                    <ul tabIndex={0} className="space-y-5 dropdown-content mt-48 py-5 shadow bg-base-100 rounded-box w-52">
                                        <li><p>{user?.displayName}</p></li>
                                        <li><Link to={userData?.role === 'admin' ? '/admin/allproduct' : '/dashboard'} className="bg-amber-500 px-11 py-2 rounded-lg text-center">Dashboard</Link></li>
                                    </ul>
                                </label>
                            </div> : <Link to='/signin' className="bg-amber-500 p-2 rounded-lg text-sm font-semibold hover:bg-amber-600">Sing in</Link>
                        }
                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navber;
