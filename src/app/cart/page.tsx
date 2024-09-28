import React from "react";
import ButtonA from "../_components/reusable/buttons/ButtonA";
import ButtonB from "../_components/reusable/buttons/ButtonB";
interface IServices {
  service_id: string;
  quantity: string;
}

interface ICart {
  user_id: string;
  items: IServices[];
  subtotal: number;
  fees: number;
  total: number;
}
const cartItems: ICart = {
  user_id: "12345",
  items: [], // هنا المنتجات فاضية
  subtotal: 0,
  fees: 0,
  total: 0,
};

const Cart: React.FC = () => {
  const CartItem = () => {
    return (
      <div className="cart-body border-b py-5">
        <div className="flex align-middle items-center">
          <div className="w-2/12 pe-3 ">
            <img
              src="https://khamsat.hsoubcdn.com/images/services/1024663/387643e7419cfc418c227a047cbe238a_thumb.jpg"
              loading="lazy"
            />
          </div>
          <div className="w-6/12 p-3">
            <h4>تطوير و تصميم و تعديل أي لعبة أو برنامج سكراتش للأطفال</h4>
            <h6> .Hamed L</h6>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Default checkbox
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Checked state
              </label>
            </div>
          </div>
          <div className="w-[12%] ">
            <select
              id="countries"
              className="bg-gray-50 border w-14 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>1</option>
            </select>
          </div>
          <div className="w-2/12">
            <h4>$5.00</h4>
          </div>
          <div className="">
            <ButtonB
              text="حذف"
              extraStyle="border-red-600 py-[3px] px-[8px] text-red-600 text-sm"
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
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="cart-footer">
          <div className="grid grid-cols-12 gap-4 ms-[66.8%] w-1/5">
            <div className="col-span-8 mb-4">
              <h4>الإجمالي</h4>
            </div>
            <div className="col-span-4 mb-4 text-right">
              <h4>$5.00</h4>
            </div>
            <div className="col-span-8 mb-4">
              <h4>
                الرسوم
                <span
                  className="text-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="هذه الرسوم لتغطية تكاليف بوابات الدفع وتساعدنا على تشغيل الموقع وتقديم دعم فني لك"
                  aria-label="هذه الرسوم لتغطية تكاليف بوابات الدفع وتساعدنا على تشغيل الموقع وتقديم دعم فني لك"
                >
                  <i className="fa fa-info-circle"></i>
                </span>
              </h4>
            </div>
            <div className="col-span-4 mb-4 text-right">
              <h4>$2.00</h4>
            </div>
            <div className="col-span-8">
              <h4>
                <strong>المجموع الكلي</strong>
              </h4>
            </div>
            <div className="col-span-4 text-right">
              <h4>
                <strong>$7.00</strong>
              </h4>
            </div>
            <input type="hidden" id="total_amount" value="700" />
            <div className="col-span-12 mt-4">
              <ButtonA
                text="إتمام الشراء"
                extraStyle="text-sm font-kufi p-auto w-[88%]"
              />
              <i className="fa fa-spinner fa-spin hidden" id="cart_load"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-row">
      <div className="mx-auto w-[100%] max-w-[1440px] p-5">
        <p>لا اله الا الله</p>
        <p>لا اله الا الله</p>
        <p>لا اله الا الله</p>
        <p>لا اله الا الله</p>
        <p>لا اله الا الله</p>
        <p>لا اله الا الله</p>
        <h2 className="font-kufi text-2xl">سلة المشتريات</h2>
        <div className="cart-dev bg-white py-5 my-5">
          {cartItems.items.length === 0 ? <EmptyCart /> : <DefCart />}
        </div>
      </div>
    </div>
  );
};
export default Cart;
