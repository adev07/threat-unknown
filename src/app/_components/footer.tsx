import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/navlogo.png";
import Image from 'next/image';

function Footer() {
    return (
        <footer className="bg-black text-white py-[120px] px-[64px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col items-start">
                    <Image className='object-cover w-[120px] h-auto' src={logo} alt="" />
                    <p className="my-4 text-[16px] leading-[28px]">
                        Lorem ipsum dolor sit amet, consectetur theithis adipiscing elit. Quis facilisis quam semper urna rutrum egestas ante.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-700">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-700">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-700">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center">
                    <h3 className="text-[24px] leading-[28px] mb-4 ml-[45px]">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">Services</a></li>
                        <li><a href="#" className="hover:text-gray-400">Project</a></li>
                        <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>

                {/* Subscribe to Newslette */}
                <div className="flex flex-col items-start">
                    <h3 className="text-[24px] leading-[28px] mb-4">Subscribe to Our Newsletter</h3>
                    <div className="flex flex-col items-center space-y-2 mb-4 w-[300px]">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-2 rounded-lg bg-white text-black w-full"
                        />
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 w-full">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-8 border-t border-gray-800 pt-4">
                <p>Copyrights © 2024 Threat Unknown, All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer