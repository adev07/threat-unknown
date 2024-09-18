import React from 'react';

interface BlogCardProps {
    imageSrc: string;
    tags: string[];
    title: string;
    description: string;
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, tags, title, description, date }) => {
    return (
        <div>
            <div className="relative">
                <img
                    className="object-cover w-full max-h-[252px] rounded-t-[16px]"
                    src={imageSrc}
                    alt={title}
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-t-[16px]"></div>
                <div className="absolute top-4 left-4 flex space-x-2">
                    {tags.map((tag, index) => (
                        <div key={index} className="glassmorphic-pill">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-b-[16px] py-8 px-6 text-start">
                <h3 className="text-[24px] text-[#FFFFFF]">{title}</h3>
                <p className="mt-4 text-[#FFFFFF]/50">{description}</p>
                <div className="flex items-center justify-between mt-8">
                    <h2 className="text-sm font-medium text-[#FFFFFF]">Read More</h2>
                    <h2 className="text-[16px] font-normal text-[#FFFFFF]">{date}</h2>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
