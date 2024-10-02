import Link from "next/link";
import ServiceData from "../_components/single-service/ServiceData";
import ServiceInfo from "../_components/single-service/ServiceInfo";
import SellerCard from "../_components/single-service/SellerCard";
import AdditionalServices from "../_components/single-service/AdditionalServices";
import GetService from "../_components/single-service/GetService";
import ServicesRecommended from "../_components/single-service/ServicesRecommended";
import ServiceKeywords from "../_components/single-service/ServiceKeywords";
import Reviews from "../_components/single-service/Reviews";
import Image from "next/image";
import ServiceSocialMedia from "../_components/single-service/ServiceSocialMedia";

const page = () => {
    // /////////////////////////////////////// Static Service Data /////////////////////////////// //
    // service info
    const serviceInfo = {
        ratings: {
            stars: 4.5,
            count: 30,
        },
        responseTime: '6 ساعات',
        buyers: 32,
        activeOrders: 1,
        startingPrice: '$5.00',
        deliveryTime: 'شهر',
    };

    // ========================================== //
    // serviceData
    const serviceData = {
        images: [
            '/images/category.png',
            '/images/category.png',
            '/images/category.png',
            '/images/category.png',
        ],
        description: `يمكنني مساعدتك في تنفيذ تطبيق IOS الخاص بك باستخدام اللغة الأساسية لشركة Apple
اللغات المدعومة : Swift & Objective-C

الخدمة المقدمة :
- تنفيذ تطبيق مكون من واجهة واحدة بإستخدام لغة البرمجة Swift - اللغة الرسمية من شركة Apple
- تصميم واجهة تطبيق واحدة بإستخدام SwiftUI & UIKit
- يمكنك إختيار المزيد من الإضافات الموجودة في الخدمة`,
    };

    // ========================================== //
    // upgardes
    const serviceUpgradesData = [
        {
            id: 'upgrade-2340086',
            title: 'تصميم واجهات التطبيق بإستخدام SwiftUI',
            price: 25.00,
            duration: '7 أيام',
            description: 'مقابل 25.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 7 أيام إضافية.',
        },
        {
            id: 'upgrade-2125384',
            title: 'تسليم السورس كود كاملا',
            price: 100.00,
            duration: '30 يوم',
            description: 'مقابل 100.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 30 يوم إضافي.',
        },
        {
            id: 'upgrade-2096277',
            title: 'ربط التطبيق بقاعدة بيانات Firebase',
            price: 200.00,
            duration: 'يوم واحد',
            description: 'مقابل 200.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ يوم إضافي.',
        },
        {
            id: 'upgrade-2096278',
            title: 'رفع التطبيق لمتجر App store',
            price: 200.00,
            duration: '21 يوم',
            description: 'مقابل 200.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 21 يوم إضافي.',
        },
        {
            id: 'upgrade-2096279',
            title: 'ربط التطبيق مع Firebase',
            price: 200.00,
            duration: '5 أيام',
            description: 'مقابل 200.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 5 أيام إضافية.',
        },
    ]

    // ========================================== //
    // review data
    const reviewData = [
        {
            clientRating: {
                qualityOfService: 4,
                communication: 4.2,
                deliveryPunctuality: 4.7,
            },
            clientReview: {
                userName: ".Mohammed A",
                userReply: "انصح الجميع بالتعامل معه الاخ خالد يسهل عليك تصميم مشروعك وتشوف الشغل بعينك مرحلة بمرحلة ، تسلم ايدك على الشغل الطيب",
                userReplyTime: ' منذ 20 يوم و18 ساعة',
                userLink: '/user/.Mohammed_A',
                userType: ' المشتري'
            },
            userReply: [
                {
                    userImage: "/images/services/97fe064c7ef498b3fc5183f1c59626fa.png",
                    userName: ".Khaled M",
                    userReply: "تشرفت جدا بالعمل معك أستاذ محمد و أشكرك على ثقتك الغالية و إن شاء الله دائما العمل يكون عند حسن ظنك",
                    userReplyTime: ' منذ 20 يوم و18 ساعة',
                    userLink: '/user/khaled_m2',
                    userType: 'البائع'
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col lg:bg-transparent bg-white pt-[100px]">
            <div className="flex lg:flex-row flex-col w-full justify-center">
                <div className="lg:w-[68%] w-[100%] lg:p-sm-screen">
                    <ServiceData images={serviceData.images} description={serviceData.description} />
                </div>
                <div className="lg:w-[32%] w-[100%] lg:p-sm-screen">
                    <ServiceInfo data={serviceInfo} />
                    <SellerCard />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col w-full justify-center">
                <div className="lg:w-[68%] w-[100%]">

                    <div className="w-full lg:p-sm-screen my-[20px]">
                        <AdditionalServices upgrades={serviceUpgradesData} />
                    </div>

                    <div className="w-full lg:p-sm-screen my-[10px]">
                        <GetService />
                    </div>

                    <div className="w-full lg:p-sm-screen my-[10px]">
                        <ServicesRecommended />
                    </div>

                    {
                        (
                            reviewData.length > 0) ? (
                            <div className="w-full lg:p-sm-screen my-[10px]">
                                <Reviews reviews={reviewData} />
                            </div>
                        ) : null
                    }


                    <div className="w-full lg:p-sm-screen my-[20px]">
                        <ServiceKeywords />
                    </div>
                </div>

                <div className="lg:w-[32%] w-[100%] lg:-mt-[320px]">
                    <div className="w-full lg:p-sm-screen">
                        <Link href="/guarantee">
                            <Image
                                id="guarantee_img"
                                src="/images/services/ads.png"
                                alt="Guarantee Image"
                                layout="responsive"
                                width={1000}
                                height={500}
                                className="w-full"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="w-full mt-[20px] lg:p-sm-screen">
                        <ServiceSocialMedia />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page