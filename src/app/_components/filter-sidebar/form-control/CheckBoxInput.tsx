import React from "react";

export default function CheckboxInput({
    children,
    name
  }: Readonly<{ children: React.ReactNode, name:string }>) {
  
  return (
    <label htmlFor={`checkbox`} className="flex">
      <input type="checkbox" name={name} id={`checkbox`} className="checked:bg-primary me-3" />
      {children}
    </label>
  );
}
