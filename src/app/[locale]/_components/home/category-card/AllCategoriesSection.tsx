import React from "react";
import CategoryCard from "./CategoryCard";
import { useLocale } from "next-intl";

interface ICategory {
  nameAr: string;
  nameEn: string;
  img: string;
}

const categories: ICategory[] = [
  {
    nameAr: "تصميم",
    nameEn: "Design",
    img: "design.jpg",
  },
  {
    nameAr: "كتابة وترجمة",
    nameEn: "Writing & Translation",
    img: "translate.jpg",
  },
  {
    nameAr: "تسويق رقمي",
    nameEn: "Digital Marketing",
    img: "social.jpg",
  },
  {
    nameAr: "برمجة وتطوير",
    nameEn: "Programming & Development",
    img: "development.jpg",
  },
  {
    nameAr: "فيديو وأنيميشن",
    nameEn: "Video & Animation",
    img: "video.jpg",
  },
  {
    nameAr: "هندسة وعمارة",
    nameEn: "Engineering & Architecture",
    img: "engineering.jpg",
  },
  {
    nameAr: "أعمال",
    nameEn: "Business",
    img: "bussiness.jpg",
  },
  {
    nameAr: "صوتيات",
    nameEn: "Audio",
    img: "audio.jpg",
  },
  {
    nameAr: "تعليم عن بعد",
    nameEn: "Remote Learning",
    img: "remote.jpg",
  },
  {
    nameAr: "بيانات",
    nameEn: "Data",
    img: "data.jpg",
  },
  {
    nameAr: "أسلوب حياة",
    nameEn: "Lifestyle",
    img: "lifestyle.jpg",
  },
  {
    nameAr: "ذكاء اصطناعي",
    nameEn: "Artificial Intelligence",
    img: "artificial_intelligence.jpg",
  },
];

export default function AllCategoriesSection() {
  const localActive = useLocale();
  return (
    <div className="p-section flex  flex-col items-center">
      <h2 className="font-kufi text-3xl py-8">{localActive==='ar'?"كافة الخدمات الاحترافية لتطوير أعمالك":"All professional services to develop your business"}</h2>
      <div className="xl:container py-5">
        <div className="flex flex-wrap lg:gap-6 justify-center">
          {categories.map((category, index) => (
            <div key={index} className="w-1/2 p-2 lg:p-0 lg:w-1/5">
              <CategoryCard img={`/images/categories/${category.img}`}>
                {localActive==='ar'?category.nameAr:category.nameEn}
              </CategoryCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
