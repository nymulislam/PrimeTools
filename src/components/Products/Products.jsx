import React, { use, useState } from 'react';
import { HashLoader } from 'react-spinners';
import Cart from './Cart';
import Product from './Product';

const Products = ({ dataPromise, carts, setCarts }) => {
    const [activeTab, setActiveTab] = useState('products')

    const products = use(dataPromise);

    return (
        <div className='my-10'>
            <div className='text-center p-10 space-y-5'>
                <h1 className='text-5xl font-bold '>
                    Premium Digital Tools
                </h1>
                <p className='max-w-lg mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-box max-w-fit mx-auto rounded-full mb-10">
                <button
                    onClick={() => setActiveTab('products')}
                    className={`tab rounded-full ${activeTab === 'products' ? `bg-primary text-white shadow-md shadow-indigo-500/50` : ""}`}>Products</button>
                <button
                    onClick={() => setActiveTab('cart')}
                    className={`tab rounded-full ${activeTab === 'cart' ? `bg-primary text-white shadow-md shadow-indigo-500/50` : ""}`}>Cart ({carts.length})</button>

            </div>

           { activeTab === 'products' && <div className='grid grid-cols-3 gap-7 max-w-7xl mx-auto'>
                {products.map((product, index) => (
                    <Product key={index} product={product} carts={carts} setCarts={setCarts}></Product>
                ))}
            </div>}

            {activeTab === 'cart' && <Cart carts={carts}></Cart>}
        </div>
    );
};

export default Products;