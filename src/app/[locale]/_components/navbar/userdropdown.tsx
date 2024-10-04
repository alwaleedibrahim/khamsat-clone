import React from "react";
import { FaDollarSign, FaEdit, FaGlobe, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaBookBookmark, FaSliders } from "react-icons/fa6";

export default function UserDropDownBox() {
  return (
    <div className=" bg-white text-[#444] py-3 px-4 w-[200px] shadow-2xl border-2 border-gray-200">
      <ul>
        <li className="flex items-center my-1"><FaUser className="me-3"/>user_name</li>
        <li className="flex items-center  my-1"><FaBookBookmark className="me-3" />مجموعاتي</li>
        <li className="flex items-center  my-1"><FaDollarSign className="me-3"/>الرصيد</li>
        <li className="flex items-center  my-1"><FaSliders className="me-3"/>الإعدادات</li>
        <hr />
        <li className="flex items-center  my-1"><FaEdit className="me-3"/>تعديل الحساب</li>
        <li className="flex items-center  my-1"><FaGlobe className="me-3"/>المساعدة</li>
        <hr />
        <li className="flex items-center  my-1"><FaSignOutAlt className="me-3"/>خروج</li>
      </ul>
    </div>
  );
}
