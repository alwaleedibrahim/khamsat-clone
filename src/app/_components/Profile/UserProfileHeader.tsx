// components/UserProfileHeader.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle, faBriefcase, faSliders } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const UserProfileHeader = () => {
    return (
        <div className="bg-white pt-[100px]">
            <div className="mx-auto">
                <div className="text-center">
                    {/* Profile Picture */}
                    <div className="relative inline-block">
                        <Image
                            className="rounded-full shadow-md"
                            src="/images/profile/bc8f040c02a7064f813491350aa9dc64.png"
                            width="128"
                            height="128"
                            alt="User Avatar"
                        />
                    </div>

                    {/* Username and Status */}
                    <div className='flex justify-center'>
                        <h1 className="text-[26px]">
                            Ola Adel
                        </h1>
                        <span className="mr-2.5">
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="text-primary inline-block text-[12px] pt-2.5"
                                title="Online now"
                                data-bs-toggle="tooltip"
                                aria-label="Online"
                            />
                        </span>
                    </div>

                    {/* User Status */}
                    <ul className="list-none pt-2.5">
                        <li className="text-[#6c757d] text-[12px]">
                            <FontAwesomeIcon icon={faUser} className="ml-2" />
                            <span className='font-kufi'>مستخدم جديد</span>
                        </li>
                    </ul>
                </div>

                {/* Navigation Tabs */}
                <div className="mt-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center p-container-space">
                        <div className="flex-1 -mb-[30px]">
                            <ul className="flex text-md font-kufi">
                                <li>
                                    <a href="/user/ola_adel3" className="text-style2 hover:bg-background px-[15px] py-[20px]">
                                        <FontAwesomeIcon icon={faUser} className="ml-2" />
                                        الملف الشخصي
                                    </a>
                                </li>
                                <li>
                                    <a href="/user/ola_adel3/services" className="text-style2 hover:bg-background px-[15px] py-[20px]">
                                        <FontAwesomeIcon icon={faBriefcase} className="ml-2" />
                                        الخدمات
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Edit Profile Button */}
                        <div className="mt-4 lg:mt-0">
                            <a
                                href="/account"
                                className="inline-flex font-kufi text-[14px] items-center bg-primary leading-[2] text-white px-3 py-1.5 hover:bg-primary-dark"
                            >
                                <FontAwesomeIcon icon={faSliders} className="ml-2" />
                                تعديل الملف الشخصي
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileHeader;
