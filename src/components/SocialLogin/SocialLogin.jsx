import React, { useContext } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = async () => {
        try {
            await signGoogle();
            toast.success('Successfully signed in');
            navigate('/');
        } catch (error) {
            toast.error('Error during Google sign-in: ' + (error.message || 'Unknown error'));
        }
    };

    return (
        <div className='text-center'>
            <button onClick={handleGoogle} className='btn mx-4'>
                <FcGoogle className='text-2xl' />
            </button>
            <button className='btn mx-4'>
                <FaFacebook className='text-2xl text-blue-500' />
            </button>
        </div>
    );
};

export default SocialLogin;