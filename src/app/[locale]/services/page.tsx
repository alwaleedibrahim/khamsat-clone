import React from "react";
import Sidebar from "../_components/filter-sidebar/Sidebar";
// import ServicesCollection from "../_components/home/ServicesCollection";
// import ServiceCard from "../_components/reusable/service-card/ServiceCard";
// import { fetchServices } from "../_lib/services";

export default function page() {
  // const data = fetchServices("query")
  
  return (
    <div className="pt-20 mx-auto w-full xl:container p-container-space">
      <div className="flex flex-wrap p-section">
        <div className="hidden lg:flex lg:w-[24%]">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[76%]">
          {/* <ServicesCollection>
          
          </ServicesCollection> */}
        </div>
      </div>
    </div>
  );
}
