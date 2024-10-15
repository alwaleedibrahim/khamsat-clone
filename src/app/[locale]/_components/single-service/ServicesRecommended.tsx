import React from 'react'
import ServiceCard, { ServicesCard } from '../reusable/service-card/ServiceCard'
import { fetchAllServices } from '../../_lib/services';

const ServicesRecommended = async () => {
    let servicesData: ServicesCard[] = [];

    try {
        const rawServices = await fetchAllServices();
        servicesData = rawServices.services;
    } catch (error) {
        console.error('Failed to fetch services:', error);
    }

    return (
        <div className="mx-auto bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                خدمات مقترحة
            </h5>

                {servicesData.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-container-space">
                        {servicesData.slice(0, 6).map((service, index) => (
                            <ServiceCard key={index} serviceData={service} />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default ServicesRecommended