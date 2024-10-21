import { useState } from 'react';
import { useLocale } from 'next-intl';

export interface AdditionalService {
  _id: string;
  title: { ar: string; en: string };
  price: number;
  duration: string;
  description: string;
}

interface AdditionalServicesProps {
  upgrades: AdditionalService[];
  onUpgradeChange: (price: number) => void;
}

const Upgardes: React.FC<AdditionalServicesProps> = ({ upgrades, onUpgradeChange }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const localActive = useLocale();

  const handleCheckboxChange = (upgrade: AdditionalService) => {
    const isChecked = !!checkedItems[upgrade._id];

    // تتبع التغييرات باستخدام console.log
    console.log('Before:', isChecked, checkedItems);

    setCheckedItems((prev) => ({
      ...prev,
      [upgrade._id]: !isChecked, // عكس حالة الـ checkbox
    }));

    console.log('After:', !isChecked);

    // تحديث السعر بناءً على الحالة الجديدة
    if (!isChecked) {
      onUpgradeChange(upgrade.price); // إضافة السعر إذا تم التحديد
    } else {
      onUpgradeChange(-upgrade.price); // خصم السعر إذا تم إلغاء التحديد
    }
  };

  return (
    <table className="w-full">
      <tbody>
        {upgrades.map((upgrade) => (
          <tr key={upgrade._id} className="font-kufi block p-container-space border-b-[1px] border-[#F1F1F1]">
            <td className="align-top pt-[3px] pl-[10px]">
              <label htmlFor={upgrade._id} className="u-no--margin">
                <input
                  type="checkbox"
                  id={upgrade._id}
                  checked={!!checkedItems[upgrade._id]} // استخدم checked لضبط حالة الـ checkbox
                  onChange={() => handleCheckboxChange(upgrade)} // ربط الحدث مع الوظيفة
                />
              </label>
            </td>
            <td className="checkable details-td">
              <h3 className="text-[14px]">{localActive === 'ar' ? upgrade.title.ar : upgrade.title.en}</h3>
              <p className="p-features mt-[2px]">{localActive === 'ar' ? upgrade.description : upgrade.description}</p>
            </td>
            <td className="price-td">
              <p>{upgrade.price} $</p>
              <span>{upgrade.duration}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Upgardes;
