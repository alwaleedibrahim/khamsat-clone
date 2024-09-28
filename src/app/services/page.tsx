import React from "react";
import Sidebar from "../_components/filter-sidebar/Sidebar";
import RecommendServices from "../_components/home/RecommendServices";

export default function page() {
  return (
    <div className="pt-20 container">
      <div className="flex flex-wrap">
        <div className="hidden lg:flex lg:w-2/6">
          <Sidebar />
        </div>
        <div className="w-full lg:w-4/6">
          <RecommendServices />
        </div>
      </div>
    </div>
  );
}
