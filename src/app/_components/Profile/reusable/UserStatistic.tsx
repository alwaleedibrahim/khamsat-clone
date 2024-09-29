import React from 'react'
import Stars from '../../reusable/stars/Stars';
import TagButton from '../../reusable/buttons/TagButton';

interface IUserStatisticProps {
    ratings: {
        average: number;
        count: number;
    },
    orderCompleted: string,
    activeServices: number,
    clients: number,
    responseTime: string,
    JoinedDate: string,
    lastSeen: string
}

export interface IUserInfoProps {
    data: IUserStatisticProps;
}

const UserStatistic: React.FC<IUserInfoProps> = ({ data }) => {
    const { ratings, orderCompleted, activeServices, clients, responseTime, JoinedDate, lastSeen } = data;

    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                إحصائيات
            </h5>
            <div className="grid grid-cols-2 gap-4 font-kufi text-[14px] p-container-space border-b-[1px] border-[#F1F1F1]">
                {/* Ratings */}
                <div className="col-span-1">
                    <span> التقييمات </span>
                </div>
                <div className="col-span-1 flex items-center">
                    <Stars rating={ratings.average} extraStyle='text-[20px]' />
                    <span className="mx-[3px] text-[#777] leading-[1.7em]">({ratings.count})</span>
                </div>

                {/* orders completed */}
                <div className="col-span-1">
                    <span>معدل إكمال الطلبات</span>
                </div>
                <div className="col-span-1">
                    <TagButton text={orderCompleted} extraStyle='bg-[#888] text-white text-[10px]'/>
                </div>

                {/* services published */}
                <div className="col-span-1">
                    <span>الخدمات المنشورة </span>
                </div>
                <div className="col-span-1">
                    <span>{activeServices}</span>
                </div>

                {/* Active Orders */}
                <div className="col-span-1">
                    <span>عدد العملاء </span>
                </div>
                <div className="col-span-1">
                    <span>{clients}</span>
                </div>

                {/* Response Time */}
                <div className="col-span-1">
                    <span>متوسط سرعة الرد </span>
                </div>
                <div className="col-span-1">
                    <span>{responseTime}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 font-kufi text-[14px] p-container-space">

                {/* Joined Date */}
                <div className="col-span-1">
                    <span>تاريخ التسجيل</span>
                </div>
                <div className="col-span-1">
                    <span>{JoinedDate}</span>
                </div>
                {/* Last Seen */}
                <div className="col-span-1">
                    <span>آخر تواجد</span>
                </div>
                <div className="col-span-1">
                    <span>{lastSeen}</span>
                </div>
            </div>
        </div>
    )
}

export default UserStatistic