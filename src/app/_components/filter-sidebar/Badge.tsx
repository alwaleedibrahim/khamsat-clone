import React from "react";

export default function Badge({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-secondary text-white min-w-9 text-center text-[10px] rounded-[7px] p-[5px] w-fit">
      {children}
    </div>
  );
}
