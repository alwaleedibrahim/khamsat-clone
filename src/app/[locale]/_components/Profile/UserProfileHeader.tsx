// components/UserProfileHeader.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle, faBriefcase, faSliders } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { RootState } from '../../_lib/redux/store';
import { TypedUseSelectorHook, useSelector as  useReduxSelector} from 'react-redux';
import IUserProfile from '../../_models/userProfile';

interface UserProfileHeaderProps {
    activeTab: string;
    handleActiveTab: (e: React.MouseEvent<HTMLElement>) => void;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({ handleActiveTab, activeTab }) => {

    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const user : IUserProfile = useSelector((state)=> state.profile.user)
    const t = useTranslations("ProfilePage.Header")
    return (
        <div className="bg-white pt-[100px]">
            <div className="mx-auto">
                <div className="text-center">
                    {/* Profile Picture */}
                    <div className="relative inline-block">
                        <Image
                            className="rounded-full shadow-md"
                            src={user.profilePicture?.includes("https://")?user.profilePicture:`${process.env.NEXT_PUBLIC_API_BASE_URL}/${user.profilePicture}`}
                            width={128}
                            height={128}
                            alt="User Avatar"
                        />
                    </div>

                    {/* Username and Status */}
                    <div className='flex justify-center'>
                        <h1 className="text-[26px]">
                            {`${user.first_name?.ar} ${user.last_name?.ar}`}
                        </h1>
                        <span className="m-2.5">
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
                            <FontAwesomeIcon icon={faUser} className="mx-2" />
                            <span className='font-kufi'>مستخدم جديد</span>
                        </li>
                    </ul>
                </div>

                {/* Navigation Tabs */}
                <div className="mt-6">
                    <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center">
                        <div className="flex-1 lg:-mb-[30px] lg:p-container-space">
                            <ul className="flex text-md pb-[23.5px] lg:pb-0 lg:border-none font-kufi border-b border-background overflow-visible w-[100%]">
                                <li>
                                    <a href="#" className={`text-style2 ${activeTab === 'profile'? "lg:bg-background lg:border-none border border-r-[#eaeaea] border-b-white border-t-[#eaeaea] border-l-[#eaeaea]" : "" } px-[15px] py-[20px]`} data-tab="profile" onClick={handleActiveTab}>
                                        <FontAwesomeIcon icon={faUser} className="mx-2" />
                                        {t('profileTab')}
                                    </a>
                                </li>
                                <li>
                                    <a href="#"  className={`text-style2 ${activeTab === 'services'? "lg:bg-background lg:border-none border border-r-[#eaeaea] border-l-[#eaeaea] border-t-[#eaeaea] border-b-white" : "" } px-[15px] py-[20px]`} data-tab="services" onClick={handleActiveTab}>
                                        <FontAwesomeIcon icon={faBriefcase} className="mx-2" />
                                        {t('servicesTab')}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Edit Profile Button */}
                        <div className="my-8 lg:my-0 p-container-space">
                            <a
                                href="/account"
                                className="inline-flex font-kufi text-[14px] items-center bg-primary leading-[2] text-white px-3 py-1.5 hover:bg-primary-dark"
                            >
                                <FontAwesomeIcon icon={faSliders} className="mx-2" />
                                {t('EditTab')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileHeader;
