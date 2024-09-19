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
                <h1 className="heading-secondary">Insights & Updates</h1>
                <p className='text-[#FFFFFF] text-[32px] leading-[42px] font-thin | mt-4'>
                    Stay informed with the latest cybersecurity news, tips, and <br />strategies to keep your business secure.
                </p>
            </div>
            <div className="bg-black py-[120px] px-[64px]">
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
            <div className="faqs  min-h-[464px] relative before:absolute before:inset-0 before:bg-black/60 before:z-0">
                <div className='relative z-10 flex flex-col items-center justify-center pt-[120px]'>
                    <h1 className="heading-secondary text-center">
                        How to choose <br /> cybersecurity solution
                    </h1>
                    <p className='text-white text-[18px] leading-[28px] font-thin | mt-3'>
                        Having difficulties choosing the right solution for your business?
                    </p>
                    <Button className='mt-8' text='Talk with us' />
                </div>
            </div>
        </div>
    )
}

export default page