"use client"
import { useLocale } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpgradesById } from '../../store/reducers/upgrades';

interface AdditionalServicesProps {
    serviceId: string;
}

const AdditionalServices: React.FC<AdditionalServicesProps> = ({ serviceId }) => {
    const dispatch = useDispatch();
    const upgrades = useSelector((state) => state.additionalServices.upgrades);
    const loading = useSelector((state) => state.additionalServices.loading);
    const error = useSelector((state) => state.additionalServices.error);
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
    const localActive = useLocale();

    useEffect(() => {
        dispatch(fetchUpgradesById(serviceId));
    }, [dispatch, serviceId]);

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
            {error && <p className="text-red-500">{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {upgrades.length > 0 ? (
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
                                                        padding: 0,
                                                        height: checkedItems[upgrade._id] ? '17px' : '14px',
                                                        borderRadius: '3px',
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
                    ) : (
                        <p>{localActive === "ar" ? "لا يوجد تطورات لهذه الخدمة" : "no upgrades for this service"}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdditionalServices;