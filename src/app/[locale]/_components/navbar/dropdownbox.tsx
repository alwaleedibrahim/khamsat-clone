import React from "react";

export default function DropDownBox({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white text-[#444] w-[360px] shadow-2xl border-2 border-gray-200">
      {children}
      <div className="font-bold border-t-2 border-gray-400 py-2">عرض الكل</div>
    </div>
  );
}

export function DropDownBoxContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <ul>{children}</ul>
    </div>
  );
}
