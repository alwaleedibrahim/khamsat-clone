import { useTranslations } from 'next-intl'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const UserVerifications = () => {
    const t = useTranslations("ProfilePage.Profile")

    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                {t('verifications.title')}
            </h5>
            <div className="grid grid-cols-2 gap-4 font-kufi text-[14px] p-container-space">
                <div className="col-span-1 flex items-center gap-2">
                    <span><FaCheck className='text-primary'/></span><span>{t('verifications.email')}</span>
                </div>

                <div className="col-span-1 flex items-center gap-2">
                    <span><FaXmark className='font-bold text-style2'/></span><span>{t('verifications.phone_number')}</span>
                </div>

                <div className="col-span-1 flex items-center gap-2">
                    <span><FaCheck className='text-primary'/></span><span>{t('verifications.personal_id')}</span>
                </div>
            </div>
        </div>
    )
}

export default UserVerifications