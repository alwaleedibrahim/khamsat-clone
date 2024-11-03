"use client"
import React from 'react';
import ButtonB from '../reusable/buttons/ButtonB';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import ServiceCard, { ServicesCard } from '../reusable/service-card/ServiceCard';
import { fetchAllServices } from '../../_lib/services';



const RecommendServices = () => {
    const [randomFourServices, setRandomFourServices] = useState<ServicesCard[]>([]);

    useEffect(() => {
        const getRandomServices = async () => {
            try {
                // Fetching all services
                const rawServices = await fetchAllServices();
                const services = rawServices.services;

                // Generate an array of unique random indices
                const randomIndices: number[] = [];
                while (randomIndices.length < 4) {
                    const randomIndex = Math.floor(Math.random() * services.length);
                    if (!randomIndices.includes(randomIndex)) {
                        randomIndices.push(randomIndex);
                    }
                }

                // Get four random services based on generated indices
                const selectedServices = randomIndices.map(index => services[index]);
                setRandomFourServices(selectedServices);
            } catch (error) {
                console.error('Failed to fetch services:', error);
            }
        };

        getRandomServices();
    }, []);
    const t = useTranslations("HomePage");

    return (
        <div className="p-section bg-white">
            <div className='xl:container mx-auto'>
                <div className="flex justify-between items-center px-4 mb-[30px]">
                    <div className="text-2xl text-style1 font-kufi">
                        <a href="/recommendations">{t('Recommend.recommendService')}</a>
                    </div>
                    <ButtonB text={t("Recommend.showMore")} extraStyle='text-[14px] px-[8px] py-[4px]' />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                    {randomFourServices.map((service, index) => (
                        <ServiceCard key={index} serviceData={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecommendServices;
