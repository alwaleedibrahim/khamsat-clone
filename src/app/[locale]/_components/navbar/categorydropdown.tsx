"use client";

import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../_lib/redux/store";
import { getCategory } from "../../_lib/redux/slice/categorySlice";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import ICategory from "../../_models/category";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Categorydropdown() {
  const dispatch = useDispatch<AppDispatch>();
  const localActive = useLocale();

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const categories = useSelector((state) => state.category.categories);
  return (
    <div className="p-8 shadow-2xl border-2 border-gray-200 flex flex-wrap bg-white text-[#444] w-full">
      {categories.map((category: ICategory, index: number) => (
        <div key={index} className=" basis-1/4 my-3 px-4">
          <h1 className="mb-5 border-b-2 text-xl py-2">
            <Link href={`/${localActive}/categories/${category.name.en}/`}>
              {localActive=='ar'?category.name.ar : category.name.en}
            </Link>
          </h1>
          {category.subcategories?.map((subcategory, index2) => (
            <div key={index2} className="my-3 text-base">
              <Link
                href={`/${localActive}/categories/${category.name.en}/${subcategory.title.en}`}
              >
                {localActive=='ar'? subcategory.title.ar : subcategory.title.en}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
