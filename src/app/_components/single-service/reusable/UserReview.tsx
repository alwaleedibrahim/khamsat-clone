import React from 'react';
import UserReply, { UserReplyProps } from './UserReply';
import Stars from '../../reusable/stars/Stars';

interface ClientRating {
    qualityOfService: number;
    communication: number;
    deliveryPunctuality: number;
}

export interface ReviewProps {
    clientRating: ClientRating;
    clientReview:UserReplyProps;
    userReply: UserReplyProps[];
}

const UserReview: React.FC<ReviewProps> = ({ clientRating, clientReview, userReply }) => {
    return (
        <div className='bg-white p-container-space'>
            <div className="grid grid-cols-2 gap-1 font-kufi text-[14px]">
                <div className="col-span-2 flex items-center justify-between">
                    <span>جودة الخدمة</span>
                    <Stars rating={clientRating.qualityOfService} extraStyle='text-[25px]' />
                </div>
                <div className="col-span-2 flex items-center justify-between">
                    <span>التواصل والمتابعة</span>
                    <Stars rating={clientRating.communication} extraStyle='text-[25px]' />
                </div>
                <div className="col-span-2 flex items-center justify-between">
                    <span>التسليم بالموعد</span>
                    <Stars rating={clientRating.deliveryPunctuality} extraStyle='text-[25px]' />
                </div>
            </div>
            <div>
            <UserReply {...clientReview}/>
            </div>
            <div className='border-t-[1px] border-[#ECEFF4] mt-[20px] pr-[30px]'>
                {userReply.map((reply, index) => (
                    <UserReply key={index} {...reply} />
                ))}
            </div>
        </div>
    );
};




export default UserReview;
