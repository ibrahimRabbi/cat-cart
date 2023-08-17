import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Signin = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { signin } = useContext(Context)
    const location = useLocation()
    const redirectTo = location.state?.redi || '/'
    const navigate = useNavigate()
    const [error, setError] = useState('')

 


    const loginHandler = (data) => {
        const { email, password, confirm } = data

        if (password !== confirm) {
            setError('confirm Password doesnt Match')
        } else {
            signin(email, password)
                .then(() => {
                    setError('')
                    Swal.fire({
                        title: 'Log In Successfull',
                        text: 'keep Rock',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate(redirectTo)
                })
                .catch(error => {
                    if (error.message == "Firebase: Error (auth/user-not-found).") {
                        setError('user is not exist in this application plz provied a valid password and email')
                    } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
                        setError('invalid password plz provide a valid password')
                    }
                })
        }

    }

    return (
        <div>
            <form className="p-6 w-1/2 mx-auto" onSubmit={handleSubmit(loginHandler)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    <input className="border border-amber-500 rounded-2xl p-2" placeholder="email" {...register('email', { required: true })} />
                    {errors.email && <p className="text-red-500">email ius requird</p>}
                </div>

                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">password</span>
                    </label>
                    <input className="border border-amber-500 rounded-2xl p-2" placeholder="password" {...register('password', { required: true })} />
                    {errors.password && <p className="text-red-500">password is requird</p>}
                </div>

                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">confirm-password</span>
                    </label>
                    <input className="border border-amber-500 rounded-2xl p-2" placeholder="confirm-password" {...register('confirm', { required: true })} />
                    {errors.confirm && <p className="text-red-500">confirm password is required</p>}
                </div>
                <p className='text-red-600 font-semibold'>{error}</p>
                <input value='sign In' type="submit" className='bg-amber-500 text-slate-800 btn w-full mt-16' />
            </form>
        </div>
    );
};

export default Signin;