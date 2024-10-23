"use client"
import React, { useState, useEffect } from "react";
import ButtonA from "../_components/reusable/buttons/ButtonA";
import AdditionalServices from "../_components/single-service/AdditionalServices";

interface IService {
  service_id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  seller: string;
}

interface ICart {
  user_id: string;
  items: IService[];
  subtotal: number;
  fees: number;
  total: number;
}

// يمكنك استبدال هذا بطلب API حقيقي
const mockServices: IService[] = [
  {
    service_id: "1",
    name: "تطوير و تصميم و تعديل أي لعبة أو برنامج سكراتش للأطفال",
    price: 5.00,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    seller: "Hamed L"
  },
  {
    service_id: "2",
    name: "خدمة برمجية أخرى",
    price: 10.00,
    quantity: 1,
    image: "https://via.placeholder.com/150",
    seller: "Ahmed M"
  }
];

const Cart: React.FC = () => {
  const [cart, setCart] = useState<ICart>({
    user_id: "12345",
    items: [],
    subtotal: 0,
    fees: 0,
    total: 0
  });

  useEffect(() => {
    setCart(prevCart => ({
      ...prevCart,
      items: mockServices
    }));
  }, []);

  useEffect(() => {
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const fees = subtotal * 0.1;
    const total = subtotal + fees;

    setCart(prevCart => ({
      ...prevCart,
      subtotal,
      fees,
      total
    }));
  }, [cart.items]);

  const updateQuantity = (serviceId: string, newQuantity: number) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.map(item =>
        item.service_id === serviceId ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  const removeItem = (serviceId: string) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.filter(item => item.service_id !== serviceId)
    }));
  };

  const CartItem: React.FC<{ service: IService }> = ({ service }) => {
    return (
      <div className="cart-body border-b py-5">
        <div className="flex align-middle items-center">
          <div className="w-2/12 pe-3">
            <img src={service.image} alt={service.name} loading="lazy" />
          </div>
          <div className="w-6/12 p-3">
            <h4>{service.name}</h4>
            <h6>{service.seller}</h6>
          </div>
          <div className="w-[12%]">
            <select
              value={service.quantity}
              onChange={(e) => updateQuantity(service.service_id, parseInt(e.target.value))}
              className="bg-gray-50 border w-14 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="w-2/12">
            <h4>${service.price.toFixed(2)}</h4>
          </div>
          <div className="">
          <a
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault();  
              removeItem(service.service_id);  
            }}
            className='border-red-600 py-[3px] px-[8px] text-red-600 text-sm flex items-center font-kufi border border-primary text-primary hover:bg-primary hover:text-white transition-all '
          >
            حذف
          </a>
          </div>
        </div>
        <div>
          <AdditionalServices serviceId= '66fd4ef5ed8990501b7d4a05'/>
        </div>
      </div>
    );
  };

  const EmptyCart = () => (
    <div className="flex flex-col align-center font-kufi bg-white">
      <h2 className="text-xl text-center">لا يوجد منتجات في سلة المشتريات الخاصة بك</h2>
      <ButtonA text="تصفح الخدمات" extraStyle="mx-auto text-sm px-[13px] mt-5" />
    </div>
  );

  const CartContent = () => (
    <div className="flex flex-col align-center font-kufi bg-white px-5">
      <div className="cart-header flex border-b">
        <div className="w-8/12"><h2>الخدمة</h2></div>
        <div className="w-40"><h2>مرات الطلب</h2></div>
        <div className="w-1/12"><h2>التكلفة</h2></div>
      </div>
      {cart.items.map(item => (
        <CartItem key={item.service_id} service={item} />
      ))}
      <div className="cart-footer">
        <div className="grid grid-cols-12 gap-4 ms-[66.8%] w-1/5">
          <div className="col-span-8 mb-4"><h4>الإجمالي</h4></div>
          <div className="col-span-4 mb-4 text-right">
            <h4>${cart.subtotal.toFixed(2)}</h4>
          </div>
          <div className="col-span-8 mb-4">
            <h4>الرسوم</h4>
          </div>
          <div className="col-span-4 mb-4 text-right">
            <h4>${cart.fees.toFixed(2)}</h4>
          </div>
          <div className="col-span-8">
            <h4><strong>المجموع الكلي</strong></h4>
          </div>
          <div className="col-span-4 text-right">
            <h4><strong>${cart.total.toFixed(2)}</strong></h4>
          </div>
          <div className="col-span-12 mt-4">
            <ButtonA text="إتمام الشراء" extraStyle="text-sm font-kufi p-auto w-[88%]" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-row">
      <div className="mx-auto w-[100%] max-w-[1440px] p-5">
        <h2 className="font-kufi text-2xl">سلة المشتريات</h2>
        <div className="cart-dev bg-white py-5 my-5">
          {cart.items.length === 0 ? <EmptyCart /> : <CartContent />}
        </div>
      </div>
    </div>
  );
};

export default Cart;