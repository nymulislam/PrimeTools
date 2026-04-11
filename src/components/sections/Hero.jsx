import React from 'react';
import banner from '/banner.png'
import { IoPlayOutline } from 'react-icons/io5';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen px-4">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">

                {/* Image */}
                <img
                    src={banner}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl"
                />

                {/* Text Content */}
                <div className="max-w-2xl space-y-4 text-center lg:text-left">

                    {/* Badge */}
                    <div className="flex items-center gap-1.5 bg-indigo-100 rounded-full px-2.5 py-0.5 text-primary max-w-fit mx-auto md:mx-0">
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-indigo-500"></span>
                        </span>
                        <h6>New: AI-Powered Tools Available</h6>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl text-center lg:text-left lg:text-6xl font-bold">
                        Supercharge Your Digital Workflow
                    </h1>

                    {/* Description */}
                    <p className="text-center lg:text-left md:max-w-sm">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place.
                    </p>

                    {/* Buttons */}
                    <div className="space-x-4 text-center lg:text-left">
                        <button className="btn btn-primary rounded-full hover:scale-105 hover:shadow-lg transition duration-300">Explore Products</button>
                        <button className="btn btn-primary btn-soft rounded-full hover:bg-primary hover:text-white transition duration-500">
                           <IoPlayOutline size={18} /> Watch Demo
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;