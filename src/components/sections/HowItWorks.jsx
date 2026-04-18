import React from 'react';
import user from '/user.png'
import box from '/package.png'
import rocket from '/rocket.png'

const HowItWorks = () => {
    return (
        <div id='features' className='bg-gray-50 py-20 space-y-16'>
            <div className='text-center space-y-5'>
                <h1 className='text-3xl md:text-5xl font-bold'>Get Started In 3 Steps</h1>
                <p className='px-10 md:px-0'>Start using Premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 my-10'>

                {/* Card-1 */}
                <div className="card bg-base-100 shadow-sm w-full hover:shadow-lg transition duration-300">
                    <div className='text-right p-5'>
                        <div className='badge bg-primary w-8 h-8 rounded-full text-white'>
                            01
                        </div>
                    </div>
                    <figure className="pt-8 flex justify-center">
                        <div className='w-16 h-16 bg-purple-100 rounded-full flex justify-center items-center'>
                            <img
                                src={user}
                                alt="Start Creating"
                                className="w-8 h-8" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="card bg-base-100 w-full shadow-sm hover:shadow-lg transition duration-300">
                    <div className='text-right p-5'>
                        <div className='badge bg-primary w-8 h-8 rounded-full text-white'>
                            02
                        </div>
                    </div>
                    <figure className="pt-8 flex justify-center">
                        <div className='w-16 h-16 bg-purple-100 rounded-full flex justify-center items-center'>
                            <img
                                src={box}
                                alt="Start Creating"
                                className="w-8 h-8" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="card bg-base-100 w-full shadow-sm hover:shadow-lg transition duration-300">
                    <div className='text-right p-5'>
                        <div className='badge bg-primary w-8 h-8 rounded-full text-white'>
                            03
                        </div>
                    </div>
                    <figure className="pt-8 flex justify-center">
                        <div className='w-16 h-16 bg-purple-100 rounded-full flex justify-center items-center'>
                            <img
                                src={rocket}
                                alt="Start Creating"
                                className="w-8 h-8" />
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