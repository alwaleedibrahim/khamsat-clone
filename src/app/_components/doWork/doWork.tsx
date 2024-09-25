import React from 'react';
import Image from "next/image";

export default function DoWork() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8 pb-32"> 
     
      <div className="text-center mb-8">
        <h2 className="text-3xl font-kufi mb-4 pb-12">نفذ أعمالك بسهولة وأمان</h2> 
      </div>

      {/* Main Content: Text & Video */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 pr-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-right">
          <ul className="space-y-6 text-lg"> 
            <li>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">
                  <Image src="/images/checkMark_green.webp" alt="check mark" width={20} height={20} />
                </span>
                <span className='font-kufi text-xl'>تصفح الخدمات</span>
              </div>
              <p className="text-gray-600 text-md ml-6 mt-2 pr-7 font-naskh">ابحث عن الخدمة التي تحتاجها باستخدام مربع البحث في الأعلى أو عبر التصنيفات</p>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">
                  <Image src="/images/checkMark_green.webp" alt="check mark" width={20} height={20} />
                </span>
                <span className='font-kufi text-xl'>اطلب الخدمة</span>
              </div>
              <p className="text-gray-600 text-md ml-6 mt-2 pr-7 font-naskh">راجع وصف الخدمة وتقييمات المشترين ثم اطلبها لفتح تواصل مع البائع</p>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">
                  <Image src="/images/checkMark_green.webp" alt="check mark" width={20} height={20} />
                </span>
                <span className='font-kufi text-xl'>استلم خدمتك</span>
              </div>
              <p className="text-gray-600 text-md ml-6 mt-2 pr-7 font-naskh">تواصل مع البائع مباشرة داخل موقع خمسات حتى استلام طلبك كاملاً</p>
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RfXGMXHQvYk?si=XAxubt3K9IzuhTEo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
