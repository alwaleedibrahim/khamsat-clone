'use client'
import React from "react";
import { useCart } from "react-use-cart";
import ButtonA from "../_components/reusable/buttons/ButtonA";
import ButtonB from "../_components/reusable/buttons/ButtonB";
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const Cart: React.FC = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();
  const localActive = useLocale();
  const router = useRouter();
  const fees = cartTotal * 0.05; // 5% fees
  const totalWithFees = cartTotal + fees;
  const path = `/${localActive}/`

  const CartItem: React.FC<{ item: any }> = ({ item }) => {
    return (
      <div className="cart-body border-b py-5">
        <div className="flex align-middle items-center">
          <div className="w-2/12 pe-3 ">
            <img src={item.image} alt={item.name} loading="lazy" />
          </div>
          <div className="w-6/12 p-3">
            <h4>{item.name}</h4>
            <h6>{item.seller}</h6>
          </div>
          <div className="w-[12%] ">
            <select
              value={item.quantity}
              onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
              className="bg-gray-50 border w-14 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {[...Array(5)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div className="w-2/12">
            <h4>${item.price.toFixed(2)}</h4>
          </div>
          <div className="">
            <ButtonB
              text="حذف"
              extraStyle="border-red-600 py-[3px] px-[8px] text-red-600 text-sm"
              onClick={(event:Event) => {
                event.preventDefault();
                removeItem(item.id)
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const EmptyCart = () => {
    return (
      <div className="flex flex-col align-center font-kufi bg-white">
        <h2 className="text-xl text-center">
          لا يوجد منتجات في سلة المشتريات الخاصة بك
        </h2>
        <ButtonA
          text="تصفح الخدمات"
          extraStyle="mx-auto text-sm px-[13px] mt-5"
          onClick={() => {
            router.replace(path+'/services');
          }}
        />
      </div>
    );
  };

  const DefCart = () => {
    return (
      <div className="flex flex-col align-center font-kufi bg-white px-5">
        <div className="cart-header flex border-b">
          <div className="w-8/12">
            <h2>الخدمه</h2>
          </div>
          <div className="w-40">
            <h2>مرات الطلب</h2>
          </div>
          <div className="w-1/12">
            <h2>التكلفة</h2>
          </div>
        </div>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="cart-footer">
          <div className="grid grid-cols-12 gap-4 ms-[66.8%] w-1/5">
            <div className="col-span-8 mb-4">
              <h4>الإجمالي</h4>
            </div>
            <div className="col-span-4 mb-4 text-right">
              <h4>${cartTotal.toFixed(2)}</h4>
            </div>
            <div className="col-span-8 mb-4">
              <h4>
                الرسوم
                <span
                  className="text-primary ml-1"
                  title="هذه الرسوم لتغطية تكاليف بوابات الدفع وتساعدنا على تشغيل الموقع وتقديم دعم فني لك"
                >
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
              <ButtonA
                text="إتمام الشراء"
                extraStyle="text-sm font-kufi p-auto w-[88%]"
                onClick={() => {/* Handle checkout */}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-row">
      <div className="mx-auto w-[100%] max-w-[1440px] p-5">
        <h2 className="font-kufi text-2xl">سلة المشتريات</h2>
        <div className="cart-dev bg-white py-5 my-5">
          {isEmpty ? <EmptyCart /> : <DefCart />}
        </div>
      </div>
    </div>
  );
};

export default Cart;