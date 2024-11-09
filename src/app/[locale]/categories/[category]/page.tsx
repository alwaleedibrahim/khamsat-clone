"use client";
import React, { useEffect } from "react";
import ButtonB from "@/app/[locale]/_components/reusable/buttons/ButtonB";
import Image from "next/image";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { AppDispatch, RootState } from "@/app/[locale]/_lib/redux/store";
import {
  getCategory,
  getSubCategory,
  selectCategory,
} from "@/app/[locale]/_lib/redux/slice/categorySlice";
import ICategory from "@/app/[locale]/_models/category";
import { useLocale, useTranslations } from "next-intl";
import ISubCategory from "@/app/[locale]/_models/subcategory";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

export default function Page({
  params: { category },
}: Readonly<{ params: { category: string } }>) {
  const localActive: string = useLocale();
  const t = useTranslations("CategoryPage");
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(selectCategory(decodeURIComponent(category)));
    dispatch(getCategory());
    dispatch(getSubCategory(category));
  }, [category, dispatch]);
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const categories = useSelector((state) => state.category.categories);
  const selectedCategory: ICategory = categories.find(
    (cat: ICategory) => cat.name.en == decodeURIComponent(category)
  );
  // const selectedCategory : ICategory = categories[0]
  const subcategories: ISubCategory[] = useSelector(
    (state) => state.category.subcategories
  );
  return (
    <div className="pt-20 mx-auto w-full xl:container">
      <div className="p-section bg-white w-full flex flex-col items-center">
        <h1 className="text-4xl pb-6 font-kufi">
          {localActive == "ar"
            ? selectedCategory?.name["ar"]
            : selectedCategory?.name["en"]}
        </h1>
        <p className="text-base font-naskh">
          {localActive == "ar"
            ? selectedCategory?.description?.ar
            : selectedCategory?.description?.en}
        </p>
        <ButtonB
          text={t("HowItWorks")}
          icon={<FaPlayCircle />}
          extraStyle="text-base px-3 py-2 my-8"
        />
      </div>

      <div className="w-full bg-[#f1f1f1] font-kufi p-section flex flex-col items-center">
        <h1 className="text-center text-3xl mb-20">
          {localActive=='ar'?`${t("categories")} ${selectedCategory?.name["ar"]} ${t("common")}`
          : `${t('common')} ${selectedCategory?.name["en"]} ${t("categories")}`}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-container-space">
          {/* First row */}
          {subcategories?.map((subcat, index) => (
            <Link
              key={index}
              href={`/${localActive}/categories/${category}/${subcat.title.en}`}
            >
              <div className="flex items-center bg-white p-4 shadow-sm">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src="/images/motion_graphic.png"
                    alt="Design Logo"
                    width={45}
                    height={45}
                  />
                </div>
                <h6 className="text-md mr-4">
                  {localActive == "ar" ? subcat.title.ar : subcat.title.en}
                </h6>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full bg-white font-kufi p-section flex flex-col items-center mb-20">
        <h1 className="text-center text-3xl mb-20">
        {localActive=='ar'?`${t("browse")} ${t("services")} ${selectedCategory?.name["ar"]}`
          : `${t('browse')} ${selectedCategory?.name["en"]} ${t("services")}`}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 p-container-space">
          {subcategories?.map((subcat, index) => (
            <div key={index}>
              <h2 className="text-xl my-7">
                {localActive == "ar" ? subcat.title.ar : subcat.title.en}
              </h2>
              <div>
                {subcat.subcategories?.map((nestedsubcat, index) => (
                  <Link
                    key={index}
                    href={`/${localActive}/categories/${category}/${nestedsubcat.title.en}`}
                  >
                    <h3 className="text-lg font-naskh my-2">
                      {localActive == "ar"
                        ? nestedsubcat?.title.ar
                        : nestedsubcat?.title.en}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
