"use client";

import { useState } from "react";
import ButtonA from "../_components/reusable/buttons/ButtonA";
import ButtonB from "../_components/reusable/buttons/ButtonB";
import { FaPaypal } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<"creditCard" | "paypal">(
    "creditCard"
  );
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex space-x-4">
      {/* قسم الدفع */}
      <div className="p-4 font-kufi text-right w-2/3 mr-12"> 
        <a href="#" className="text-gray-500">
          الرئيسية
        </a>
        <span className="text-gray-500 mx-1">/</span>
        <a href="#" className="text-gray-500">
          سلة المشتريات
        </a>
        <h1 className="text-2xl mb-6">إتمام عملية الدفع</h1>

        {/* اختيار طريقة الدفع */}
        <div className="flex space-x-4">
          <div
            className={`flex items-center p-2 cursor-pointer transition-all duration-300 ${
              selectedMethod === "creditCard" ? "bg-white" : "bg-gray-100"
            }`}
            onClick={() => setSelectedMethod("creditCard")}
          >
            <FaRegCreditCard className="ml-2" />
            <span className="ml-2">البطاقة الائتمانية</span>
          </div>
          <div
            className={`flex items-center p-2 cursor-pointer transition-all duration-300 ${
              selectedMethod === "paypal" ? "bg-white" : "bg-gray-100"
            }`}
            onClick={() => setSelectedMethod("paypal")}
          >
            <FaPaypal className="ml-2" />
            <span className="ml-2">PayPal</span>
          </div>
        </div>

        {/* محتوى البطاقة الائتمانية */}
        {selectedMethod === "creditCard" && (
          <div className="p-4 w-full bg-white">
            <div className="mb-4 flex space-x-4">
              <div className="flex-1 pl-6">
                <label className="block mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  className="h-10 pl-2 mb-0 w-full text-md text-primary px-3 py-1.5 bg-white border block focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2">بيانات البطاقة الائتمانية</label>
                <input
                  type="text"
                  className="h-10 pl-2 mb-2 w-full text-md text-primary px-3 py-1.5 bg-white border block focus:outline-none focus:border-primary transition-colors"
                  placeholder="MM / YY CVC"
                />
              </div>
            </div>

            {/* خانة الاختيار */}
            <div className="flex items-center mb-4 ">
              <input
                type="checkbox"
                className={`h-5 w-5 focus:ring-green-500 ${
                  isChecked ? "bg-green-600 border-green-600" : "bg-white"
                }`}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="ml-2 text-gray-700 pr-2">
                احفظ البطاقة لتسهيل الدفع في المستقبل
              </label>
            </div>

            <ButtonA
              text="ادفع بالبطاقة الائتمانية"
              type="button"
              extraStyle="py-2 w-64 block text-center text-sm mt-10"
            />
          </div>
        )}

        {/* محتوى PayPal */}
        {selectedMethod === "paypal" && (
          <div className="p-4 pb-8 pt-8 bg-white w-full flex justify-center ">
            <ButtonB
              text={"ادفع عن طريق PayPal"}
              extraStyle="bg-blue-600 text-white w-auto text-center text-sm py-1"
            />
          </div>
        )}
      </div>

      {/* بطاقة الفاتورة */}
      <div className="bg-white font-kufi h-42 w-1/4 self-center mt-24"> 
        <div className="border-b border-gray-100 font-kufi pb-3 pr-3 pt-3">
          <h6 className="text-md">تفاصيل الفاتورة</h6>
        </div>
        <div className="mt-2 p-5">
          <div className="flex justify-between">
            <p className="mb-2">الإجمالي</p>
            <p className="pl-20">00.0$</p> 
          </div>

          <div className="flex justify-between">
            <p className="mb-2">الرسوم</p>
            <p className="pl-20">00.0$</p> 
          </div>

          <div className="flex justify-between font-bold">
            <p>المجموع الكلي</p>
            <p className="pl-20">00.0$</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
