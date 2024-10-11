import React from 'react';
import ImageSwiper from '../reusable/img-swiper/ImageSwiper';
import { useLocale } from 'next-intl';

interface ServiceDataProps {
    images: string[];
    description: {
        ar: string,
        en: string
    };
}

const ServiceData: React.FC<ServiceDataProps> = ({ images, description }) => {
    const localActive = useLocale()
    return (
        <div className='bg-white p-container-space'>
            <div className='h-[505.167px] relative'>
                <ImageSwiper images={images} extraStyle='h-[505.167px]' />
            </div>
            <article className='mt-[20px]'>
                <p className='whitespace-pre-wrap text-[16px] font-naskh font-[300] leading-[2]'>
                    {localActive === "ar"? description.ar : description.en}
                </p>
            </article>
        </div>
    );
};

export default ServiceData;