import Image from "next/image";
import { useLocale } from 'next-intl';

interface Step {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export default function DoWork() {
  const locale = useLocale();

  const steps: Step[] = [
    {
      id: 'browse',
      titleAr: 'تصفح الخدمات',
      titleEn: 'Browse Services',
      descriptionAr: 'ابحث عن الخدمة التي تحتاجها باستخدام مربع البحث في الأعلى أو عبر التصنيفات',
      descriptionEn: 'Search for the service you need using the search box above or through categories'
    },
    {
      id: 'order',
      titleAr: 'اطلب الخدمة',
      titleEn: 'Order Service',
      descriptionAr: 'راجع وصف الخدمة وتقييمات المشترين ثم اطلبها لفتح تواصل مع البائع',
      descriptionEn: 'Review service description and buyer ratings, then order to start communication with the seller'
    },
    {
      id: 'receive',
      titleAr: 'استلم خدمتك',
      titleEn: 'Receive Your Service',
      descriptionAr: 'تواصل مع البائع مباشرة داخل موقع خمسات حتى استلام طلبك كاملاً',
      descriptionEn: 'Communicate directly with the seller within Khamsat until you receive your complete order'
    }
  ];

  return (
    <div className="xl:container mx-auto py-8 px-4 md:px-8 pb-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-kufi mb-4 pb-12">
          {locale === 'ar' ? 'نفذ أعمالك بسهولة وأمان' : 'Execute Your Work Easily and Securely'}
        </h2>
      </div>

      <div className={`flex flex-col md:flex-row items-center justify-center gap-8 lg:pr-8 ${locale === 'ar' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Text Section */}
        <div className={`w-full md:w-1/2 ${locale === 'ar' ? 'text-right' : 'text-left'} p-container-space`}>
          <ul className="space-y-6 text-lg">
            {steps.map((step) => (
              <li key={step.id}>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-xl">
                    <Image src="/images/checkMark_green.webp" alt="check mark" width={20} height={20} />
                  </span>
                  <span className='font-kufi text-xl'>
                    {locale === 'ar' ? step.titleAr : step.titleEn}
                  </span>
                </div>
                <p className={`text-gray-600 text-md mt-2 font-naskh ${locale === 'ar' ? 'ml-6 pr-7' : 'mr-6 pl-7'}`}>
                  {locale === 'ar' ? step.descriptionAr : step.descriptionEn}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RfXGMXHQvYk?si=XAxubt3K9IzuhTEo"
            title={locale === 'ar' ? 'مشغل فيديو يوتيوب' : 'YouTube video player'}
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