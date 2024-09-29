import React from "react";
import CategoryCard from "./CategoryCard";

interface ICategory {
  name: string;
  img: string;
}

const categories: ICategory[] = [
  {
    name: "تصميم",
    img: "design.jpg",
  },
  {
    name: "كتابة وترجمة",
    img: "translate.jpg",
  },
  {
    name: "تسويق رقمي",
    img: "social.jpg",
  },
  {
    name: "برمجة وتطوير",
    img: "development.jpg",
  },
  {
    name: "فيديو وأنيميشن",
    img: "video.jpg",
  },
  {
    name: "هندسة وعمارة",
    img: "engineering.jpg",
  },
  {
    name: "أعمال",
    img: "bussiness.jpg",
  },
  {
    name: "صوتيات",
    img: "audio.jpg",
  },
  {
    name: "تعليم عن بعد",
    img: "remote.jpg",
  },
  {
    name: "بيانات",
    img: "data.jpg",
  },
  {
    name: "أسلوب حياة",
    img: "lifestyle.jpg",
  },
  {
    name: "ذكاء اصطناعي",
    img: "artificial_intelligence.jpg",
  },
];

export default function AllCategoriesSection() {
  return (
    <div className="py-10 flex  flex-col items-center">
      <h2 className="font-kufi text-3xl py-8">كافة الخدمات الاحترافية لتطوير أعمالك</h2>
      <div className="container py-5">
        <div className="flex flex-wrap gap-6 justify-center">
          {categories.map((category, index) => (
            <div key={index} className="w-1/3 lg:w-1/5">
              <CategoryCard img={`/images/categories/${category.img}`}>
                {category.name}
              </CategoryCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
