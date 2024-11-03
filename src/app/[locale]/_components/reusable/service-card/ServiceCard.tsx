
import React from 'react'
import ImageSwiper from '../img-swiper/ImageSwiper'
import Stars from '../stars/Stars'
import Image from 'next/image'
import { useLocale } from 'next-intl';
import Link from 'next/link';

export interface ServicesCard {
    _id: string;
    title: {
        ar: string,
        en: string
    };
    category?: {
        name: {
            ar: string,
            en: string
        }
    };
    subcategory?: {
        title: {
            ar: string,
            en: string
        }
    };
    images: string[];
    authorImg: string;
    serviceCard: {
        totalRated: number;
        totalReviewers: number;
    }
    price: number;
}

export interface ServicesCardProps {
    serviceData: ServicesCard;
}

const ServiceCard: React.FC<ServicesCardProps> = ({ serviceData }) => {
    const localActive = useLocale()

    return (
        <div>
            <Link href={`/${localActive}/categories/${serviceData.category?.name.en}/${serviceData.subcategory?.title.en}/${serviceData._id}`} passHref>
                <div className="relative w-full h-auto">
                    <ImageSwiper
                        images={serviceData.images}
                        extraStyle='h-[180px]'
                    />

                    <div className="absolute bottom-[10px] left-[15px] w-[36px] h-[36px] z-[100]">
                        <a href="">
                            <Image
                                src={serviceData.authorImg}
                                alt="Author's profile picture"
                                width={36}
                                height={36}
                                className="h-[100%] object-cover rounded-full border border-white"
                            />
                        </a>
                    </div>

                </div>
            </Link>
            <div className="text-start">
                <h4 className="font-kufi text-md my-2">
                    <a href="/training/learn-engineering">{localActive === "ar" ? serviceData.title.ar : serviceData.title.en}</a>
                </h4>
                <div className="text-sm text-[#5c5e61]">
                    <Link href={`/${localActive}/categories/${serviceData.category?.name.en}/`} className="text-[#5c5e61]">
                        {localActive == "ar" ? serviceData.category?.name.ar : serviceData.category?.name.en}
                    </Link> / <Link href={`/${localActive}/categories/${serviceData.category?.name.en}/${serviceData.subcategory?.title.en}`} className="text-[#5c5e61]">
                        {localActive == "ar" ? serviceData.subcategory?.title.ar : serviceData.subcategory?.title.en}
                    </Link>
                </div>
                {serviceData.serviceCard.totalRated > 0 && (
                    <div className={`flex items-center gap-1 my-2 `}>
                        <Stars rating={serviceData.serviceCard.totalRated} extraStyle={`text-[24px] ${localActive=='ar'?"":"scale-x-[-1]"}`} />
                        <span className="text-[#777777] text-[14px]">({serviceData.serviceCard.totalRated})</span>
                    </div>
                )}
                <div className="text-style1">
                    {localActive=='ar'?'تبدأ من ':'Start From'}<span className="font-bold">{serviceData.price}$</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
