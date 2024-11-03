"use client"
import React from "react";
import OrdersSidebar from "../_components/filter-sidebar/OrdersSidebar";

import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { RootState } from "../_lib/redux/store";
import OrderList from "../_components/orders/OrderList";

export default function Page() {
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const token : string = useSelector((state)=> state.auth.token) || ''
  return (
    <div className="pt-20 container">
      <div className="flex flex-wrap p-section">
        <div className="hidden lg:flex lg:w-2/6">
          <OrdersSidebar />
        </div>
        <div className="w-full lg:w-4/6 pe-20">
         <OrderList token={token}/>
        </div>
      </div>
    </div>
  );
}