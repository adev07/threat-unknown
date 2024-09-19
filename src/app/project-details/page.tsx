
import React from 'react';
import hero from '../assets/svg/blog-details.svg';
import user from '../assets/svg/user.svg';

function page() {
    return (
        <div>
            <div className='bg-black px-[158px] pt-[75px] min-h-screen pb-[130px]'>
                <div className="pt-[75px] relative">
                    <img src={hero.src} alt="" className="object-cover" />
                    <h2 className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-left text-[64px] mx-[48px]">
                        INTEGER MAECENAS <br /> EGET VIVERRA
                    </h2>
                    <p className='text-[#fff] text-[20px] leading-[40px] absolute left-0 top-[440px] mx-[68px] bottom-0'>-- June 28, 2018</p>
                </div>
                <div className='mt-[64px]'>
                    <h2 className='text-[#ffff] text-[32px] leading-[42px]'>Customer onboarding there business classes</h2>
                    <p className='text-[#ffff]/50 mt-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. to
                        Vulputate consectetur ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.Lorem ipsu sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. Vulputate consectetur
                        ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.Lorem ipsum dolor sit amet,
                    </p>
                    <h2 className='text-[24px] text-[#ffff] my-[24px]'>Customer Understanding</h2>
                    <p className='text-[#ffff]/50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. to
                        Vulputate consectetur ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.Lorem ipsu sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. Vulputate consectetur
                        ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.Lorem ipsum dolor sit amet,
                    </p>
                    <p className='text-[#ffff]/50 mt-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. to
                        Vulputate consectetur ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.Lorem ipsu sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. Vulputate consectetur
                        ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.Lorem ipsum dolor sit amet,
                    </p>
                    <h2 className='text-[24px] text-[#ffff] my-[24px]'>Customer Understanding</h2>
                    <p className='text-[#ffff]/50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. to
                        Vulputate consectetur ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.Lorem ipsu sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra. Vulputate consectetur
                        ac lacinia amet nunc aliquet. Rhoncus, eget eu lobortis arcu auctor nullam accumsan, lectus fermentum.Lorem ipsum dolor sit amet,
                    </p>
                </div>
            </div>
            <div className="clients min-h-[593px] relative before:absolute before:inset-0 before:bg-black/60 before:z-0">
                <div className='relative z-10 flex flex-col items-center justify-center pt-[145px] mx-[210px]'>
                    <h1 className="heading-secondary text-center">
                        Client Testimonial
                    </h1>
                    <p className='text-white text-[18px] leading-[28px] font-thin | mt-3 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque. Mauris elementum erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque. Mauris elementum erat
                    </p>
                    <div className="flex items-center justify-center rounded-full bg-[#FFFFFF] w-[60px] h-[60px] mt-[28px]">
                        <div>
                            <img src={user.src} alt="User" className="w-[24px] h-[24px]" />
                        </div>

                    </div>
                    <div className='text-center mt-4'>
                        <h3 className='text-[#fff] font-bold text-2xlß'>Author Name</h3>
                        <p className='text-[18px] text-[#fff]'>Company | Role</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page