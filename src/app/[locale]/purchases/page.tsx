import React from "react";
// import ServicesCollection from "../_components/home/ServicesCollection";
// import ServiceCard from "../_components/reusable/service-card/ServiceCard";
import OrdersSidebar from "../_components/filter-sidebar/OrdersSidebar";

export default function page() {
  const purchases = undefined // !!! fill this data dynamically
  return (
    <div className="pt-20 container">
      <div className="flex flex-wrap p-section">
        <div className="hidden lg:flex lg:w-2/6">
          <OrdersSidebar />
        </div>
        <div className="w-full lg:w-4/6">
        {!purchases && <>
        <div className="bg-white w-full p-5">
          <p className='font-naskh text-lg text-center'>لا يوجد مشتريات</p>
        </div>
        </>}
          {/* <ServicesCollection>
          </ServicesCollection> */}
        </div>
      </div>
    </div>
  );
}
