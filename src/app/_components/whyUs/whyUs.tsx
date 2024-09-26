import React from 'react';
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="bg-gray-100 p-section">
      <div className="container mx-auto text-center pb-16"> 
        <h2 className="text-3xl mb-12 font-kufi">لماذا خمسات خيارك الأفضل لإنجاز أعمالك</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* First Row */}
          <div className="flex flex-col items-center">
            <Image src="/images/category.png" alt="category" width={80} height={80} className="mb-6" /> 
            <h3 className="text-xl mb-2 font-kufi">أكثر من 350 تصنيف</h3>
            <p className="text-gray-500 font-naskh">+350 تصنيف تضم آلاف الخدمات في كافة المجالات</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/price.png" alt="price" width={80} height={80} className="mb-6" /> 
            <h3 className="text-xl mb-2 font-kufi">أسعار اقتصادية</h3>
            <p className="text-gray-500">خدمات ذات جودة عالية بأسعار تبدأ من 5 $ فقط</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/24.png" alt="customer" width={80} height={80} className="mb-6" /> 
            <h3 className="text-xl mb-2 font-kufi">خدمة عملاء على مدار الساعة</h3>
            <p className="text-gray-500 font-naskh">فريق محترف للرد على الاستفسارات وحل المشكلات في أسرع وقت</p>
          </div>

          {/* Second Row */}
          <div className="flex flex-col items-center">
            <Image src="/images/shield.png" alt="rights" width={80} height={80} className="mb-6" /> 
            <h3 className="text-xl mb-2 font-kufi">ضمان الحقوق</h3>
            <p className="text-gray-500 font-naskh">يضمن خمسات حقوقك المالية واستلامك العمل كاملاً وفق ما يعرضه البائع </p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/lamb.png" alt="lamb" width={80} height={80} className="mb-6" />
            <h3 className="text-xl mb-2 font-kufi">تعاملات آمنة وموثوقة</h3>
            <p className="text-gray-500 font-naskh">يوثق مقدمي الخدمات هوياتهم لتعاملات آمنة وجدية</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/images/freelancer.png" alt="freelancer" width={80} height={80} className="mb-6" /> 
            <h3 className="text-xl mb-2 font-kufi">مقدمو خدمات محترفون</h3>
            <p className="text-gray-500 font-naskh">ملفات شخصية تبرز خدمات البائعين وتقييماتهم السابقة</p>
          </div>
        </div>
      </div>
    </div>
  );
}
