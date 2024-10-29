import React from "react";
import { useLocale } from 'next-intl';

interface Feature {
  id: string;
  href: string;
  titleAr: string;
  titleEn: string;
}

const SnippetSection = () => {
  const locale = useLocale();

  const features: Feature[] = [
    {
      id: 'digital-transformation',
      href: "/move-offline-business-to-online",
      titleAr: "حوّل أعمالك للعالم الرقمي",
      titleEn: "Transform Your Business to Digital"
    },
    {
      id: 'start-business',
      href: "/start-business",
      titleAr: "ابدأ مشروعك التجاري",
      titleEn: "Start Your Business"
    },
    {
      id: 'ecommerce',
      href: "/start-ecommerce",
      titleAr: "أنشئ متجرك الإلكتروني",
      titleEn: "Create Your Online Store"
    },
    {
      id: 'website',
      href: "/create-website",
      titleAr: "أطلق موقعك الإلكتروني",
      titleEn: "Launch Your Website"
    },
    {
      id: 'digital-marketing',
      href: "/online-marketing-solutions",
      titleAr: "حلول التسويق الرقمي",
      titleEn: "Digital Marketing Solutions"
    },
    {
      id: 'online-course',
      href: "/create-online-course",
      titleAr: "أنشئ دورتك التدريبية",
      titleEn: "Create Your Online Course"
    },
    {
      id: 'self-publish',
      href: "/self-publish-book",
      titleAr: "انشر كتابك عبر الإنترنت",
      titleEn: "Self-Publish Your Book Online"
    }
  ];

  return (
    <div className="p-section">
      <div className="mx-auto px-4">
        <div className="text-center mb-[50px]">
          <h2 className="text-[28px] text-style1 font-kufi">
            {locale === 'ar' 
              ? 'حلول متكاملة لتطوير أعمالك'
              : 'Integrated Solutions for Your Business Development'
            }
          </h2>
        </div>
        <ul className={`flex flex-wrap items-center justify-center gap-[5px] ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
          {features.map((feature) => (
            <li 
              key={feature.id} 
              className="bg-white p-[15px] border border-[#eee]"
            >
              <a 
                href={feature.href} 
                className="text-center block"
              >
                <h6 className="font-kufi text-style1 text-[14px]">
                  {locale === 'ar' ? feature.titleAr : feature.titleEn}
                </h6>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SnippetSection;