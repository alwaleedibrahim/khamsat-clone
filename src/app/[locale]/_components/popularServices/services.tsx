import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  image: string;
}

export default function Services() {
  const locale = useLocale();

  const services: ServiceItem[] = [
    {
      id: 'logo-design',
      titleAr: 'تصميم شعار',
      titleEn: 'Logo Design',
      image: '/images/design_logo.png'
    },
    {
      id: 'video-montage',
      titleAr: 'مونتاج فيديو',
      titleEn: 'Video Montage',
      image: '/images/video_motage.png'
    },
    {
      id: 'mobile-app',
      titleAr: 'تطبيق موبيل',
      titleEn: 'Mobile App',
      image: '/images/mobile_app.png'
    },
    {
      id: 'website',
      titleAr: 'موقع الكتروني',
      titleEn: 'Website',
      image: '/images/e-website.png'
    },
    {
      id: 'motion-graphic',
      titleAr: 'موشن جرافيك',
      titleEn: 'Motion Graphics',
      image: '/images/motion_graphic.png'
    },
    {
      id: 'seo',
      titleAr: 'تحسين محركات البحث',
      titleEn: 'SEO',
      image: '/images/seo.png'
    },
    {
      id: 'translation',
      titleAr: 'ترجمة',
      titleEn: 'Translation',
      image: '/images/translate.png'
    },
    {
      id: 'social-media',
      titleAr: 'ادارة حسابات التواصل الاجتماعي',
      titleEn: 'Social Media Management',
      image: '/images/social_media.png'
    }
  ];

  return (
    <div className={`w-full bg-gray-200 font-kufi p-section flex flex-col items-center ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <h1 className="text-center text-3xl mb-20">
        {locale === 'ar' ? 'خدمات شائعة' : 'Popular Services'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-container-space">
        {services.map((service) => (
          <div key={service.id} className="flex items-center bg-white p-4 shadow-sm">
            <div className={`flex-shrink-0 ${locale === 'ar' ? 'ml-4' : 'mr-4'}`}>
              <Image 
                src={service.image} 
                alt={locale === 'ar' ? service.titleAr : service.titleEn} 
                width={45} 
                height={45} 
              />
            </div>
            <h6 className={`text-md ${locale === 'ar' ? 'mr-4' : 'ml-4'}`}>
              {locale === 'ar' ? service.titleAr : service.titleEn}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}