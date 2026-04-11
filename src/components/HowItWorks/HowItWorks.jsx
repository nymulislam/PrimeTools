import React from 'react';
import user from '/user.png'
import box from '/package.png'
import rocket from '/rocket.png'

const HowItWorks = () => {
    return (
        <div className='bg-gray-50 py-20 space-y-16'>
            <div className='text-center space-y-5'>
                <h1 className='text-5xl font-bold'>Get Started In 3 Steps</h1>
                <p>Start using Premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex items-center justify-center gap-10 my-5 max-w-5xl mx-auto'>

                {/* Card-1 */}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='text-right p-5'>
                        <div className='badge bg-primary w-8 h-8 rounded-full text-white'>
                            01
                        </div>
                    </div>
                    <figure className="px-10 pt-10">
                        <div className='w-18 h-18 bg-purple-100 rounded-full flex justify-center items-center'>
                            <img
                                src={user}
                                alt="Start Creating"
                                className="w-10 h-10" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='text-right p-5'>
                        <div className='badge bg-primary w-8 h-8 rounded-full text-white'>
                            02
                        </div>
                    </div>
                    <figure className="px-10 pt-10">
                        <div className='w-18 h-18 bg-purple-100 rounded-full flex justify-center items-center'>
                            <img
                                src={box}
                                alt="Start Creating"
                                className="w-10 h-10" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='text-right p-5'>
                        <div className='badge bg-primary w-8 h-8 rounded-full text-white'>
                            03
                        </div>
                    </div>
                    <figure className="px-10 pt-10">
                        <div className='w-18 h-18 bg-purple-100 rounded-full flex justify-center items-center'>
                            <img
                                src={rocket}
                                alt="Start Creating"
                                className="w-10 h-10" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;