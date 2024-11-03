"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/app/[locale]/_lib/payment/convert";
import createPaymentIntent from "../../_lib/axios/payment";
import IOrder from "../../_models/order";
import { Item } from "react-use-cart";
import { parseCart } from "../../_lib/cart/parseCart";

const CheckoutPage = ({ amount, token, items }: { amount: number, token: string, items: Item[] }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const order : IOrder = { // !!! for testing. remove this and get data from cart
    items: parseCart(items),
    amount: amount
  }
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    createPaymentIntent(convertToSubcurrency(amount), token, JSON.stringify(order))
    .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/ar/orders?payment-success=true&amount=${amount}`,
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-primary"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement options={{}}/>}

      {errorMessage && <div>{errorMessage}</div>}
      <div className="flex items-center mb-4">
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
      <button
        disabled={!stripe || loading}
        className="py-2 w-full md:w-64 text-center text-sm mt-10 bg-primary font-kufi text-white px-[24px] py-[12px] hover:bg-[#3a7d25] transition-all "
      >
        {!loading ? `ادفع بالبطاقة الائتمانية` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;