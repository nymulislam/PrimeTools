import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handleRemove = (item) => {
        const removedItem = carts.filter(i => i.id !== item.id)
        setCarts(removedItem)
        toast.error("Removed from cart");
    }

    const handlePayment = () => {
        setCarts([])
        toast.success("Order placed successfully!");
    }

    return (
        <div id='cart' className='max-w-5xl mx-auto shadow-md  rounded-lg bg-base-100 my-10'>
            <h2 className='text-2xl font-semibold px-5 py-4 '>Your Cart</h2>

            {carts.length > 0 ?

                /* Cart Item */
                <div>
                    {
                        carts.map((cart) => (
                            <div key={cart.id} className='px-5 py-2'>
                                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-5 shadow-sm rounded-lg hover:shadow-md transition'>
                                    <div className='flex items-center gap-3'>
                                        <div className='p-3 rounded-full shadow-sm'>
                                            <img src={cart.icon} alt="Product icon" className='w-10 h-10' />
                                        </div>
                                        <div>
                                            <h2 className='text-lg font-bold'>{cart.name}</h2>
                                            <p className='opacity-60 font-semibold'>${cart.price}</p>
                                        </div>
                                    </div>

                                    <button onClick={() => handleRemove(cart)} className='btn btn-error btn-sm sm:btn-md btn-soft hover:scale-105 hover:shadow-lg transition duration-300'>Remove</button>
                                </div>
                            </div>
                        ))
                    }

                    <div className='flex items-center justify-between m-5 p-5 shadow-sm rounded-xl '>
                        <p className='text-lg font-medium'>
                            Total:
                        </p>
                        <h5 className='text-2xl font-bold'>
                            ${totalPrice}
                        </h5>
                    </div>

                    <div className='p-5'>
                        <button 
                        onClick={handlePayment} className='btn btn-primary w-full hover:scale-101 hover:shadow-lg transition duration-300' type="button">Proceed to Checkout</button>
                    </div>
                </div>
                :
                /* Empty Cart */
                <div className='flex flex-col items-center justify-center h-96 gap-3 animate-pulse'>
                    <FaCartShopping size={50} className='opacity-40' />
                    <h1 className='text-sm opacity-60'>Your Cart is empty</h1>
                </div>}

        </div>
    );
};

export default Cart;