"use client"

import { useState } from "react";
// import ButtonA from "../_components/reusable/buttons/ButtonA";
import { FaPaypal, FaRegCreditCard, FaInfoCircle } from "react-icons/fa";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/app/[locale]/_lib/payment/convert";
import CheckoutPage from "@/app/[locale]/_components/payment/CheckoutForm";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { RootState } from "../_lib/redux/store";
import { useLocale } from "next-intl";
import { redirect } from "next/navigation";


const Payment = () => {
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const localActive = useLocale();
  const isAuthenticated : boolean = useSelector((state)=> state.auth.isAuthenticated)
if (!isAuthenticated) {
    redirect(`/${localActive}/login?redirect=payment`)
}
  const [selectedMethod, setSelectedMethod] = useState<"creditCard" | "paypal">(
    "creditCard"
  );
  const token : string = useSelector((state)=> state.auth.token) || ''
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);
 const amount = 5
  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 min-h-screen pt-20">
      {/* قسم الدفع */}

      <div className="p-4 font-kufi text-right lg:w-2/3 w-full lg:mr-12 mt-8">
        <a href="#" className="text-gray-500">
          الرئيسية
        </a>
        <span className="text-gray-500 mx-1">/</span>
        <a href="#" className="text-gray-500">
          سلة المشتريات
        </a>
        <h1 className="text-2xl mb-6 mt-3">إتمام عملية الدفع</h1>

        {/* اختيار طريقة الدفع */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
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
        {selectedMethod === "creditCard" && (<>
          
      <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "usd",
      }}
    >
      <CheckoutPage amount={amount} token={token} />
    </Elements>
          {/* <div className="p-4 w-full bg-white">
            <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 pl-4">
                <label className="block mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  className="h-10 pl-2 mb-0 w-full text-md text-primary px-3 py-1.5 bg-white border block focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2">بيانات البطاقة الائتمانية</label>
                <div className="relative">
                  <FaRegCreditCard className="absolute left-3 top-2 text-gray-400" />
                  <input
                    type="text"
                    className="h-10 pl-10 mb-2 w-full text-md text-primary px-3 py-1.5 bg-white border block focus:outline-none focus:border-primary transition-colors"
                    placeholder="Card number MM / YY CVC"
                  />
                </div>
              </div>
            </div>

            

            <ButtonA
              text="ادفع بالبطاقة الائتمانية"
              type="button"
              extraStyle="py-2 w-full md:w-64 text-center text-sm mt-10"
            />
          </div> */}
        </>)}

        {/* محتوى PayPal */}
        {selectedMethod === "paypal" && (
          <div className="p-4 pb-8 pt-8 bg-white w-full flex justify-center min-h-[100px]">
            <button className="font-kufi border border-primary text-primary hover:bg-primary hover:text-white transition-all bg-blue-600 text-white w-auto text-center text-sm py-1">
                <FaPaypal className="inline-block mr-2" /> 
                ادفع عن طريق PayPal
            </button>
          </div>
        )}
      </div>

      {/* بطاقة الفاتورة */}
      <div className="bg-white font-kufi h-auto w-full lg:w-1/4 self-start lg:self-start sticky top-48">
        <div className="border-b border-gray-100 pb-3 pr-3 pt-3">
          <h6 className="text-md">تفاصيل الفاتورة</h6>
        </div>
        <div className="mt-2 p-5">
          <div className="flex justify-between">
            <p className="mb-2">الإجمالي</p>
            <p className="pl-20">00.0$</p>
          </div>
          <div className="flex justify-between">
            <p className="mb-2">
              الرسوم <FaInfoCircle className="text-green-500 inline-block ml-1" />
            </p>
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