
import React from 'react';
import hero from '../assets/svg/blog-details.svg';
import BlogCard from '../_components/blog-card';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/svg/blog2.svg';
import blog3 from '../assets/svg/blog3.svg';

function page() {
    return (
        <div>
            <div className='bg-black px-[158px] pt-[75px] min-h-screen'>
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
            <div className='bg-black text-center py-[140px]'>
                <h1 className="heading-secondary">You may also like this</h1>
                <div className='flex items-center justify-center gap-8 px-[64px] mt-16'>
                    <BlogCard
                        imageSrc={blog1}
                        tags={['Tag Name', 'Tag Name']}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus
                    sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel
                    tellus magnis accumsan morbi."
                        date="Sep 01, 2024"
                    />
                    <BlogCard
                        imageSrc={blog2}
                        tags={['Tag Name', 'Tag Name']}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus
                    sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel
                    tellus magnis accumsan morbi."
                        date="Sep 01, 2024"
                    />
                    <BlogCard
                        imageSrc={blog3}
                        tags={['Tag Name', 'Tag Name']}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus
                    sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel
                    tellus magnis accumsan morbi."
                        date="Sep 01, 2024"
                    />
                </div>
            </div>

        </div>
    )
}

export default page