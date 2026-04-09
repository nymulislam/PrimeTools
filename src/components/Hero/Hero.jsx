import React from 'react';
import banner from '/banner.png'

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={banner}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='max-w-2xl space-y-2'>
                    <div className='flex items-center gap-1.5 bg-green-100 rounded-full px-2.5 py-0.5 max-w-fit text-green-700'>
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                        </span>
                        <h6>
                            New: AI-Powered Tools Available
                        </h6>
                    </div>
                    <h1 className="text-6xl font-bold max-w-xl ">Supercharge Your Digital Workflow</h1>
                    <p className="py-6 mr-40">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    <div className='space-x-2'>
                        <button className="btn btn-primary rounded-full">Explore Products</button>
                        <button className="btn btn-primary btn-soft rounded-full">Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;