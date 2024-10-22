"use client"
import { useLocale } from 'next-intl';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

export interface AdditionalService {
    _id: string;
    title: {
        ar: string;
        en: string;
    };
    price: number;
    deliveryTime: number;
    createdAt: string;
    checked: boolean;
}

interface AdditionalServicesProps {
    upgrades: AdditionalService[];
}

const AdditionalServices: React.FC<AdditionalServicesProps> = ({ upgrades }) => {
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
    const localActive = useLocale();

    const handleCheckboxChange = (_id: string) => {
        setCheckedItems((prev) => ({
            ...prev,
            [_id]: !prev[_id],
        }));
    };

    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                تطويرات متوفرة لهذه الخدمة
            </h5>

            {upgrades.length > 0 ? (
                <div>
                    <table id="service_upgrades_table" className="w-full">
                        <colgroup>
                            <col className="u-checkbox-col" />
                            <col width="auto" />
                        </colgroup>
                        <tbody>
                            {upgrades.map((upgrade) => (
                                <tr key={upgrade._id} className='font-kufi block p-container-space border-b-[1px] border-[#F1F1F1]'>
                                    <td className="align-top pt-[3px] pl-[10px]">
                                        <label htmlFor={upgrade._id} className="u-no--margin">
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                id={upgrade._id}
                                                name="service_upgrade_check"
                                                value={upgrade._id}
                                                checked={!!checkedItems[upgrade._id]}
                                                onChange={() => handleCheckboxChange(upgrade._id)}
                                            />
                                            <FontAwesomeIcon
                                                icon={checkedItems[upgrade._id] ? faCheckSquare : faSquare}
                                                className="text-lg transition-opacity duration-200"
                                                style={{
                                                    marginTop: 9,
                                                    padding:0,
                                                    height: checkedItems[upgrade._id] ? '17px' :'14px',
                                                    borderRadius:'3px',
                                                    color: checkedItems[upgrade._id] ? '#52b035' : '#fff',
                                                    border: checkedItems[upgrade._id] ? 'none' : '1.5px solid #777',
                                                }}
                                            />
                                        </label>
                                    </td>
                                    <td className="checkable details-td">
                                        <h3 className="text-[14px] leading-[1.5em] mt-[5px] mb-[10px]">
                                            {localActive === "ar" ? upgrade.title.ar : upgrade.title.en}
                                        </h3>
                                        <div>
                                            <p className='text-[14px] text-[#777] font-naskh'>
                                                مقابل {upgrade.price}$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ {upgrade.deliveryTime}.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>) : (
                <>
                    {localActive === "ar" ? (
                        <p>
                            لا يوجد تطورات  لهذه الخدمة
                        </p>
                    ) : (
                        <p>
                            no upgrades for this service
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default AdditionalServices;
