"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import SwiperCore from 'swiper';

import 'swiper/css';
import './navigation.css'; 

SwiperCore.use([Navigation]);

interface IImagesData {
    images: string[];
    extraStyle?: string;
    navigationStyle?: string; 
}

const ImageSwiper: React.FC<IImagesData> = ({ images, extraStyle, navigationStyle }) => {
    return (
        <div className={`relative ${navigationStyle}`}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                className={`w-[100%] ${extraStyle}`}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSwiper;
