import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import ButtonB from "../_components/reusable/buttons/ButtonB";
import { Upgrade } from "./types"; 
import * as alertify from 'alertifyjs';
import AdditionalServices from "../_components/single-service/AdditionalServices";
import { AdditionalService } from "../_lib/redux/slice/upgrades";
import { CartItemType } from "../_models/CartItems";

const CartItem: React.FC<{ 
  item: CartItemType; 
  checkedItems: AdditionalService[]; 
  setAdditionalServiceTotal: React.Dispatch<React.SetStateAction<number>>; // تمرير دالة تحديث السعر
}> = ({ item, checkedItems, setAdditionalServiceTotal }) => {
  const { updateItemQuantity, removeItem } = useCart();

  const calculatePrice = () : number =>  {
    let totalPrice = item.price
    checkedItems.forEach(i=> {
        totalPrice += i.price
    })
    return totalPrice
  }

  useEffect(() => {
    const total =  calculatePrice() 
    setAdditionalServiceTotal(total); // تحديث السعر الإضافي
  }, [checkedItems, item.selectedUpgrades, setAdditionalServiceTotal]);

  return (
    <div className="cart-body border-b py-5">
      <div className="flex flex-col">
        <div className="flex align-middle items-center">
          <div className="w-2/12 pe-3">
            <img src={item.image} alt={item.name} loading="lazy" width={"270px"} height={"158px"} />
          </div>
          <div className="w-6/12 p-3">
            <h4>{item.name}</h4>
            <h6>{item.seller}</h6>
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
            <h4>${item.price.toFixed(2)}</h4>
          </div>
          <div>
            <ButtonB
              text="حذف"
              extraStyle="border-red-600 py-[3px] px-[8px] text-red-600 text-sm"
              onClick={(event: React.MouseEvent) => {
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
        
        {/* إضافة خدمات إضافية */}
        <div className="mt-4">
          <AdditionalServices serviceId={item.id} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
