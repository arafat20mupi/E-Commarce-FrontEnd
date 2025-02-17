import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const Mychart = () => {
    return (
        <div className='flex justify-center'>
            <div className='lg:flex flex-row-reverse justify-between w-full my-5 mx-5'>
                <div className='mt-5 mr-8'>
                    <h1 className='text-2xl font-bold pb-3'>Order Details</h1>
                    <div className='border-2 p-4 rounded-xl'>
                    <p className='flex justify-between'><span>Price</span><span className='font-bold'>20</span></p>
                    <p className='flex justify-between'><span>Discount</span><span  className='font-bold'>10</span></p>
                    <p className='flex justify-between'><span>Tax</span><span className='font-bold'>0</span></p>
                    <hr  className='my-2'/>
                    <p className='flex justify-between pb-4'><span className='text-2xl font-semibold'>Total</span><span  className='font-bold'>10</span></p>
                    <button className='btn btn-primary'>Proceed To Checkout</button>
                    </div>
                </div>
                <div className='w-2/3'>
                    <h1 className='text-2xl font-bold py-2'>Shopping Chart </h1>
                    <h6>how many product in chart</h6>
                    <hr className='my-2'/>
                    <div className="card card-side bg-base-100 shadow-xl w-full mr-10">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                alt="Movie" className='h-48 w-42' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="text-3xl"><TiDeleteOutline /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mychart;