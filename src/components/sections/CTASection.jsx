import React from 'react';

const CTASection = () => {
    return (
        <div className='text-center bg-primary py-28 text-white space-y-6'>
            <h1 className='text-4xl md:text-5xl font-semibold px-5'>
                Ready to Transform Your Workflow?
            </h1>
            <p className='max-w-sm px-6 text-justify md:text-center md:max-w-xl mx-auto'>
                Join thousands of professionals who are already using PrimeTools to work smarter.Start your free trial today.
            </p>

            <div className='space-x-3'>
                <button className='btn text-primary rounded-full'>Explore Products</button>
                <button className='btn bg-transparent btn-soft rounded-full text-white'>Explore Products</button>
            </div>
            <ul className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 opacity-80'>
                <li className='list-disc md:list-none'>14-day free trial</li>
                <li className='list-disc'>No credit card required</li>
                <li className='list-disc'>Cancel anytime</li>
            </ul>
        </div>
    );
};

export default CTASection;