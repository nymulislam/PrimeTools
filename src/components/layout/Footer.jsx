import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id='faq' className='bg-[#101727] text-white'>
            <footer className="footer sm:footer-horizontal p-10">
                <aside>
                    <h1 className='text-2xl font-bold'>
                        PrimeTools
                    </h1>
                    <p className='max-w-xs'>
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/naym4islam'>
                            <FaFacebook size={26} />
                        </a>
                        <a href='https://github.com/nymulislam'>
                            <FaGithub size={26} />
                        </a>
                        <a href='https://www.linkedin.com/in/nymulislam/'>
                            <FaLinkedin size={26} />
                        </a>
                    </div>
                </nav>
            </footer>
            <div className='divider before:bg-white after:bg-white opacity-50 mx-10'>

            </div>
            <footer className="footer bg-[#101727] px-6 md:px-10 pb-8 pt-2 flex flex-col md:flex-row justify-between gap-4">
                <aside className="grid-flow-col items-center">
                    <p>
                        © 2026 PrimeTools. All rights reserved.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <ul className="grid grid-flow-col gap-4">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;