import React from 'react';
import Image from "next/image";
import { useLocale } from 'next-intl';

interface Feature {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

export default function WhyUs() {
  const locale = useLocale();

  const features: Feature[] = [
    {
      id: 'categories',
      titleAr: 'أكثر من 350 تصنيف',
      titleEn: 'More than 350 Categories',
      descriptionAr: '+350 تصنيف تضم آلاف الخدمات في كافة المجالات',
      descriptionEn: '+350 categories including thousands of services in all fields',
      image: '/images/category.png'
    },
    {
      id: 'prices',
      titleAr: 'أسعار اقتصادية',
      titleEn: 'Economic Prices',
      descriptionAr: 'خدمات ذات جودة عالية بأسعار تبدأ من 5 $ فقط',
      descriptionEn: 'High-quality services starting from just $5',
      image: '/images/price.png'
    },
    {
      id: 'support',
      titleAr: 'خدمة عملاء على مدار الساعة',
      titleEn: '24/7 Customer Service',
      descriptionAr: 'فريق محترف للرد على الاستفسارات وحل المشكلات في أسرع وقت',
      descriptionEn: 'Professional team to answer inquiries and solve problems quickly',
      image: '/images/24.png'
    },
    {
      id: 'rights',
      titleAr: 'ضمان الحقوق',
      titleEn: 'Rights Guarantee',
      descriptionAr: 'يضمن خمسات حقوقك المالية واستلامك العمل كاملاً وفق ما يعرضه البائع',
      descriptionEn: 'Khamsat guarantees your financial rights and complete work delivery as offered by the seller',
      image: '/images/shield.png'
    },
    {
      id: 'security',
      titleAr: 'تعاملات آمنة وموثوقة',
      titleEn: 'Secure and Reliable Transactions',
      descriptionAr: 'يوثق مقدمي الخدمات هوياتهم لتعاملات آمنة وجدية',
      descriptionEn: 'Service providers verify their identities for secure and serious transactions',
      image: '/images/lamb.png'
    },
    {
      id: 'professionals',
      titleAr: 'مقدمو خدمات محترفون',
      titleEn: 'Professional Service Providers',
      descriptionAr: 'ملفات شخصية تبرز خدمات البائعين وتقييماتهم السابقة',
      descriptionEn: 'Profiles highlighting sellers services and their previous ratings',
      image: '/images/freelancer.png'
    }
  ];

  return (
    <div className="bg-gray-100 p-section">
      <div className="container mx-auto text-center pb-16">
        <h2 className="text-3xl mb-12 font-kufi">
          {locale === 'ar' 
            ? 'لماذا خمسات خيارك الأفضل لإنجاز أعمالك'
            : 'Why Khamsat is Your Best Choice'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center">
              <Image 
                src={feature.image} 
                alt={locale === 'ar' ? feature.titleAr : feature.titleEn} 
                width={80} 
                height={80} 
                className="mb-6"
              />
              <h3 className="text-xl mb-2 font-kufi">
                {locale === 'ar' ? feature.titleAr : feature.titleEn}
              </h3>
              <p className={`text-gray-500 ${locale === 'ar' ? 'font-naskh' : ''}`}>
                {locale === 'ar' ? feature.descriptionAr : feature.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}