"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current route
import navlogo from '../assets/navlogo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu and close icons
import { useRouter } from 'next/navigation';

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer visibility
    const pathname = usePathname(); // Get the current route

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Project', path: '/project' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    // Toggle the drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const router = useRouter();

    const handleClick = () => {
        router.push('/contact');
    };

    const handleClickLogo = () => {
        router.push('/');
    }


    return (
        <div className="z-[100] absolute w-full">
            <div className="flex justify-between items-center px-[30px] lg:px-[60px] py-[20px] lg:py-[28px]">
                <div onClick={handleClickLogo} className='cursor-pointer'>
                    <Image src={navlogo} className="object-cover w-[100px] h-auto lg:w-[120px]" alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex space-x-8 text-[#ffff]/90 text-[16px] cursor-pointer">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link href={item.path} passHref>
                                    <span className={`${pathname === item.path ? 'text-[#FF0000]' : ''}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mx-8 text-[28px] text-[#ffff] font-thin">|</div>
                    <button
                        className="text-[16px] text-[#232323] bg-[#FFFFFF] rounded-[4px] py-2 px-4"
                        onClick={handleClick}
                    >
                        Get in touch
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden z-[300]"> {/* Adjust z-index to make icon clickable */}
                    <button onClick={toggleDrawer} className="text-white text-3xl">
                        {isDrawerOpen ? <FiX /> : <FiMenu />} {/* Fix: Close icon should toggle the drawer */}
                    </button>
                </div>
            </div>

            {/* Drawer Menu (Mobile Only) */}
            {isDrawerOpen && (
                <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-[#000000]/90 z-[200] flex flex-col items-center justify-center">
                    <ul className="space-y-6 text-center text-white text-[24px]">
                        {navItems.map((item) => (
                            <li key={item.path} onClick={toggleDrawer}>
                                <Link href={item.path} passHref>
                                    <span className={`${pathname === item.path ? 'text-[#FF0000]' : ''}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="mt-6 text-[16px] text-[#232323] bg-[#FFFFFF] rounded-[4px] py-2 px-6"
                        onClick={toggleDrawer}
                    >
                        Get in touch
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
