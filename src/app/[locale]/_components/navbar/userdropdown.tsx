import React from "react";
import {
  FaDollarSign,
  FaEdit,
  FaGlobe,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { FaBookBookmark, FaSliders } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { logout } from "../../_lib/redux/slice/authSlice";
import Link from "next/link";

export default function UserDropDownBox({
  userName,
}: Readonly<{ userName: string }>) {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        dispatch(logout());
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className=" bg-white text-[#444] py-3 px-4 w-[200px] shadow-2xl border-2 border-gray-200">
      <ul>
        <li className="flex items-center my-1">
          <Link href={`/ar/profile`} className="flex items-center">
            <FaUser className="me-3" />
            {userName}
          </Link>
        </li>
        <li className="flex items-center  my-1">
          <FaBookBookmark className="me-3" />
          مجموعاتي
        </li>
        <li className="flex items-center  my-1">
          <FaDollarSign className="me-3" />
          الرصيد
        </li>
        <li className="flex items-center  my-1">
          <FaSliders className="me-3" />
          الإعدادات
        </li>
        <hr />
        <li className="flex items-center  my-1">
          <FaEdit className="me-3" />
          تعديل الحساب
        </li>
        <li className="flex items-center  my-1">
          <FaGlobe className="me-3" />
          المساعدة
        </li>
        <hr />
        <li
          onClick={() => {
            handleLogout();
          }}
          className="flex items-center  my-1"
        >
          <FaSignOutAlt className="me-3" />
          خروج
        </li>
      </ul>
    </div>
  );
}
