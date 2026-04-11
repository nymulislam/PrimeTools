import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const Cart = ({ carts }) => {
    console.log(carts)
    return (
        <div className='shadow-md max-w-7xl mx-auto rounded-lg'>

            {
                carts.map((cart, index) => (
                    <div key={index} className='px-5 py-2'>
                        <div className='flex justify-between items-center p-5 shadow-sm rounded-lg'>
                            <div className='flex items-center gap-2.5'>
                                <div className='p-3 rounded-full shadow-sm'>
                                    <img src={cart.icon} alt="Product icon" />
                                </div>
                                <div>
                                    <h2 className='text-xl font-bold'>{cart.name}</h2>
                                    <p className='opacity-60 font-semibold'>${cart.price}</p>
                                </div>
                            </div>

                            <button className='btn btn-error btn-soft'>Remove</button>
                        </div>
                    </div>
                ))
            }

            {/* Empty Cart */}
            <div className='flex flex-col items-center justify-center h-96 gap-2'>
                <FaCartShopping size={40} className='opacity-50' />
                <h1 className='text-md opacity-70'>Your Cart is empty</h1>
            </div>
        </div>
    );
};

export default Cart;