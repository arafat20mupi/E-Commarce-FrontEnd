import React, { useContext } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../provider/AuthProvider';

const SocialLogin = () => {
    const {signGoogle}=useContext(AuthContext)
    const handleGoogle=()=>[
        signGoogle()
    ]
    return (
        <div className='text-center'>
            <button onClick={handleGoogle} className='btn mx-4'><FcGoogle className='text-2xl'/></button>
            <button className='btn mx-4'><FaFacebook className='text-2xl text-blue-500'/></button>
        </div>
    );
};

export default SocialLogin;