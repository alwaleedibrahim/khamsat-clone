import React from 'react'
import ServiceForm from '@/app/[locale]/_components/addservice/ServiceForm'

const page = () => {
    return (
        <div className="flex flex-col lg:bg-transparent bg-white pt-[100px]">
            <div className="flex lg:flex-row flex-col w-full justify-center">
                <div className="lg:w-[65%] w-[100%] lg:p-sm-screen">
                    <ServiceForm />
                </div>
                <div className="lg:w-[33%] lg:block hidden lg:p-sm-screen px-4">
                    <div>
                        <h3 className="mb-2 text-[18px] text-[#314459] font-kufi">أضف خدمتك وابدأ بتحقيق الأرباح</h3>
                        <div className="mt-3">
                            <p className="font-naskh text-[16px] text-[#545454] leading-loose">
                                يتيح لك خمسات إمكانية تحقيق الأرباح عبر إضافة خدمات تجيد تنفيذها
                                وإتاحتها للبيع للعملاء المهتمين. أدخل تفاصيل الخدمة بعناية ليقوم
                                فريق خمسات بمراجعتها ونشرها.
                            </p>
                        </div>
                        <br />

                        <h3 className="mb-2 text-[18px] mt-4 text-[#314459] font-kufi">نصائح لإضافة خدمة صحيحة</h3>

                        <div className="mt-3">
                            <h4 className="text-[16px] font-kufi mb-2 text-[#314459]">عنوان الخدمة</h4>
                            <p className="font-naskh text-[16px] text-[14px] text-[#545454] leading-loose" >
                                اختر عنوانًا مختصرًا وواضحًا يعكس ما ستقدمه بالتحديد في خدمتك، ليتمكن
                                المشترين من العثور عليها عند البحث بكلمات ذات صلة بمجال الخدمة.
                            </p>
                            <br />

                            <h4 className="text-[16px] font-kufi mb-2  text-[#314459]">وصف الخدمة</h4>
                            <p className="font-naskh text-[16px] text-[14px] text-[#545454] leading-loose" >
                                اكتب وصفًا مميزًا للخدمة بلغة سليمة خالية من الأخطاء، تشرح خلاله ما
                                سيحصل عليه العميل بالتفصيل عند شراء الخدمة.
                            </p>
                            <br />

                            <h4 className="text-[16px] font-kufi mb-2  text-[#314459]">معرض الخدمة</h4>
                            <p className="font-naskh text-[16px] text-[14px] text-[#545454] leading-loose" >
                                أضف صورة معبرة عن الخدمة بالإضافة إلى ثلاثة نماذج حصرية على الأقل
                                تعرّف المشتري من خلالها على أسلوبك في العمل ومهاراتك.
                            </p>
                            <br />

                            <h4 className="text-[16px] font-kufi mb-2  text-[#314459]">سعر الخدمة</h4>
                            <p className="font-naskh text-[16px] text-[14px] text-[#545454] leading-loose" >
                                احرص على تحديد سعر مناسب للخدمة بناء على حجم العمل والجهد المبذول مع
                                الأخذ بعين الاعتبار{' '}
                                <a
                                    href="https://khamsat.com/terms"
                                    className="text-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    عمولة الموقع
                                </a>
                                ، وحدد مدة تسليم مناسبة لإنجاز الخدمة بإتقان.
                            </p>
                        </div>

                        <br />

                        <h3 className="mt-4 text-[18px] text-[#314459] font-kufi">لماذا تُرفض الخدمة في خمسات؟</h3>
                        <div className="mt-3 text-[#314459] px-9">
                            <ul className="font-naskh">
                                <li className="my-2 text-[16px] list-disc">عنوان طويل أو غير واضح أو يدمج أكثر من خدمة معًا</li>
                                 <li className="my-2 text-[16px] list-disc">تجاهل تحديد حجم العمل الذي سيحصل عليه المشتري في وصف الخدمة</li>
                                 <li className="my-2 text-[16px] list-disc">صور أو تصاميم ذات جودة منخفضة أو ليست من إعداد البائع</li>
                                 <li className="my-2 text-[16px] list-disc">إرفاق أقل من ثلاثة نماذج لمعرض أعمال الخدمة</li>
                                 <li className="my-2 text-[16px] list-disc">
                                    خدمات مخالفة وفقًا{' '}
                                    <a
                                        href="https://khamsat.com/terms"
                                        className="text-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        لشروط الاستخدام
                                    </a>{' '}
                                    موقع خمسات
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
