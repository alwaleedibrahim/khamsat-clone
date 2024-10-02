import React from "react";

export default function FilterCard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mb-[30px] flex flex-col">
      {children}
    </div>
  );
}