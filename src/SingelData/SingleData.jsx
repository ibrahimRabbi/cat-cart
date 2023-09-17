import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Swal from 'sweetalert2';
import useCart from '../coustomHooks/useCart';
import { Context } from '../Authentication/AuthContext';
import Loader from '../Loader/Loader';
import SizeQuanty from '../Utility/SizeQuanty/SizeQuanty';

const SingleData = () => {
    const { id, category } = useParams()
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const { refetch } = useCart()
    const { user } = useContext(Context)
    const images = [];
    const [qunty, setQunty] = useState(1);
    const [size, setSize] = useState('')


    data.moreImg?.forEach(v => {
        images.push({ original: v, thumbnail: v })
    })

    const sizeHandler = (e) => {
        setSize(e.target.value)
    }
    

    const incrementHandler = () => {
        setQunty((pre) => pre + 1);
    };

    const decrimentHandler = () => {
        setQunty((pre) => pre - 1);
        if (qunty < 1) {
            setQunty(0);
        }
    };


    const addToBaghandler = () => {
        const cartData = {
            img: data.img,
            title: data.title,
            price: data.price,
            qunty, size,
            productId: data._id,
            email: user?.email
        }

        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(res => {
                if (res?.insertedId) {

                    refetch()
                    Swal.fire({
                        title: `${data.title} has been added to the cart`,
                        text: `quantity: ${qunty} size: ${size}`,
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#8d5c2c",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Go to Cart",
                    }).then((result) => {
                        if (result.isConfirmed === true) {
                            navigate("/cart");
                        }
                    });
                }
            })
    }



    useEffect(() => {
        fetch(`http://localhost:5000/id/${id}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    if (data.length === 0) {
        return <Loader />
    }


    return (
        <section className="w-[80%] lg:gap-16 gap-5 mx-auto my-14 grid lg:grid-cols-2">
            <div>
                <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    thumbnailPosition="bottom"
                    useBrowserFullscreen={false}
                    items={images}
                />
            </div>

            <div>
                <p className="text font-semibold lg:text-4xl text-2xl">{data?.title}</p>
                <p className="text-gray-400 font-semibold lg:text-lg text-sm">
                    {data?.specification}
                </p>
                <div className="flex lg:mt-10 mt-5 justify-between items-center pr-12">
                    <p className="text font-semibold text-2xl">
                        {data?.price}-TK
                    </p>
                    <p>Love</p>
                </div>
                <SizeQuanty
                    size={size}
                    sizeHandler={sizeHandler}
                    incrementHandler={incrementHandler}
                    decrimentHandler={decrimentHandler}
                    qunty={qunty}
                />
                <div className="divider"></div>

                <div className="flex gap-8 lg:mt-12 mt-5 items-center">
                    <button onClick={addToBaghandler} className="p-2 rounded-lg text-white font-semibold bg-red-600 w-[45%]">Add To Cart</button>
                    <button className="p-2 rounded-lg font-semibold bg-amber-400 text-slate-900 w-[45%]">
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SingleData;