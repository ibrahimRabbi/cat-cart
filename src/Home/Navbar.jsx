import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navber = () => {
    return (
        <nav className="navbar bg-slate-100">
            <div className="w-[90%] mx-auto flex justify-between items-center">
                {/* navbar start */}
                <div className="">
                    <Link to="/">
                        <img className="w-[110px] lg:w-[140px]" src="https://i.ibb.co/DrsKz2x/cat-cart.png" />
                    </Link>
                </div>

                {/* navbar middle */}

                <div className="lg:w-[600px] px-5">
                    <div className="form-control w-full">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search…"
                                className="input w-full input-bordered" />
                            <button className="btn bg-amber-500 btn-square">
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


                    <Link to='/cart' className="dropdown dropdown-end">
                        <label  tabIndex={0} className=" mt-2 btn btn-ghost btn-circle">
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
                                <span className="badge badge-warning badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className=" z-10 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>




                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-20 rounded-full">
                            <img src="https://i.ibb.co/9rhK6WJ/FB-IMG-1690052120871.jpg" />
                        </div>
                    </label>


                </div>
            </div>
        </nav>
    );
};

export default Navber;
