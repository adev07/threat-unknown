"use client";
import React from 'react'
import BlogCard from '../_components/blog-card'
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/svg/blog2.svg';
import blog3 from '../assets/svg/blog3.svg';
import Button from '../_components/button';
import { useRouter } from 'next/navigation';

function page() {

    const router = useRouter();

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
    const handleCardClick = () => {
        router.push('/blog-details');
    };
    return (
        <div>
            <div className="hero sm:min-h-[660px] min-h-[620px] relative flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-16">
                <h1 className="heading-secondary">
                    Insights & Updates
                </h1>
                <p className='text-[#FFFFFF] text-[16px] sm:text-[28px] md:text-[32px] sm:leading-[38px] md:leading-[42px] font-thin mt-4'>
                    Stay informed with the latest cybersecurity news, tips, and to keep your business secure.
                </p>
            </div>
            <div className="bg-black sm:py-[120px] py-[40px] sm:px-[64px] px-6">
                {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} onClick={handleCardClick} className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10 sm:mt-16">
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
                <div className="sm:mt-16 mt-8 flex items-center justify-center">
                    <Button text="Load More" />
                </div>
            </div>
            <div className="faqs min-h-[464px] relative before:absolute before:inset-0 before:bg-black/60 before:z-0">
                <div className='relative z-10 flex flex-col items-center justify-center pt-[120px]'>
                    <h1 className="heading-secondary text-center">
                        How to choose <br /> cybersecurity solution
                    </h1>
                    <p className='text-white sm:text-[18px] text-[16px] leading-[28px] font-thin | mt-3 sm:px-0 px-6 text-center'>
                        Having difficulties choosing the right solution for your business?
                    </p>
                    <Button className='mt-8' text='Talk with us' />
                </div>
            </div>
        </div>
    )
}

export default page