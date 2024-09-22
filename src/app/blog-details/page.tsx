
import React from 'react';
import hero from '../assets/svg/blog-details.svg';
import BlogCard from '../_components/blog-card';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/svg/blog2.svg';
import blog3 from '../assets/svg/blog3.svg';

function page() {
    return (
        <div>
            <div className='bg-black px-6 pt-[60px] min-h-screen md:px-[158px] md:pt-[75px]'>
                <div className="pt-8 relative md:pt-[75px]">
                    <img src={hero.src} alt="" className="object-cover w-full" />
                    <h2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-left text-[24px] md:text-[64px] mx-2 md:mx-[48px]">
                        INTEGER MAECENAS <br /> EGET VIVERRA
                    </h2>
                    <p className='text-[#fff] text-[14px] md:text-[20px] leading-6 md:leading-[40px] absolute left-4 top-[140px] md:top-[440px] mx-2 md:mx-[68px] bottom-0'>
                        -- June 28, 2018
                    </p>
                </div>
                <div className='mt-8 md:mt-[64px]'>
                    <h2 className='text-[#ffff] text-[24px] md:text-[32px] leading-[32px] md:leading-[42px]'>
                        Customer onboarding their business classes
                    </h2>
                    <p className='text-[#ffff]/50 mt-4 md:mt-[24px] text-[14px] md:text-[16px] leading-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra.
                    </p>
                    <h2 className='text-[18px] md:text-[24px] text-[#ffff] my-4 md:my-[24px]'>
                        Customer Understanding
                    </h2>
                    <p className='text-[#ffff]/50 text-[14px] md:text-[16px] leading-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra.
                    </p>
                    <p className='text-[#ffff]/50 mt-4 md:mt-[32px] text-[14px] md:text-[16px] leading-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra.
                    </p>
                    <h2 className='text-[18px] md:text-[24px] text-[#ffff] my-4 md:my-[24px]'>
                        Customer Understanding
                    </h2>
                    <p className='text-[#ffff]/50 text-[14px] md:text-[16px] leading-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa morbi posuere a est. Lectus egestas laoreet eu feugiat etiam eget netus mi pharetra.
                    </p>
                </div>
            </div>

            <div className='bg-black text-center py-[60px] md:py-[140px]'>
                <h1 className="heading-secondary sm:px-0 px-6">You may also like this</h1>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-[64px] mt-8 md:mt-16'>
                    <BlogCard
                        imageSrc={blog1}
                        tags={['Tag Name', 'Tag Name']}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel tellus magnis accumsan morbi."
                        date="Sep 01, 2024"
                    />
                    <BlogCard
                        imageSrc={blog2}
                        tags={['Tag Name', 'Tag Name']}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel tellus magnis accumsan morbi."
                        date="Sep 01, 2024"
                    />
                    <BlogCard
                        imageSrc={blog3}
                        tags={['Tag Name', 'Tag Name']}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel tellus magnis accumsan morbi."
                        date="Sep 01, 2024"
                    />
                </div>
            </div>


        </div>
    )
}

export default page