import React from 'react';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <div className="w-full bg-gray-200 font-kufi p-section flex flex-col items-center">
        <h1 className="text-center text-3xl mb-20">خدمات شائعة</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* First row */}
          <div className="flex items-center bg-white p-4 shadow-sm">
            <div className="flex-shrink-0 mr-4">
              <Image src="/images/design_logo.png" alt="Design Logo" width={45} height={45} />
            </div>
            <h6 className="text-md mr-4">تصميم شعار</h6>
          </div>
          <div className="flex items-center bg-white p-4 shadow-sm">
            <div className="flex-shrink-0 mr-4">
              <Image src="/images/video_motage.png" alt="Video Montage" width={45} height={45} />
            </div>
            <h6 className="text-md mr-4">مونتاج فيديو</h6>
          </div>
          <div className="flex items-center bg-white p-4 shadow-sm">
            <div className="flex-shrink-0 mr-4">
              <Image src="/images/mobile_app.png" alt="Mobile App" width={45} height={45} />
            </div>
            <h6 className="text-md mr-4">تطبيق موبيل</h6>
          </div>
          <div className="flex items-center bg-white p-4 shadow-sm">
            <div className="flex-shrink-0 mr-4">
              <Image src="/images/e-website.png" alt="Website" width={45} height={45} />
            </div>
            <h6 className="text-md mr-4">موقع الكتروني</h6>
          </div>
          {/* Second row */}
          <div className="flex items-center bg-white p-4 shadow-sm">
            <div className="flex-shrink-0 mr-4">
              <Image src="/images/motion_graphic.png" alt="Motion Graphic" width={45} height={45} />
            </div>
            <h6 className="text-md mr-4">موشن جرافيك</h6>
          </div>
          <div className="flex items-center bg-white p-4 shadow-sm">
            <div className="flex-shrink-0 mr-4">
              <Image src="/images/seo.png" alt="SEO" width={45} height={45} />
            </div>
            <h6 className="text-md mr-4">تحسين محركات البحث</h6>
          </div>
          <div className="flex items-center bg-white p-4 shadow-sm">
            <div className="flex-shrink-0 mr-4">
              <Image src="/images/translate.png" alt="Social Media" width={45} height={45} />
            </div>
            <h6 className="text-md mr-4">ترجمة</h6>
          </div>
          <div className="flex items-center bg-white p-1 shadow-sm">
            <div className="flex-shrink-0 mr-4">
              <Image src="/images/social_media.png" alt="Another Service" width={45} height={50} />
            </div>
           <h6 className='text-md mr-4'>ادارة حسابات التواصل الاجتماعي</h6>
          </div>
        </div>
      </div>
    </>
  );
}
