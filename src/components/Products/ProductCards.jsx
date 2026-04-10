import React, { use } from 'react';

const ProductCards = ({ ProductData }) => {
    const products = use(ProductData);

    const tagStyle = {
        popular: 'badge-warning bg-amber-100',
        new: 'badge-success bg-green-100',
        best: 'badge-primary bg-indigo-100 text-indigo-700',
    }

    return (
        <div className='grid grid-cols-3 gap-7 max-w-7xl mx-auto'>
            {products.map(product => (
                <div key={product.id} className="card w-96 shadow-sm bg-base-100">
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
                            <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCards;