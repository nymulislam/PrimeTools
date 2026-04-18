import React from 'react';

const Nav = ({ carts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    return (

        <div className='navbar bg-base-100 shadow-sm px-4 lg:px-8'>
            {/* Mobile device lists */}
            <div className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-3 shadow">
                    <li><a href='#products'>Products</a></li>
                    <li>
                        <a href='#features'>Features</a>
                    </li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#testimonials'>Testimonials</a></li>
                    <li><a href='#faq'>FAQ</a></li>
                </ul>
            </div>

            {/* Site logo */}
            <div className="flex-1 lg:flex-none">
                <a href='/' className="text-primary text-xl font-bold">PrimeTools</a>
            </div>

            {/* Large device lists */}
            <div className="hidden lg:flex flex-1 justify-center">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li><a href='#products'>Products</a></li>
                    <li><a href='#features'>Features</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#testimonials'>Testimonials</a></li>
                    <li><a href='#faq'>FAQ</a></li>
                </ul>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
                {/* Cart */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-primary badge-xs rounded-full indicator-item">{carts.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-56 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{carts.length} Items</span>
                            <span className="text-info">Subtotal: ${totalPrice}</span>

                            <div className="card-actions">
                                <a href="#cart" className='w-full'>
                                    <button onClick={(e) => e.currentTarget.blur()} className="btn btn-primary btn-block ">View cart</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login */}
                <button className='btn btn-xs md:btn-md rounded-full'>Login</button>
                <button className="btn btn-xs md:btn-md btn-primary rounded-full transition-all duration-200">Get Started</button>
            </div>
        </div>
    );
};

export default Nav;