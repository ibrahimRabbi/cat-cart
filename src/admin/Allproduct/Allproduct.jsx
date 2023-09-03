import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
 

const Allproduct = () => {
    const [data, setData] = useState()
    const [category, setCategory] = useState('all')
    
    


    

    const categoryHandler = (e) => {
        setCategory(e.target.value)

        if (e.target.value === 'all') {
            fetch(`http://localhost:5000/alldata`)
                .then(res => res.json())
                .then(res => {
                     setData(res)
                })
        }
        fetch(`http://localhost:5000/category/${e.target.value}`)
            .then(res => res.json())
            .then(res => setData(res))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/alldata`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "do you want to Delete this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/alldata/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        if (res.deletedCount > 0) {
                            setData(data.filter(v => v._id !== id))
                            Swal.fire(
                                'Deleted!',
                                'product has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }


    if (!data) {
    return <h1 className='text-6xl'>loading...</h1>
}
    return (
        <div className='w-full ml-11 mt-10'>
            <div className='flex justify-between mb-4'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="bg-yellow-500 btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <select onChange={categoryHandler} value={category} className="size-selector border border-amber-500 p-2 rounded-md">
                    <option defaultValue='all'>all</option>
                    <option>mens</option>
                    <option>woman</option>
                    <option>shoes</option>
                    <option>baby</option>
                    <option>book</option>
                    <option>electronics</option>
                    <option>personalcare</option>
                    <option>household</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-amber-400 text-gray-600 text-base'>
                        <tr>
                            <th>S.N</th>
                            <th>Image</th>
                            <th>description</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((v, index) => {
                                return (
                                    <tr key={v._id}>
                                        <td>{index + 1}</td>
                                        <td><img className='w-14' src={v.img} alt="" /></td>
                                        <td>{v.title}</td>
                                        <td>{v.category}</td>
                                        <th>{v.price}</th>
                                        <td className='space-x-4'>
                                            <button onClick={() => deleteHandler(v._id)} className='bg-red-600 p-2 text-white rounded-md'>delete</button>
                                            <button className='bg-yellow-500 p-2 text-white rounded-md'>edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allproduct;