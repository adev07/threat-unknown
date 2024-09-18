import Image from 'next/image';
import React from 'react';

interface ServicesCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div
            className='mt-16 p-8 rounded-[16px] shadow-lg'
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
            }}
        >
            <div>
                <Image src={imageSrc} alt={title} />
            </div>
            <h2 className='text-[#FFFFFF] text-[24px] mt-2'>{title}</h2>
            <p className='mt-4 text-[18px] text-[#FFFFFF]'>
                {description}
            </p>
        </div>
    );
};

export default ServicesCard;
