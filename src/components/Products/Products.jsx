import React, { Suspense} from 'react';
import ProductCards from './ProductCards';
import { HashLoader } from 'react-spinners';

const Products = ({ ProductData }) => {
    
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

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box max-w-fit mx-auto rounded-full mb-10">
                <input type="radio" name="my_tabs_1" className="tab rounded-full checked:bg-primary checked:text-white  checked:shadow-md checked:shadow-indigo-500/50" aria-label="Products" defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab rounded-full checked:bg-primary checked:text-white checked:shadow-md checked:shadow-indigo-500/50" aria-label='Cart (0)' />
            </div>

            {/* Products Cards */}
            <Suspense fallback={
                <div className='flex justify-center items-center h-64'>
                    <HashLoader color="#25ca16" />
                </div>
            }>
                <ProductCards ProductData={ProductData}></ProductCards>
            </Suspense>
        </div>
    );
};

export default Products;