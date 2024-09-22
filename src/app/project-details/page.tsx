
import React from 'react';
import hero from '../assets/svg/blog-details.svg';
import user from '../assets/svg/user.svg';

function page() {
    return (
        <div>
            <div className='bg-black px-6 md:px-[158px] pt-8 md:pt-[75px] min-h-screen sm:pb-[130px] pb-[64px]'>
                <div className="pt-[75px] relative">
                    <img src={hero.src} alt="" className="object-cover w-full" />
                    <h2 className="absolute sm:mt-0 mt-[18px] left-0 top-1/2 transform -translate-y-1/2 text-white text-left text-[24px] md:text-[64px] mx-[16px] md:mx-[48px]">
                        INTEGER MAECENAS <br /> EGET VIVERRA
                    </h2>
                    <p className='text-[#fff] text-[14px] md:text-[20px] leading-[28px] md:leading-[40px] absolute left-0 top-[180px] md:top-[440px] mx-[16px] md:mx-[68px] bottom-0'>
                        -- June 28, 2018
                    </p>
                </div>
                <div className='mt-[40px] md:mt-[64px]'>
                    <h2 className='text-[#ffff] text-[24px] md:text-[32px] leading-[32px] md:leading-[42px]'>
                        Customer onboarding their business classes
                    </h2>
                    <p className='text-[#ffff]/50 mt-[16px] md:mt-[24px] text-[14px] md:text-[16px] leading-[24px] md:leading-[28px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. Vulputate consectetur ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.
                    </p>
                    <h2 className='text-[20px] md:text-[24px] text-[#ffff] my-[16px] md:my-[24px]'>
                        Customer Understanding
                    </h2>
                    <p className='text-[#ffff]/50 text-[14px] md:text-[16px] leading-[24px] md:leading-[28px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. Vulputate consectetur ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.
                    </p>
                    <p className='text-[#ffff]/50 mt-[24px] md:mt-[32px] text-[14px] md:text-[16px] leading-[24px] md:leading-[28px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. Vulputate consectetur ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.
                    </p>
                    <h2 className='text-[20px] md:text-[24px] text-[#ffff] my-[16px] md:my-[24px]'>
                        Customer Understanding
                    </h2>
                    <p className='text-[#ffff]/50 text-[14px] md:text-[16px] leading-[24px] md:leading-[28px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. Vulputate consectetur ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.
                    </p>
                </div>
            </div>

            <div className="clients sm:min-h-[593px] relative before:absolute before:inset-0 before:bg-black/60 before:z-0">
                <div className='relative z-10 flex flex-col items-center justify-center py-[80px] sm:py-0 md:pt-[145px] px-6 md:mx-[210px]'>
                    <h1 className="heading-secondary text-center">
                        Client Testimonial
                    </h1>
                    <p className='text-white text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-thin mt-3 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque. Mauris elementum erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque. Mauris elementum erat
                    </p>
                    <div className="flex items-center justify-center rounded-full bg-[#FFFFFF] w-[50px] h-[50px] md:w-[60px] md:h-[60px] mt-[20px] md:mt-[28px]">
                        <img src={user.src} alt="User" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                    </div>
                    <div className='text-center mt-4'>
                        <h3 className='text-[#fff] font-bold text-xl md:text-2xl'>Author Name</h3>
                        <p className='text-[16px] md:text-[18px] text-[#fff]'>Company | Role</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page