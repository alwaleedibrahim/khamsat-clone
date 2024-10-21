'use client'
import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import ButtonA from "../_components/reusable/buttons/ButtonA";
import ButtonB from "../_components/reusable/buttons/ButtonB";
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { fetchUpgradesById } from "@/app/[locale]/_lib/upgardes";
const alertify = require('alertifyjs');
import 'alertifyjs/build/css/alertify.rtl.css';
import '../alertify.css';
import Upgardes from "../_components/single-service/Upgrades";

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
  const [upgradesList, setUpgradesList] = useState<{ [key: string]: any[] }>({});
  const [selectedUpgrades, setSelectedUpgrades] = useState<{ [key: string]: number }>({});
  const router = useRouter();
  const fees = cartTotal * 0.05; // 5% fees
  const totalWithFees = cartTotal + fees;
  const path = `/${localActive}/`;

  // Update selected upgrades and total price
  const handleUpgradeSelection = (itemId: string, upgradesPrice: number) => {
    setSelectedUpgrades((prev) => ({
      ...prev,
      [itemId]: upgradesPrice,
    }));
  };

  // Fetch upgrades by item id
  useEffect(() => {
    items.forEach((item) => {
      if (!upgradesList[item.id]) {
        fetchUpgradesById(item.id)
          .then((response) => {
            setUpgradesList((prev) => ({
              ...prev,
              [item.id]: response.upgrades,
            }));
          })
          .catch((error) => console.log(error));
      }
    });
  }, [items]);

  const CartItem: React.FC<{ item: any }> = ({ item }) => {
    const upgrades = upgradesList[item.id] || [];

    // Calculate item total including upgrades
    const itemTotalPrice = item.price + (selectedUpgrades[item.id] || 0);

    return (
      <div className="cart-body border-b py-5">
        <div className="flex align-middle items-center">
          <div className="w-2/12 pe-3 ">
            <img src={item.image} alt={item.name} loading="lazy" />
          </div>
          <div className="w-6/12 p-3">
            <h4>{item.name}</h4>
            <h6>{item.seller}</h6>
            <Upgardes upgrades={upgrades} onUpgradeChange={(price) => handleUpgradeSelection(item.id, price)} />
          </div>
          <div className="w-[12%]">
            <select
              value={item.quantity}
              onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
              className="bg-gray-50 border w-14 border-gray-300 text-gray-900 text-sm"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="w-2/12 ms-2">
            <h4>${itemTotalPrice.toFixed(2)}</h4>
          </div>
          <div>
            <ButtonB
              text="حذف"
              extraStyle="border-red-600 py-[3px] px-[8px] text-red-600 text-sm"
              onClick={(event: Event) => {
                event.preventDefault();
                alertify
                  .confirm('إشعار', 'هل أنت متأكد من رغبتك بحذف الخدمة من سلة المشتريات؟',
                    function () {
                      removeItem(item.id);
                    },
                    function () {
                      alertify.message('');
                    })
                  .set('labels', { ok: 'موافق', cancel: 'إلغاء الأمر' })
                  .set('defaultFocus', 'ok')
                  .set('closable', false);
              }}
            />
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
          {isEmpty ? (
            <div className="flex flex-col align-center font-kufi bg-white">
              <h2 className="text-xl text-center">لا يوجد منتجات في سلة المشتريات الخاصة بك</h2>
              <ButtonA
                text="تصفح الخدمات"
                extraStyle="mx-auto text-sm px-[13px] mt-5"
                onClick={() => {
                  router.replace(path + '/services');
                }}
              />
            </div>
          ) : (
            <>
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
                    <ButtonA text="إتمام الشراء" extraStyle="text-sm font-kufi p-auto w-[88%]" />
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
