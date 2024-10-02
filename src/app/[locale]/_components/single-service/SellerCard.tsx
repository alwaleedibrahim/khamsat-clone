import React from 'react'
import ButtonB from '../reusable/buttons/ButtonB'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const SellerCard = () => {
    return (
        <div className='bg-white p-container-space font-kufi'>
            <h6 className='text-[16px]'>صاحب الخدمة</h6>
            <div className='flex mt-2 items-center justify-between'>
                <div className="col-span-8">
                    <div className="flex justify-end pr-0">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-center pl-[5px]">
                                        <a href="/user/khaled_m2" >
                                            <div className="relative w-[64px] h-[64px]">
                                                <img
                                                    className="rounded-full border border-gray-300 w-full h-full"
                                                    src="/images/services/97fe064c7ef498b3fc5183f1c59626fa.png"
                                                    alt="Khaled M"
                                                />
                                                <Image
                                                    src="/images/services/verfied.svg"
                                                    width={16}
                                                    height={16}
                                                    className="absolute bottom-0 right-0 w-6 h-6"
                                                    alt="Verified Badge"
                                                    title="هوية موثقة"
                                                />
                                            </div>
                                        </a>
                                    </td>
                                    <td className="p-2">
                                        <h3>
                                            <a className="block text-md text-style1 mb-1.5" href="/user/khaled_m2">
                                                .Khaled M
                                            </a>
                                        </h3>
                                        <ul className="text-sm text-style2">
                                            <li className="flex items-center">
                                                <FontAwesomeIcon icon={faUser} className='ml-1 text-[12px] '/> بائع مميز
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <ButtonB text='تواصل معي' extraStyle='px-2 py-0 text-[14px]'/>
                </div>
            </div>
        </div>
    )
}

export default SellerCard