import React from 'react'
import ImageSwiper from '../img-swiper/ImageSwiper'
import Stars from '../stars/Stars'
import Image from 'next/image'

interface ServiceCardProps {
    title: string;
    category: string;
    subCategory: string;
    images: string[];
    authorImg: string;
    rating: number;
    price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
    title, 
    category, 
    subCategory, 
    images, 
    authorImg, 
    rating, 
    price 
}) => {
    return (
        <div>
            <div className="relative w-full h-auto">
                <ImageSwiper
                    images={images}
                    extraStyle='h-[180px]'
                />

                <div className="absolute bottom-[10px] left-[15px] w-[36px] h-[36px] z-[100]">
                    <a href="">
                        <Image
                            src={authorImg}
                            alt="Author's profile picture"
                            width={36}
                            height={36}
                            className="h-[100%] object-cover rounded-full border border-white"
                        />
                    </a>
                </div>

            </div>
            <div className="text-start">
                <h4 className="font-kufi text-md my-2">
                    <a href="/training/learn-engineering">{title}</a>
                </h4>
                <div className="text-sm text-[#5c5e61]">
                    <a href="/training" className="text-[#5c5e61]">{category}</a> / <a href="/training/learn-engineering" className="text-[#5c5e61]">{subCategory}</a>
                </div>
                {rating > 0 && (
                    <div className='flex items-center gap-1 my-2'>
                        <Stars rating={rating} extraStyle='text-[24px]' />
                        <span className="text-[#777777] text-[14px]">({rating})</span>
                    </div>
                )}
                <div className="text-style1">
                    تبدأ من <span className="font-bold">{price}$</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
