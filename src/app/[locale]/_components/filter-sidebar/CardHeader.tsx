import React from "react";

export default function CardHeader({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="font-kufi text-base mb-4 flex justify-between">
      {children}
    </div>
  );
}
