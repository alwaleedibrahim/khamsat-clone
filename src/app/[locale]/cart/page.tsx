"use client";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import ButtonA from "../_components/reusable/buttons/ButtonA";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { RootState } from "@/app/[locale]/_lib/redux/store";
import "alertifyjs/build/css/alertify.rtl.css";
import "../alertify.css";
import CartItem from "./CartItem";
import Link from "next/link";
const Cart: React.FC = () => {
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const { checkedItems } = useSelector(
    (state: RootState) => state.additionalServices
  );

  const { isEmpty, items } = useCart();

  const [additionalServiceTotal, setAdditionalServiceTotal] = useState(0); // حالة جديدة لإدارة السعر الإضافي
  const localActive = useLocale();
  const router = useRouter();
  const path = `/${localActive}/`;

  const calculateCartTotal = () => {
    return items.reduce((total, item) => {
      const itemTotal = item.price * item.quantity; // حساب سعر كل عنصر
      return total + itemTotal;
    }, 0);
  };

  const cartTotalAmount = calculateCartTotal();
  const fees = cartTotalAmount * 0.05;
  const totalWithFees = cartTotalAmount + fees + additionalServiceTotal; // إضافة السعر الإضافي

  return (
    <div className="flex flex-row">
      <div className="mx-auto w-[100%] max-w-[1440px] p-5">
        <h2 className="font-kufi text-2xl">سلة المشتريات</h2>
        <div className="cart-dev bg-white py-5 my-5">
          {isEmpty ? (
            <div className="flex flex-col align-center font-kufi bg-white">
              <h2 className="text-xl text-center">
                لا يوجد منتجات في سلة المشتريات الخاصة بك
              </h2>
              <ButtonA
                text="تصفح الخدمات"
                extraStyle="mx-auto text-sm px-[13px] mt-5"
                onClick={() => {
                  router.replace(path + "/services");
                }}
              />
            </div>
          ) : (
            <>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  checkedItems={checkedItems}
                  setAdditionalServiceTotal={setAdditionalServiceTotal} // تمرير الدالة لتحديث السعر
                />
              ))}
              <div className="cart-footer">
                <div className="grid grid-cols-12 gap-4 ms-[66.8%] w-1/5">
                  <div className="col-span-8 mb-4">
                    <h4>الإجمالي</h4>
                  </div>
                  <div className="col-span-4 mb-4 text-right">
                    <h4>${cartTotalAmount.toFixed(2)}</h4>
                  </div>
                  <div className="col-span-8 mb-4">
                    <h4>
                      الرسوم
                      <span className="text-primary ml-1">
                        <i className="fa fa-info-circle"></i>
                      </span>
                    </h4>
                  </div>
                  <div className="col-span-4 mb-4 text-right">
                    <h4>${fees.toFixed(2)}</h4>
                  </div>
                  <div className="col-span-8">
                    <h4>
                      <strong>المجموع الكلي</strong>
                    </h4>
                  </div>
                  <div className="col-span-4 text-right">
                    <h4>
                      <strong>${totalWithFees.toFixed(2)}</strong>
                    </h4>
                  </div>
                  <div className="col-span-12 mt-4">
                    <Link href={`payment`}>
                      <ButtonA
                        text="إتمام الشراء"
                        extraStyle="text-sm font-kufi p-auto w-[88%]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
