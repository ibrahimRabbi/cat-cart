import React from 'react';
import { Link } from 'react-router-dom';


const Category = () => {
    return (
        <section className="grid grid-cols-4 gap-12 w-[90%] mx-auto relative -top-12 z-10">
            <Link to="mens">
                <div className="bg-slate-100 py-2 px-4 rounded-md shadow-lg">
                    <div className="CH-text font-sans font-semibold">MENS FASHION</div>
                    <img
                        className="w-52 mx-auto rounded-lg my-4"
                        src="https://i.ibb.co/3Tjr2CD/IMG-20230802-132443.jpg"
                    />
                    <button className="underline">See All</button>
                </div>
            </Link>

            <Link to="woman">
                <div className="bg-slate-100 py-2 px-4 rounded-md shadow-lg">
                    <div className="CH-text font-sans font-semibold">WOMEN FASHION</div>
                    <img
                        className="w-52 mx-auto rounded-lg my-4"
                        src="https://i.ibb.co/sKBkbvb/IMG-20230802-132409.jpg"
                    />
                    <button className="underline">See All</button>
                </div>
            </Link>

            <Link to="shoes">
                <div className="bg-slate-100 py-2 px-6 rounded-md shadow-lg">
                    <div className="CH-text font-sans font-semibold">
                        SHOES COLLACTION
                    </div>
                    <img
                        className="w-52 mx-auto rounded-lg my-4"
                        src="https://i.ibb.co/yVzQF67/mojtaba-fahiminia-t4g1gct-Aa-Kk-unsplash.jpg"
                    />
                    <button className="underline">See All</button>
                </div>
            </Link>

            <Link to="baby">
                <div className="bg-slate-100 py-2 px-6 rounded-md shadow-lg">
                    <div className="CH-text font-sans font-semibold">
                        TOYS & BABY ITEMS
                    </div>
                    <img
                        className="w-[220px] mx-auto rounded-lg my-4"
                        src="https://i.ibb.co/cwDmvH4/ryan-fields-Xz7-MMD5t-Zw-A-unsplash.jpg"
                    />
                    <button className="underline">See All</button>
                </div>
            </Link>

            <a href="">
                <div className="bg-slate-100 py-2 px-6 rounded-md shadow-lg">
                    <div className="CH-text font-sans font-semibold">BOOKS</div>
                    <img
                        className="w-[100%] rounded-lg my-4"
                        src="https://i.ibb.co/9wQsjjd/tom-hermans-9-Boq-Xz-Ee-Qq-M-unsplash.jpg"
                    />
                    <button className="underline">See All</button>
                </div>
            </a>

            <a href="">
                <div className="bg-slate-100 py-2 px-6 rounded-md shadow-lg">
                    <div className="CH-text font-sans font-semibold">
                        GADGET & ELECTRONICS
                    </div>
                    <img
                        className="w-[100%] rounded-lg my-4"
                        src="https://i.ibb.co/GvLVgjd/modern-stationary-collection-arrangement.jpg"
                    />
                    <button className="underline">See All</button>
                </div>
            </a>

            <Link to="personalCare">
                <div className="bg-slate-100 py-2 px-6 rounded-md shadow-lg">
                    <div className="CH-text font-sans font-semibold">
                        BEAUTY & PERSONAL CARE
                    </div>
                    <img
                        className="w-[100%] rounded-lg my-4"
                        src="https://i.ibb.co/jZ7ymYT/still-life-care-products.jpg"
                    />
                    <button className="underline">See All</button>
                </div>
            </Link>

            <a href="">
                <div className="bg-slate-100 py-2 px-6 rounded-md shadow-lg">
                    <div className="CH-text font-sans font-semibold">
                        HOUSEHOLD & STATIONERY
                    </div>
                    <img
                        className="w-[100%] rounded-lg my-4"
                        src="https://i.ibb.co/fCJKhpM/istockphoto-1278632179-612x612.jpg"
                    />
                    <button className="underline">See All</button>
                </div>
            </a>
        </section>
    );
};

export default Category;