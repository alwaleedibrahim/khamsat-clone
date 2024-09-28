import React from "react";

export default function ListItem({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mb-3 flex justify-between ">
      {children}
    </div>
  );
}