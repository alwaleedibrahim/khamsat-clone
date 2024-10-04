"use client"
import React, { useState } from 'react';

export interface AdditionalService {
    id: string;
    title: string;
    price: number;
    duration: string;
    description: string;
}

interface AdditionalServicesProps {
    upgrades: AdditionalService[];
}

const AdditionalServices: React.FC<AdditionalServicesProps> = ({ upgrades }) => {
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

    const handleCheckboxChange = (id: string) => {
        // Toggle the checkbox state
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                تطويرات متوفرة لهذه الخدمة
            </h5>

            <div>
                <table id="service_upgrades_table" className="w-full">
                    <colgroup>
                        <col className="u-checkbox-col" />
                        <col width="auto" />
                    </colgroup>
                    <tbody>
                        {upgrades.map((upgrade) => (
                            <tr key={upgrade.id} className='font-kufi block p-container-space border-b-[1px] border-[#F1F1F1]'>
                                <td className="align-top pt-[3px] pl-[10px]">
                                    <label htmlFor={upgrade.id} className="u-no--margin">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            id={upgrade.id}
                                            name="service_upgrade_check"
                                            value={upgrade.id}
                                            checked={!!checkedItems[upgrade.id]}
                                            onChange={() => handleCheckboxChange(upgrade.id)}
                                        />
                                            {/* FontAwesome Icon */}
                                            <span
                                                className={`text-lg transition-opacity duration-200 ${checkedItems[upgrade.id] ? 'block text-primary' : 'hidden'}`}
                                                style={{ fontFamily: 'FontAwesome' }}
                                            >
                                                &#xf14a; 
                                            </span>
                                            <span
                                                className={`text-lg transition-opacity duration-200 ${!checkedItems[upgrade.id] ? 'block text-gray-500' : 'hidden'}`}
                                                style={{ fontFamily: 'FontAwesome' }}
                                            >
                                                &#xf096;
                                            </span>

                                    </label>
                                </td>
                                <td className="checkable details-td">
                                    <h3 className="text-[14px] leading-[1.5em] mt-[5px] mb-[10px]">{upgrade.title}</h3>
                                    <div>
                                        <span className="hidden" data-price={upgrade.price}>
                                            {upgrade.price}
                                        </span>
                                        <span className="number hidden">{upgrade.duration}</span>
                                        <p className='text-[14px] text-[#777] font-naskh'>{upgrade.description}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdditionalServices;
