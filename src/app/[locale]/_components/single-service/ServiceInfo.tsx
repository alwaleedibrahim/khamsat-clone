import React from 'react'
import Stars from '../reusable/stars/Stars';

interface ServiceData {
    totalRated: number;
    totalReviewers: number;
    averageResponseTime: string;
    totalBuyer: number;
    activeOrders: number;
}

export interface ServiceInfoProps {
    data: ServiceData;
    deliveryTime: string;
    price:number
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ data, deliveryTime, price }) => {
    const { totalRated, totalReviewers, averageResponseTime, totalBuyer, activeOrders } = data;

    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                بطاقة الخدمة     
            </h5>
            <div id="sidebar" className="grid grid-cols-2 gap-4 font-kufi text-[14px] px-[20px] py-[20px] border-b-[1px] border-[#F1F1F1]">
                {/* Ratings */}
                <div className="col-span-1">
                    <span> التقييمات </span>
                </div>
                    <div className="col-span-1 flex items-center">
                        <Stars rating={totalRated} extraStyle='text-[20px]'/>    
                        <span className="mx-[3px] text-[#777] leading-[1.7em]">({totalReviewers})</span>
                    </div>
    
                {/* Response Time */}
                <div className="col-span-1">
                    <span>متوسط سرعة الرد</span>
                </div>
                <div className="col-span-1">
                    <span>{averageResponseTime}</span>
                </div>


                {/* Buyers */}
                <div className="col-span-1">
                    <span>المشترين</span>
                </div>
                <div className="col-span-1">
                    <span>{totalBuyer}</span>
                </div>

                {/* Active Orders */}
                <div className="col-span-1">
                    <span>طلبات جاري تنفيذها</span>
                </div>
                <div className="col-span-1">
                    <span>{activeOrders}</span>
                </div>

                {/* Starting Price */}
                <div className="col-span-1">
                    <span>سعر الخدمة يبدأ من</span>
                </div>
                <div className="col-span-1">
                    <span>${price}</span>
                </div>

                {/* Delivery Time */}
                <div className="col-span-1">
                    <span>مدة التسليم</span>
                </div>
                <div className="col-span-1">
                    <span>{deliveryTime}</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceInfo