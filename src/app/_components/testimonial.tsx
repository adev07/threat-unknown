"use client";

import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import zommer from "../assets/svg/zommer.svg";
import user from "../assets/svg/user.svg";
import Image from "next/image";

const Testimonial = () => {
    const PrevArrow = ({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) => {
        return (
            <div
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#ffff] rounded-full cursor-pointer z-10"
                onClick={onClick}
            >
                <IoIosArrowBack size={28} />
            </div>
        );
    };

    const NextArrow = ({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) => {
        return (
            <div
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#ffff] rounded-full cursor-pointer z-10"
                onClick={onClick}
            >
                <IoIosArrowForward size={28} />
            </div>
        );
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={function (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
            throw new Error("Function not implemented.");
        }} />,
        prevArrow: <PrevArrow onClick={function (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
            throw new Error("Function not implemented.");
        }} />,
        responsive: [
            {
                breakpoint: 768, // Mobile screens
                settings: {
                    slidesToShow: 1, // Show 1 slide on smaller screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="bg-[#000000] p-6 mr-4 flex flex-col items-center justify-center">
                <div className='flex items-center justify-center gap-2 mt-6'>
                    <Image src={zommer} alt="Zommer Logo" />
                    <h2 className='text-[24px] text-[#FFFFFF] font-bold'>Zommer</h2>
                </div>
                <div className="mt-4">
                    <p className="text-[#FFFFFF] text-lg leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque. Mauris elementum erat.</p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center justify-center rounded-full bg-[#FFFFFF] w-[60px] h-[60px]">
                        <Image src={user} alt="User" className="w-[24px] h-[24px]" />
                    </div>
                </div>
                <div className="text-[#FFFFFF] mt-4">
                    <h1 className="text-2xl">Author Name</h1>
                    <p className="text-[16px]">Role</p>
                </div>
            </div>
            <div className="bg-[#000000] p-6 ml-4 flex flex-col items-center justify-center">
                <div className='flex items-center justify-center gap-2 mt-6'>
                    <Image src={zommer} alt="Zommer Logo" />
                    <h2 className='text-[24px] text-[#FFFFFF] font-bold'>Zommer</h2>
                </div>
                <div className="mt-4">
                    <p className="text-[#FFFFFF] text-lg leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque. Mauris elementum erat.</p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center justify-center rounded-full bg-[#FFFFFF] w-[60px] h-[60px]">
                        <Image src={user} alt="User" className="w-[24px] h-[24px]" />
                    </div>
                </div>
                <div className="text-[#FFFFFF] mt-4">
                    <h1 className="text-2xl">Author Name</h1>
                    <p className="text-[16px]">Role</p>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonial;
