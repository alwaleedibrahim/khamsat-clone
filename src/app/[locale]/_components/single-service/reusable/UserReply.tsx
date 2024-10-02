import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour, faUser } from '@fortawesome/free-solid-svg-icons';

export interface UserReplyProps {
    userImage?: string;
    userName: string;
    userReply: string;
    userReplyTime: string;
    userLink: string;
    userType: string; 
}

const UserReply: React.FC<UserReplyProps> = ({ userType, userImage, userName, userReply, userReplyTime, userLink }) => {
    return (
        <div className="flex pr-0 pt-[10px]">
            <table>
                <tbody>
                    <tr>
                        <td className="text-center pl-[5px] w-[53px]">
                            <a href={userLink}>
                                <div className="relative">
                                    <Image
                                        src={userImage || '/images/services/defaultuser.jfif'}  
                                        width={48}
                                        height={48}
                                        className="rounded-full border border-gray-300 w-[48px] h-[48px]"
                                        alt={`Image of ${userName}`}
                                    />
                                </div>
                            </a>
                        </td>
                        <td className="p-2">
                            <h3>
                                <a className="block text-md text-style1 mb-1.5" href={userLink}>
                                    {userName}
                                </a>
                            </h3>
                            <ul className="flex text-[12px] gap-4 text-[#6c757d]">
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon={faUser} className="ml-2 text-[12px]" /> 
                                    <span>{userType}</span>
                                </li>

                                <li className="flex items-center">
                                    <FontAwesomeIcon icon={faClockFour} className="ml-2 text-[12px]" />
                                    <span> {userReplyTime}</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-[5px] py-[10px]" colSpan={2}>
                            <p className="text-style2 text-sm">{userReply}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserReply;
