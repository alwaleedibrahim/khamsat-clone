"use client";
import React, { useEffect } from "react";
import FilterCard from "./FilterCard";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import SearchInput from "./form-control/SearchInput";
import List from "./List";
import ListItem from "./ListItem";
import SubList from "./SubList";
// import RatingInput from "./form-control/RatingInput";
// import { FaTimes } from "react-icons/fa";
// import CheckboxInput from "./form-control/CheckBoxInput";
import ICategory from "../../_models/category";
import ISubCategory from "../../_models/subcategory";
import { TypedUseSelectorHook, useDispatch, useSelector   as useReduxSelector} from "react-redux";
import {
  getCategory,
  getSubCategory,
  selectCategory,
  selectSubCategory,
} from "../../_lib/redux/slice/categorySlice";
import Link from "next/link";
import { AppDispatch, RootState } from "../../_lib/redux/store";
import { useLocale } from "next-intl";

export default function Sidebar({
  filters: { category, subcategory },
}: Readonly<{ filters: { category: string; subcategory: string } }>) {
  const dispatch = useDispatch<AppDispatch>();
  const localActive = useLocale()
  useEffect(() => {
    dispatch(selectCategory(decodeURIComponent(category)));
    dispatch(selectSubCategory(decodeURIComponent(subcategory)));
    dispatch(getCategory());
    dispatch(getSubCategory(category));
  },[category, dispatch, subcategory]);
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const categories = useSelector((state) => state.category.categories);
  const subcategories = useSelector((state) => state.category.subcategories);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const selectedSubCategory = useSelector(
    (state) => state.category.selectedSubCategory
  );

  return (
    <div className="mx-20">
      <FilterCard>
        <CardHeader>
          <span>بحث</span>
        </CardHeader>
        <CardBody>
          <SearchInput />
        </CardBody>
      </FilterCard>
      <FilterCard>
        <CardHeader>
          <span>الاقسام</span>
        </CardHeader>
        <CardBody>
          <List>
            {categories.map((cat: ICategory) => {
              return (
                <>
                  {cat.name.en == selectedCategory ? (
                    <>
                      <Link
                        href={`/${localActive}/categories/${cat.name.en}/${cat.name.en}`}
                        className="text-primary hover:text-primary"
                        key={cat._id}
                      >
                        <ListItem key={cat._id}>{cat.name.ar}</ListItem>
                      </Link>
                      <ListItem key={cat._id}>
                        <SubList>
                          {subcategories?.map((subcat: ISubCategory) => {
                            return (
                              <>
                                <Link
                                  key={subcat._id}
                                  href={`/${localActive}/categories/${cat.name.en}/${subcat.title.en}`}
                                  className={`${
                                    subcat.title.en == selectedSubCategory
                                      ? `text-primary`
                                      : ``
                                  } hover:text-primary`}
                                >
                                  <ListItem key={subcat._id}>
                                    {subcat.title.ar}
                                  </ListItem>
                                </Link>
                                <ListItem>
                                  <SubList>
                                    {subcat.subcategories.map(
                                      (nestedSubcategory: ISubCategory) => {
                                        return (
                                          <Link
                                            key={nestedSubcategory._id}
                                            href={`/${localActive}/categories/${cat.name.en}/${nestedSubcategory.title.en}`}
                                            className={`${
                                                nestedSubcategory.title.en == selectedSubCategory
                                                ? `text-primary`
                                                : ``
                                            } hover:text-primary`}
                                          >
                                            <ListItem key={nestedSubcategory._id}>
                                              {nestedSubcategory.title.ar}
                                            </ListItem>
                                          </Link>
                                        );
                                      }
                                    )}
                                  </SubList>
                                </ListItem>
                              </>
                            );
                          })}
                        </SubList>
                      </ListItem>{" "}
                    </>
                  ) : (
                    <Link key={cat._id} href={`/${localActive}/categories/${cat.name.en}/${cat.name.en}`} className="hover:text-primary">
                      <ListItem key={cat._id}>{cat.name.ar}</ListItem>
                    </Link>
                  )}
                </>
              );
            })}
          </List>
        </CardBody>
      </FilterCard>
      {/* <FilterCard>
        <CardHeader>
          تقييم الخدمة <FaTimes />
        </CardHeader>
        <CardBody>
          <List>
            <ListItem>
              <RatingInput rating={4} />
            </ListItem>
            <ListItem>
              <RatingInput rating={3} />
            </ListItem>
            <ListItem>
              <RatingInput rating={2} />
            </ListItem>
            <ListItem>
              <RatingInput rating={1} />
            </ListItem>
          </List>
        </CardBody>
      </FilterCard> */}
      {/* <FilterCard>
        <CardHeader>
          {" "}
          مستوى البائع
          <FaTimes />
        </CardHeader>
        <CardBody>
          <List>
            <ListItem>
              <CheckboxInput name="level">بائع موثوق / مميز</CheckboxInput>
            </ListItem>
            <ListItem>
              <CheckboxInput name="level">بائع نشيط</CheckboxInput>
            </ListItem>
            <ListItem>
              <CheckboxInput name="level">بائع جديد</CheckboxInput>
            </ListItem>
          </List>
        </CardBody>
      </FilterCard>
      <FilterCard>
        <CardHeader>
          {" "}
          حالة البائع
          <FaTimes />
        </CardHeader>
        <CardBody>
          <List>
            <ListItem>
              <CheckboxInput name="status">متواجد حاليا</CheckboxInput>
            </ListItem>
            <ListItem>
              <CheckboxInput name="status">هوية موثقة</CheckboxInput>
            </ListItem>
          </List>
        </CardBody>
      </FilterCard> */}
    </div>
  );
}
