import React, { SetStateAction } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Upgrade } from '../../_lib/upgardes';

interface UpgradeServiceInputsProps {
  setUpgrades: React.Dispatch<React.SetStateAction<(Upgrade[])>>
  index: number;
}

const UpgradeService: React.FC<UpgradeServiceInputsProps> = ({ index, setUpgrades }) => {
    const handleRemove = () =>{
        
    }
  return (
    <form id={`upgrade_service_inputs_${index}`} className="mb-8 p-4 border-none bg-[#f7f9fc]">
        <div className="remove_upgrade mb-2 relative w-full">
            <a href="#" className="remove_upgrade_btn rounded-full text-style2 absolute -top-[25px] -left-[25px]">
                <FaTimes />
            </a>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name={`service_upgrade_title_${index}`}
          className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
          maxLength={100}
          placeholder="العنوان بالعربية"
        />
        <p className="c-form__hb text-sm mt-2 text-gray-600">
          <span>تطويرات الخدمة المقدمة اختيارية فقط ولا يمكن أن تجبر المشتري على طلبها. </span>
          <a href="/service-upgrades" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            اعرف طريقة استخدامها بشكل صحيح
          </a>
        </p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name={`service_upgrade_title_${index}`}
          className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
          maxLength={100}
          placeholder="Title in English"
        />
        <p className="c-form__hb text-sm mt-2 text-gray-600">
        <span className="ml-2">Service upgrades are optional and you cannot force the buyer to request them.</span>
        <a href="/service-upgrades" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
        Learn how to use them correctly
        </a>
      </p>
      </div>

      <div className="mb-4">
        <div className="c-form__select">
          <select
            id={`service_upgrade_price_${index}`}
            name={`service_upgrade_price_${index}`}
            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
            >
            <option value="5" selected>
              مقابل 5 دولار اضافة لسعر الخدمة
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="u-margin-bottom">
          <div className="c-form__select">
            <select
              id={`service_upgrade_days_change_${index}`}
              name={`service_upgrade_days_change_${index}`}
              className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
              >
              <option value="add" selected>
                سيزيد من مدة تنفيذ الخدمة
              </option>
            </select>
          </div>
        </div>

        <div className="u-margin-bottom">
          <div className="c-form__select">
            <select
              id={`service_upgrade_days_${index}`}
              name={`service_upgrade_days_${index}`}
              className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
              >
              <option value="01" selected>
                يوم واحد
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpgradeService;
