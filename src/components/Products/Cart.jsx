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
        <div className='shadow-md max-w-7xl mx-auto rounded-lg'>
            <h2 className='text-2xl font-semibold px-5 py-3'>Your Cart</h2>

            {carts.length > 0 ?

                /* Cart Item */
                <div>
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

                                    <button onClick={() => handleRemove(cart)} className='btn btn-error btn-soft'>Remove</button>
                                </div>
                            </div>
                        ))
                    }

                    <div className='flex items-center justify-between m-5 shadow-sm p-5 rounded-xl'>
                        <p>
                            Total:
                        </p>
                        <h5 className='text-2xl font-bold'>
                            ${totalPrice}
                        </h5>
                    </div>

                    <div className='pb-8 pt-2 px-5 max-w-5xl mx-auto'>
                        <button onClick={handlePayment} className='btn btn-primary btn-wide max-w-full' type="button">Proceed to Checkout</button>
                    </div>
                </div>
                :
                /* Empty Cart */
                <div className='flex flex-col items-center justify-center h-96 gap-2'>
                    <FaCartShopping size={40} className='opacity-50' />
                    <h1 className='text-md opacity-70'>Your Cart is empty</h1>
                </div>}

        </div>
    );
};

export default Cart;