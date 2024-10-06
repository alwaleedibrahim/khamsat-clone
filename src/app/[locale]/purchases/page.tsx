import React from "react";
// import ServicesCollection from "../_components/home/ServicesCollection";
// import ServiceCard from "../_components/reusable/service-card/ServiceCard";
import OrdersSidebar from "../_components/filter-sidebar/OrdersSidebar";

export default function page() {
  return (
    <div className="pt-20 container">
      <div className="flex flex-wrap p-section">
        <div className="hidden lg:flex lg:w-2/6">
          <OrdersSidebar />
        </div>
        <div className="w-full lg:w-4/6">
          {/* <ServicesCollection>
          </ServicesCollection> */}
        </div>
      </div>
    </div>
  );
}
