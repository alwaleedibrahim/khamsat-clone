import React from 'react'
import ServiceCard, { ServicesCard } from '../reusable/service-card/ServiceCard'
import { fetchAllServices } from '../../_lib/services';

const ServicesRecommended = async () => {
    let servicesData: ServicesCard[] = [];
    let errorMessage: string | null = null;

    try {
        const rawServices = await fetchAllServices();
        servicesData = rawServices.services;
    } catch (error) {
        console.error('Failed to fetch services:', error);
        errorMessage = 'خدمات مقترحة غير متوفرة في الوقت الحالي.';
    }

    return (
        <div className="mx-auto bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                خدمات مقترحة
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-container-space">
            {errorMessage ? (
                <div className="p-4 text-center text-red-500">
                    {errorMessage}
                </div>
            ) : servicesData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-container-space">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} serviceData={service} />
                    ))}
                </div>
            ) : (
                <div className="p-4 text-center text-gray-500">
                    لا توجد خدمات متاحة حاليا.
                </div>
            )}
            </div>
        </div>
    )
}

export default ServicesRecommended