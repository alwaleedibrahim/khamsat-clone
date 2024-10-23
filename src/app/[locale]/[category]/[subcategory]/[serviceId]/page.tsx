import Link from "next/link";
import Image from "next/image";
import AdditionalServices from "@/app/[locale]/_components/single-service/AdditionalServices";
import GetService from "@/app/[locale]/_components/single-service/GetService";
import ServicesRecommended from "@/app/[locale]/_components/single-service/ServicesRecommended";
import ServiceKeywords from "@/app/[locale]/_components/single-service/ServiceKeywords";
import Reviews from "@/app/[locale]/_components/single-service/Reviews";
import ServiceSocialMedia from "@/app/[locale]/_components/single-service/ServiceSocialMedia";
import { fetchServiceById } from "@/app/[locale]/_lib/services";
import ServiceData from "@/app/[locale]/_components/single-service/ServiceData";
import ServiceInfo from "@/app/[locale]/_components/single-service/ServiceInfo";
import SellerCard from "@/app/[locale]/_components/single-service/SellerCard";
import { GetServerSidePropsContext } from "next";
import { fetchServiceReviews } from "@/app/[locale]/_lib/reviews";
import { notFound } from "next/navigation";

const page = async(context: GetServerSidePropsContext) => {
    const { serviceId } = context.params! as {
        serviceId: string
    }
    let serviceData;
    let reviewsData;
    // ========================================== //
    // service data
    try{
        const response = await fetchServiceById(serviceId);
        serviceData = response.service;
        const responseReviews = await fetchServiceReviews(serviceId)
        reviewsData = responseReviews.serviceReviews;     
    }catch(err){
        console.log(err);
    }

    if (!serviceData) notFound()
    return (
        <div className="flex flex-col lg:bg-transparent bg-white pt-[100px]">
            <div className="flex lg:flex-row flex-col w-full justify-center">
                <div className="lg:w-[68%] w-[100%] lg:p-sm-screen">
                    <ServiceData images={serviceData.images} description={serviceData.description} />
                </div>
                <div className="lg:w-[32%] w-[100%] lg:p-sm-screen">
                    <ServiceInfo data={serviceData.serviceCard} deliveryTime={serviceData.deliveryTime} price={serviceData.price} />
                    {/* {serviceData.userId.profilePicture} */}
                    <SellerCard profilePicture='/images/services/defaultuser.jfif' username={serviceData.userId?.username}/>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col w-full justify-center">
                <div className="lg:w-[68%] w-[100%]">

                    <div className="w-full lg:p-sm-screen my-[20px]">
                        <AdditionalServices serviceId={serviceId} />
                    </div>

                    <div className="w-full lg:p-sm-screen my-[10px]">
                        <GetService />
                    </div>

                    <div className="w-full lg:p-sm-screen my-[10px]">
                        <ServicesRecommended />
                    </div>

                    {
                        (
                            reviewsData.length > 0) ? (
                            <div className="w-full lg:p-sm-screen my-[10px]">
                                <Reviews reviews={reviewsData} />
                            </div>
                        ) : null
                    }


                    <div className="w-full lg:p-sm-screen my-[20px]">
                        <ServiceKeywords />
                    </div>
                </div>

                <div className="lg:w-[32%] w-[100%] lg:-mt-[140px]">
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