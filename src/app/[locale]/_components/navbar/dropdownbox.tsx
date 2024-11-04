import React from "react";

export default function DropDownBox({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white text-[#444] w-[360px] shadow-2xl border-2 border-gray-200">
      {children}
      <div className="font-bold border-t-2 border-gray-400 py-2">Show All</div>
    </div>
  );
}

export function DropDownBoxContent({
  children,
  extraStyle
}: Readonly<{ children: React.ReactNode,extraStyle:string }>) {
  return (
    <div className={`flex items-center justify-center ${extraStyle}`}>
      <ul>{children}</ul>
    </div>
  );
}
