import React from 'react';
import UserReply, { UserReplyProps } from './UserReply';
import Stars from '../../reusable/stars/Stars';
import { faClockFour, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { formatTimeAgo } from '@/app/[locale]/_lib/reviews';

export interface ReviewProps {
    qualityOfService: number;
    communication: number;
    deliveryPunctuality: number;
    userId:{
        profilePicture:string;
        username:string
    };
    userType:string;
    reviewText:string;
    replies: UserReplyProps[];
    createdAt:string;
    userLink:string
}

const UserReview: React.FC<ReviewProps> = async({userLink="#", userType="مشترى", createdAt, qualityOfService, communication, reviewText, deliveryPunctuality, userId, replies }) => {
    try{
        createdAt = await formatTimeAgo(createdAt)
    }catch(err){
        console.log(err);
    }
    return (
        <div className='bg-white p-container-space'>
            <div className="grid grid-cols-2 gap-1 font-kufi text-[14px]">
                <div className="col-span-2 flex items-center justify-between">
                    <span>جودة الخدمة</span>
                    <Stars rating={qualityOfService} extraStyle='text-[25px]' />
                </div>
                <div className="col-span-2 flex items-center justify-between">
                    <span>التواصل والمتابعة</span>
                    <Stars rating={communication} extraStyle='text-[25px]' />
                </div>
                <div className="col-span-2 flex items-center justify-between">
                    <span>التسليم بالموعد</span>
                    <Stars rating={deliveryPunctuality} extraStyle='text-[25px]' />
                </div>
            </div>
            <div>
            <div className="flex pr-0 pt-[10px]">
            <table>
                <tbody>
                    <tr>
                        <td className="text-center pl-[5px] w-[53px]">
                            <a href={userLink}>
                                <div className="relative">
                                    <Image
                                    // userId.profilePicture || 
                                        src={'/images/services/defaultuser.jfif'}  
                                        width={48}
                                        height={48}
                                        className="rounded-full border border-gray-300 w-[48px] h-[48px]"
                                        alt={`Image of ${userId?.username}`}
                                    />
                                </div>
                            </a>
                        </td>
                        <td className="p-2">
                            <h3>
                                <a className="block text-md text-style1 mb-1.5" href={userLink}>
                                    {userId?.username}
                                </a>
                            </h3>
                            <ul className="flex text-[12px] gap-4 text-[#6c757d]">
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon={faUser} className="ml-2 text-[12px]" /> 
                                    <span>{userType}</span>
                                </li>

                                <li className="flex items-center">
                                    <FontAwesomeIcon icon={faClockFour} className="ml-2 text-[12px]" />
                                    <span> {createdAt}</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-[5px] py-[10px]" colSpan={2}>
                            <p className="text-style2 text-sm">{reviewText}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            </div>
            <div className='border-t-[1px] border-[#ECEFF4] mt-[20px] pr-[30px]'>
                {replies.map((reply, index) => (
                    <UserReply key={index} {...reply} />
                ))}
            </div>
        </div>
    );
};




export default UserReview;
