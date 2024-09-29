"use client"
import React, { useState } from 'react'
import ButtonA from '../reusable/buttons/ButtonA';

const GetService = () => {
    const [quantity, setQuantity] = useState(1);
    const basePrice = 5.00;

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(Number(e.target.value)); 
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
                    </select>
                </div>
                <h3 className="mb-4 text-lg">
                    <span>المبلغ 5$</span>
                </h3>
            </div>

            <div className='text-center px-[20px] pb-[20px]'>
            <ButtonA  text="أضف الى السلة" extraStyle='h-[48px] lg:w-fit w-full'/>

            </div>

        </div>
    )
}

export default GetService