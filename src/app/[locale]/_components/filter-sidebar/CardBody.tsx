import React from "react";

export default function CardBody({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="py-0">
      {children}
    </div>
  );
}
