import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className='text-center'>
            <button className='btn mx-4'><FcGoogle className='text-2xl'/></button>
            <button className='btn mx-4'><FaFacebook className='text-2xl text-blue-500'/></button>
        </div>
    );
};

export default SocialLogin;