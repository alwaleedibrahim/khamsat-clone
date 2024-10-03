import Image from "next/image";
import React from "react";

interface ICategoryCardProps {
  img: string;
  children: React.ReactNode;
}
const CategoryCard: React.FC<ICategoryCardProps> = ({ children, img }) => {
  return (
    <div className="flex flex-col relative items-center justify-center h-full overflow-hidden bg-black ">
      <h1 className="absolute text-2xl z-10  text-white font-kufi" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        {children}
      </h1>
      <div className=" h-full opacity-70">
        <Image
          src={img}
          className="relative  h-full"
          alt="Category image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
