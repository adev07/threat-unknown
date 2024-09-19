import React from 'react'
import BlogCard from '../_components/blog-card'
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/svg/blog2.svg';
import blog3 from '../assets/svg/blog3.svg';
import Button from '../_components/button';

function page() {
    const blogData = [
        {
            imageSrc: blog1,
            tags: ['Tag Name', 'Tag Name'],
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing fermentum amet, phasellus sem nisl to massa. Enim, eget nisi quis risus malesuada nulla vitae cursus vel tellus magnis accumsan morbi.',
            date: 'Sep 01, 2024',
        },
        {
            imageSrc: blog2,
            tags: ['Tag Name', 'Tag Name'],
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing fermentum amet, phasellus sem nisl to massa. Enim, eget nisi quis risus malesuada nulla vitae cursus vel tellus magnis accumsan morbi.',
            date: 'Sep 01, 2024',
        },
        {
            imageSrc: blog3,
            tags: ['Tag Name', 'Tag Name'],
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing fermentum amet, phasellus sem nisl to massa. Enim, eget nisi quis risus malesuada nulla vitae cursus vel tellus magnis accumsan morbi.',
            date: 'Sep 01, 2024',
        },
    ];
    return (
        <div>
            <div className="hero min-h-[660px] relative | flex flex-col items-center justify-center text-center">
                <h1 className="heading-secondary">Our Projects</h1>
                <p className='text-[#FFFFFF] text-[32px] leading-[42px] font-thin | mt-4'>
                    Real Solutions for Real Cybersecurity Challenges
                </p>
                <div className='px-[64px] | min-w-[930px] absolute bottom-0 mb-[-60px]'>
                    <div className='flex items-center justify-center | bg-[#232323] | rounded-[10px] shadow | py-[38px]'>
                        <div className='border-r pr-[50px]'>
                            <h2 className='text-[24px] text-[#FFFFFF]'>5Y</h2>
                            <h3 className='text-[16px] text-[#FFFFFF]'>Experience</h3>
                        </div>
                        <div className='px-[50px]'>
                            <h2 className='text-[24px] text-[#FFFFFF]'>100+</h2>
                            <h3 className='text-[16px] text-[#FFFFFF]'>Projects</h3>
                        </div>
                        <div className='border-l pl-[50px]'>
                            <h2 className='text-[24px] text-[#FFFFFF]'>50K</h2>
                            <h3 className='text-[16px] text-[#FFFFFF]'>Happy customerse</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-[140px] px-[64px]">
                <p className='text-[#fff]/50 text-center'>Explore some of our successful projects where we’ve helped organizations secure their digital environments, protect sensitive data, and enhance their cybersecurity posture. Each project is a testament to our commitment to delivering robust, tailored solutions that address unique challenges.</p>
                {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} className="flex items-center justify-center gap-8 mt-16">
                        {blogData.map((blog, idx) => (
                            <BlogCard
                                key={idx}
                                imageSrc={blog.imageSrc}
                                tags={blog.tags}
                                title={blog.title}
                                description={blog.description}
                                date={blog.date}
                            />
                        ))}
                    </div>
                ))}
                <div className="mt-[64px] flex items-center justify-center">
                    <Button text="Load More" />
                </div>
            </div>
            <div className="faqs min-h-[464px] relative before:absolute before:inset-0 before:bg-black/60 before:z-0">
                <div className='relative z-10 flex flex-col items-center justify-center pt-[120px] mx-[210px]'>
                    <h1 className="heading-secondary text-center">
                        Have any project for us?
                    </h1>
                    <p className='text-white text-[18px] leading-[28px] font-thin | mt-3 text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut dui volutpat volutpat. Vulputate sed imperdiet magna ac nunc faucibus. Enim eget egestas ipsum
                    </p>
                    <Button className='mt-8' text='Lets Discuss' />
                </div>
            </div>
        </div>
    )
}

export default page