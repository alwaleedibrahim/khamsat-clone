"use client"
import { useLocale } from 'next-intl';
import React, { useState } from 'react';
import Upgardes from './Upgrades';

export interface AdditionalService {
    _id: string;
    title: {
        ar: string;
        en: string
    };
    price: number;
    duration: string;
    description: string;
    createdAt: string,
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
    console.log(upgrades)
    return (
        <div className="bg-white">
            <h5 className='py-[14px] px-[20px] font-kufi border-b-[1px] border-[#F1F1F1]'>
                تطويرات متوفرة لهذه الخدمةsss
            </h5>

            {upgrades.length > 0 ? (
               <Upgardes upgrades={upgrades}/>
            ) : (
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
