import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ICategoryCardProps {
  img: string;
  url: string;
  children: React.ReactNode;
}
const CategoryCard: React.FC<ICategoryCardProps> = ({ children, img, url }) => {
  return (
    <div className="flex flex-col relative items-center justify-center h-full overflow-hidden bg-black ">
      <h1 className="absolute text-2xl z-10  text-white font-kufi" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
      <Link href={url}>{children}</Link>
      </h1>
      <div className=" h-full opacity-70">
        <Link href={url}>
          <Image
            src={img}
            className="relative  h-full"
            alt="Category image"
            width={400}
            height={400}
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
