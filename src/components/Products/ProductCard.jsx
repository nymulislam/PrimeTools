import React from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ product, carts, setCarts }) => {

    const tagStyle = {
        popular: 'badge-warning bg-amber-100',
        new: 'badge-success bg-green-100',
        best: 'badge-primary bg-indigo-100 text-indigo-700',
    }

    const handleCart = () => {
        const isFound = carts.find(item => item.id === product.id)

        if (isFound) {
            toast.error("Already in cart")
            return
        }
        setCarts([...carts, product])
        toast.success("Added to cart")
    }

    return (
        <div className="card w-full max-w-sm mx-auto shadow-sm bg-base-100 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="card-body">
                <div className='text-right'>
                    <span className={`badge badge-md rounded-full ${tagStyle[product.tagType]}`}>{product.tag}</span>
                </div>
                <div className="space-y-3">
                    <div className='shadow-sm rounded-full max-w-fit p-3'>
                        <img src={product.icon} alt="icon" />
                    </div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p>
                        {product.description}
                    </p>

                    <span className="text-xl block my-4"><span className='text-2xl font-semibold'>${product.price}</span>/{product.period}</span>
                </div>
                <ul className="flex flex-col gap-2 text-xs">
                    {product.features.map((feature, index) => (
                        <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{feature}</span>
                        </li>
                    ))}

                </ul>
                <div className="mt-6">
                    <button onClick={handleCart} className="btn btn-primary btn-block rounded-full hover:scale-105 hover:shadow-lg transition duration-300">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;