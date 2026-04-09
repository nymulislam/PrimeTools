import React from 'react';

const CTASection = () => {
    return (
        <div className='text-center bg-purple-700 py-28 text-white space-y-6 '>
            <h1 className='text-5xl font-semibold'>
                Ready to Transform Your Workflow?
            </h1>
            <p className='max-w-xl mx-auto'>
                Join thousands of professionals who are already using PrimeTools to work smarter.Start your free trial today.
            </p>

            <div className='space-x-3'>
                <button className='btn text-purple-700 rounded-full'>Explore Products</button>
                <button className='btn bg-transparent btn-soft rounded-full text-white'>Explore Products</button>
            </div>
            <ul className='flex justify-center gap-10 opacity-80'>
                <li>14-day free trial</li>
                <li className='list-disc'>No credit card required</li>
                <li className='list-disc'>Cancel anytime</li>
            </ul>
        </div>
    );
};

export default CTASection;