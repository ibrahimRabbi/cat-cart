import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState,useContext } from 'react'
import SizeQuanty from '../Utility/SizeQuanty/SizeQuanty'
import Swal from 'sweetalert2'
import { Context } from '../Authentication/AuthContext'
import useCart from '../coustomHooks/useCart'
import { useNavigate,Navigate, Link } from 'react-router-dom'

export default function Modal({data, open, setIsOpen }) {
    const { _id, category, img, title, specification, price } = data
    console.log(data)
    const [qunty, setQunty] = useState(1);
    const [size, setSize] = useState('')
    const {user} = useContext(Context)
    const { refetch } = useCart()
    const navigate = useNavigate()

    function closeModal() {
        setIsOpen(false)
    }
     
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
        if (!user) {
            navigate('/signin')
        } else {
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
    }


   
    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10 " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[70%]   transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"> 
                                    <div className='flex justify-start gap-14'>
                                        <img width={500} src={img} alt="" />
                                        <div>
                                    <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900">
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">{specification}</p>
                                            </div>
                                            <Dialog.Description className='mt-6'>
                                                <h1 className='text-2xl font-semibold'>{`price ${price}-TK`}</h1>
                                                <SizeQuanty
                                                    size={size}
                                                    sizeHandler={sizeHandler}
                                                    incrementHandler={incrementHandler}
                                                    decrimentHandler={decrimentHandler}
                                                    qunty={qunty}
                                                />
                                            </Dialog.Description>

                                    <div className="absolute bottom-6 space-x-2">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-5 py-2 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}>cancel
                                        </button>
                                        <Link to={`/${category}/${_id}`} className="inline-flex justify-center rounded-md border border-transparent bg-amber-200 px-6 py-2 text-blue-900 hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">View Detailes</Link>
                                        <button onClick={addToBaghandler} className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-6 py-2 text-blue-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">Add To Bag</button>
                                        </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
