import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const UserVerifications = () => {
    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                توثيقات
            </h5>
            <div className="grid grid-cols-2 gap-4 font-kufi text-[14px] p-container-space">
                <div className="col-span-1">
                    <span>البريد الإلكتروني <FontAwesomeIcon icon="envelope" className="ml-2" /></span>

                </div>

                <div className="col-span-1">
                    <span> رقم الجوال </span>
                </div>

                <div className="col-span-1">
                    <span> الهوية الشخصية</span>
                </div>
            </div>
        </div>
    )
}

export default UserVerifications