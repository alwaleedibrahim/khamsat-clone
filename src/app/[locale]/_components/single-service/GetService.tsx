"use client";
import React, { useState } from 'react';
import { useCart } from 'react-use-cart'; // استيراد useCart من react-use-cart
import ButtonA from '../reusable/buttons/ButtonA';
import { useRouter } from 'next/navigation';
const alertify = require('alertifyjs');
// import 'alertifyjs/build/css/alertify.css';
import '../../alertify.css';
import 'alertifyjs/build/css/alertify.rtl.css';
import { useLocale } from 'next-intl';


const GetService = ({ serviceData }: Readonly<{ serviceData: any }>) => {
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);
    const localActive = useLocale();
    const router = useRouter();

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(Number(e.target.value));
    };

    const handleAddToCart = () => {
        const showAlert = () => {
            alertify.confirm('إشعار', 'تم إضافة الخدمة إلى سلة المشتريات',
                function () {
                    // alertify.success('تم إتمام الشراء');
                    const path = `/${localActive}/cart`
                    router.replace(path);
                },
                function () {
                    alertify.message('');
                })
                .set('labels', { ok: 'إتمام الشراء', cancel: 'تصفح المزيد' })
                .set('defaultFocus', 'ok')
                .set('closable', false);
        };
        showAlert()
        addItem({
            id: serviceData._id,
            price: serviceData.price,
            name: serviceData.title.ar,
            image: serviceData.images[0],
            category: serviceData.category.name.ar,
            quantity: quantity
        }, quantity);
    };

    return (
        <div className='bg-white'>
            <h5 className='p-container-space py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                اشتري الخدمة
            </h5>
            <div className="flex justify-center items-center gap-2 mb-[20px] mx-auto my-[20px] font-kufi">
                <h3 className="mb-4 text-lg ">
                    <span>مرات الطلب</span>
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                    <select
                        id="service_quantity"
                        name="service_quantity"
                        className="border border-bColor text-[16px] bg-white py-[4.5px] px-[17px] text-start "
                        value={quantity}
                        onChange={handleQuantityChange}
                    >
                        <option className='px-[7px] w-[50px]' value="1">1</option>
                        <option className='px-[7px] w-[50px]' value="2">2</option>
                        <option className='px-[7px] w-[50px]' value="3">3</option>
                        <option className='px-[7px] w-[50px]' value="4">4</option>
                        <option className='px-[7px] w-[50px]' value="5">5</option>
                        <option className='px-[7px] w-[50px]' value="6">6</option>
                        <option className='px-[7px] w-[50px]' value="7">7</option>
                        <option className='px-[7px] w-[50px]' value="8">8</option>
                        <option className='px-[7px] w-[50px]' value="9">9</option>
                        <option className='px-[7px] w-[50px]' value="10">10</option>
                    </select>
                </div>
                <h3 className="mb-4 text-lg">
                    <span className='me-3'>المبلغ</span>
                    <span>{serviceData.price * quantity}</span>
                    <span>$</span>
                </h3>
            </div>

            <div className='text-center px-[20px] pb-[20px]'>
                <ButtonA text="أضف الى السلة" extraStyle='h-[48px] lg:w-fit w-full' onClick={handleAddToCart} />
            </div>
        </div>
    )
}

export default GetService