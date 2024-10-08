import React from "react";
import Sidebar from "../_components/filter-sidebar/Sidebar";
import ServiceCard, { ServicesCard } from "../_components/reusable/service-card/ServiceCard";
import { fetchAllServices } from "../_lib/services";
import ServicesCollection from "../_components/home/ServicesCollection";

const Page = async() => {
  let servicesData: ServicesCard[] = []; 

  try {
      const rawServices = await fetchAllServices();        
      servicesData = rawServices.services
      
  } catch (error) {
      console.error('Failed to fetch services:', error);
  }

  return (
    <div className="pt-20 mx-auto w-full xl:container p-container-space">
      <div className="flex flex-wrap p-section">
        <div className="hidden lg:flex lg:w-[24%]">
          <Sidebar filters={{category: '', subcategory: ''}}/>
        </div>
        <div className="w-full lg:w-[76%]">
        <ServicesCollection>
        {servicesData.map((service, index) => (
                <ServiceCard key={index} serviceData={service} /> 
            ))}
          </ServicesCollection>
        </div>
      </div>
    </div>
  );
}


export default Page