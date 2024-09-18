"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current route
import navlogo from '../assets/navlogo.png';

type Props = {};

function Navbar({ }: Props) {
    const pathname = usePathname(); // Get the current route

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Project', path: '/project' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className='z-[100] absolute | w-full | flex justify-between items-center | px-[60px] py-[28px]'>
            <div>
                {/* Using Next.js Image component for optimized images */}
                <Image src={navlogo} className="object-cover w-[120px] h-auto" alt="Logo" />
            </div>
            <div className='flex items-center'>
                <ul className='flex space-x-8 | text-[#ffff]/90 text-[16px] | cursor-pointer'>
                    {/* Loop through navItems array to create navigation links */}
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
                <div className='mx-8 text-[28px] text-[#ffff] font-thin'>|</div>
                <button className='text-[16px] text-[#232323] | bg-[#FFFFFF] | rounded-[4px] | py-2 px-4'>
                    Get in touch
                </button>
            </div>
        </div>
    );
}

export default Navbar;
