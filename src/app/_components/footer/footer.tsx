import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
   <footer className="bg-white text-foreground py-10 font-kufi">

   <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* عمود "موقع خمسات" */}
          <div className="md:pr-4 md:mr-8">
            <h3 className="mb-4 text-lg font-light">موقع خمسات</h3>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="text-black hover:text-gray-800">حول خمسات</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">كيف يعمل الموقع</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">ضمان الحقوق</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">البيع على خمسات</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">مركز المساعدة</a></li>
            </ul>
          </div>
          {/* عمود "مدونة خمسات" */}
          <div>
            <h3 className="mb-4 text-lg font-light">مدونة خمسات</h3>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="text-black hover:text-gray-800">إليك تجربتي لأهم 10 إضافات</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">5 مشكلات إذا عالجتها ستنخفض السلات المتروكة</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">و كيف تبني خطة تسويقية تلبي احتياجات السوق</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">دليل الشركات الصغيرة</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">كيف تصمم موقعاً إلكترونياً جذاباً</a></li>
            </ul>
          </div>
          {/* عمود "مجتمع خمسات" */}
          <div>
            <h3 className="mb-4 text-lg font-light">مجتمع خمسات</h3>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="text-black hover:text-gray-800">نماذج أعمال قمت بتنفيذها</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">طلبات الخدمات غير الموجودة</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">تجارب وقصص المستخدمين</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">أمور عامة حول خمسات</a></li>
            </ul>
          </div>
          {/* عمود "تابعنا" */}
          <div className="text-center md:text-right">
            <h3 className="mb-4 text-lg font-light">تابعنا</h3>
            <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-blue-800 hover:opacity-75 ml-6">
                <Image src="/images/facebook_icon.png" alt="Facebook" width={40} height={40} />
              </a>
              <a href="#" className="text-blue-500 hover:opacity-75">
                <Image src="/images/twitter_icon.png" alt="Twitter" width={40} height={40} />
              </a>
           
            </div>

            <h3 className="mt-8 text-lg font-light">وسائل الدفع المتاحة</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Image src="/images/paypal_icon.png" alt="PayPal" width={40} height={50} />
              <Image src="/images/masterCard_icon.png" alt="MasterCard" width={40} height={40} />
              <Image src="/images/visa_icon.png" alt="Visa" width={40} height={40} />
            </div>
          </div>
        </div>
       
        <div className="bg-gray-100 py-6 font-koshi mt-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
            <ul className="flex flex-wrap space-x-8 text-sm font-light mb-4 md:mb-0 mr-12">
              <li className="ml-6"><a href="#" className="text-black hover:text-gray-800">شروط الاستخدام</a></li>
              <li className="ml-6"><a href="#" className="text-black hover:text-gray-800">بيان الخصوصية</a></li>
              <li className="ml-6"><a href="#" className="text-black hover:text-gray-800">المستويات</a></li>
              <li className="ml-6"><a href="#" className="text-black hover:text-gray-800">التسويق بالعمولة</a></li>
            </ul>
            <span className="text-sm text-gray-800 font-light ml-11">
              <a href="#" className="hover:underline">© 2024 Hsoub</a>. All rights reserved.
            </span>
          </div>
        </div>







        <div className="py-10 px-4 sm:px-8 md:px-12">
  <div className="flex justify-center items-center mb-8">
    <Image src="/images/hasob_logo.png" alt="hasobLogo" width={150} height={150} />
  </div>

  <div className="container mx-auto">
    {/* العناصر الستة */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-5 px-10">
      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">انا</a>
        <a href="#" className="text-[10px] text-gray-600 block">اداة واحدة لادارة مشاريعك و فريقك</a>
      </div>
      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">مستقل</a>
        <a href="#" className="text-[10px] text-gray-600 block">اكبر منصة عمل حر في العالم العربي</a>
      </div>
      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">خمسات</a>
        <a href="#" className="text-[10px] text-gray-600 block">سوق بيع و شراء الخدمات المصغرة</a>
      </div>
      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">بيكاليكا</a>
        <a href="#" className="text-[10px] text-gray-600 block">متجر القوالب و المنتجات الرقمية</a>
      </div>
      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">بعيد</a>
        <a href="#" className="text-[10px] text-gray-600 block">موقع توظيف الخبراء عن بعد</a>
      </div>
      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">زيتون</a>
        <a href="#" className="text-[10px] text-gray-600 block">برنامج خدمة العملاء الاكثر بساطة</a>
      </div>

      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">اكاديمية حسوب</a>
        <a href="#" className="text-[10px] text-gray-600 block">دورات احترافية لتطوير مستقبلك</a>
      </div>
      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">حسوب I/O</a>
        <a href="#" className="text-[10px] text-gray-600 block">مجتمع متخصص للنقاشات في مختلف المجالات</a>
      </div>
      <div className="min-w-[150px]">
        <a href="#" className="text-xs font-light block mb-1">مدونة مستقل</a>
        <a href="#" className="text-[10px] text-gray-600 block">مقالات متنوعة حول العمل الحر</a>
      </div>
    </div>
  </div>
</div>



      </footer>

    </>
  );
}
