import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthContext';



const SigninProvider = ({ redirect }) => {

    const { signinGoogle } = useContext(Context)
    const navigate = useNavigate();

    const googleHandler = () => {
        signinGoogle()
            .then(res => {
                fetch(' https://cat-cart-server.vercel.app/user', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ email: res.user.email, name: res.user.displayName })
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(redirect)
                    })
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='space-x-5 mt-6 text-center'>
            <button onClick={googleHandler}><FcGoogle className='text-4xl' /></button>
            <button><BsFacebook className='text-4xl text-blue-600' /></button>
        </div>
    );
};

export default SigninProvider;


