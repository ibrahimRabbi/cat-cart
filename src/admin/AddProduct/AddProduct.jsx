import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const productType = ['toy', 'cloth', 'watch', 'shoes', 'pant', 'tshirt', 'moistrue', 'makeup', 'soap', 'bodywash', 'shampoo', 'mobail','baby-care']
    const category = ['mens', 'woman', 'shoes', 'baby', 'book', , 'electronics', 'personalcare', 'household']
    const [loading, setLoading] = useState(false)


    const submitHandler = (data) => {
        console.log(data)
        setLoading(true)
        const { price, category, productType, description, title, image,img1,img2,img3,img4 } = data

        const formData = new FormData()
        formData.append('image', image[0])
        fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                if (res.data?.url) {
                    const img = res.data.url
                    const obj = {
                        img, title, price, category,
                        product: productType,
                        specification: description,
                        moreImg: [img,img1,img2,img3,img4]
                    }
                    fetch('http://localhost:5000/alldata', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(obj)
                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res.insertedId) {
                                setLoading(false)
                                reset()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'product add successfull',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    if (loading) {
        return <HashLoader speedMultiplier={2} size={80} color="#36d7b7" />
    }
    return (
        <section className='w-[60%] my-10 mx-auto'>
            <div>
                <h1 className='text-2xl text-amber-500 uppercase font-semibold text-center'>Add a New Products</h1>
                <hr className='mt-4' />
            </div>
            <form onSubmit={handleSubmit(submitHandler)} className='mt-2'>
                <div className="form-control w-full">
                    <label className="label">Titel/Product Name *</label>
                    <input type="text"
                        className="border border-amber-500 rounded-2xl p-2" placeholder='Type Here'
                        {...register('title', { required: true })} />
                    {errors.title && <p className="text-red-500">title is requird</p>}
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control w-full">
                        <label className="label">Price *</label>
                        <input type="number"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='EX:400'
                            {...register('price', { required: true, min: 10 })} />
                        {errors.price?.type === 'required' && <p className="text-red-500">price is requird</p>}
                        {errors.price?.type === 'min' && <p className="text-red-500">price must have above an 10 tk</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">Category *</label>
                        <select {...register('category')} className="select border-amber-500 select-bordered">
                            {category.map(v => <option key={Math.random()}>{v}</option>)}
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Product Image *</label>
                        <input type="file" className="file-input file-input-bordered file-input-warning w-full" {...register('image', { required: true })}
                        />
                        {errors.image && <p className="text-red-500">your image is requird</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">Product Type *</label>
                        <select {...register('productType')} className="select border-amber-500 select-bordered">
                            {productType.map(v => <option key={Math.random()}>{v}</option>)}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Image URL 1*</span></label>
                        <input type="text"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='URL 1'
                            {...register('img1')} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Image URL 2*</span></label>
                        <input type="text"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='URL 1'
                            {...register('img2')} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Image URL 3*</span></label>
                        <input type="text"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='URL 1'
                            {...register('img3')} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Image URL 4*</span></label>
                        <input type="text"
                            className="border border-amber-500 rounded-2xl p-2" placeholder='URL 1'
                            {...register('img4')} />
                    </div>
                </div>

                <div className="form-control w-full">
                    <label className="label">Description*</label>
                    <textarea type="text"
                        className="border border-amber-500 rounded-2xl p-2" placeholder='Type Here'
                        {...register('description', { required: true })} />
                    {errors.title && <p className="text-red-500">description is requird</p>}
                </div>



                <input className="bg-amber-500 mt-10 hover:bg-amber-600 p-2 w-full rounded-lg" type="submit" />

            </form>

        </section>
    );
};

export default AddProduct;





