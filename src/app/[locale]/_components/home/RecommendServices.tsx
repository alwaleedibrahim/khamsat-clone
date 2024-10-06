import React from 'react';
import ButtonB from '../reusable/buttons/ButtonB';
import ServiceCard, { ServicesCard } from '../reusable/service-card/ServiceCard'; 
import { fetchAllServices } from '../../_lib/services';

const RecommendServices = async () => {
    let servicesData: ServicesCard[] = []; 

    try {
        const rawServices = await fetchAllServices();        
        servicesData = rawServices.services

    } catch (error) {
        console.error('Failed to fetch services:', error);
    }

    return (
        <div className="p-section bg-white">
            <div className='xl:container mx-auto'>
                <div className="flex justify-between items-center px-4 mb-[30px]">
                    <div className="text-2xl text-style1 font-kufi">
                        <a href="/recommendations">خدمات نرشحها لك</a>
                    </div>
                    <ButtonB text='عرض المزيد' extraStyle='text-[14px] px-[8px] py-[4px]' />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                    {servicesData.slice(0, 4).map((service, index) => (
                        <ServiceCard key={index} serviceData={service} /> 
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecommendServices;
