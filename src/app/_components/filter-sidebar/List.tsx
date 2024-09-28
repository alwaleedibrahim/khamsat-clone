import React from "react";

export default function List({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ul className="w-full font-kufi text-sm list-none">
      {children}
    </ul>
  );
}