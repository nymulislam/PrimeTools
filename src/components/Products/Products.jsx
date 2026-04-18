import React, { use, useState } from 'react';
import { HashLoader } from 'react-spinners';
import ProductCard from './ProductCard';
import Cart from './Cart';

const Products = ({ dataPromise, carts, setCarts }) => {
    const [activeTab, setActiveTab] = useState('products')

    const products = use(dataPromise);

    return (
        <div id='products' className='my-10'>
            <div className='text-center p-10 space-y-5'>
                <h1 className='text-4xl md:text-5xl font-bold '>
                    Premium Digital Tools
                </h1>
                <p className='md:max-w-lg mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-box gap-2 max-w-fit mx-auto rounded-full mb-10 flex transition-all duration-300">
                <button
                    onClick={() => setActiveTab('products')}
                    className={`tab rounded-full hover:scale-105 hover:shadow-lg transition duration-300 ${activeTab === 'products'
                        ? `bg-primary text-white shadow-md shadow-indigo-500/50`
                        : ''}`}
                >
                    Products
                </button>
                <button
                    onClick={() => setActiveTab('cart')}
                    className={`tab rounded-full hover:scale-105 hover:shadow-lg transition duration-300 ${activeTab === 'cart'
                        ? `bg-primary text-white shadow-md shadow-indigo-500/50`
                        : ''}`}
                >
                    Cart ({carts.length})
                </button>

            </div>

            {activeTab === 'products' && <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4'>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        carts={carts}
                        setCarts={setCarts}
                    />
                ))}
            </div>}

            {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}
        </div>
    );
};

export default Products;