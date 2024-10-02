import React from "react";

export default function SubList({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ul className="w-full font-kufi text-sm list-none border-r-secondary border-r-[1px] ps-5">
      {children}
    </ul>
  );
}