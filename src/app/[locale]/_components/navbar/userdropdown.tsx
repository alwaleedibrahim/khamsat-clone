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
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function UserDropDownBox({
  userName,
}: Readonly<{ userName: string }>) {
  const t = useTranslations("UserDropDown");
  const locale = useLocale();
  const isRTL = locale === "ar";
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

  const menuItems = [
    {
      icon: FaUser,
      label: userName,
      link: `/${locale}/profile`,
      isLink: true
    },
    {
      icon: FaBookBookmark,
      label: t("myCollections"),
    },
    {
      icon: FaDollarSign,
      label: t("balance"),
    },
    {
      icon: FaSliders,
      label: t("settings"),
    },
    { isDivider: true },
    {
      icon: FaEdit,
      label: t("editAccount"),
    },
    {
      icon: FaGlobe,
      label: t("help"),
    },
    { isDivider: true },
    {
      icon: FaSignOutAlt,
      label: t("logout"),
      onClick: handleLogout,
    },
  ];

  return (
    <div className="bg-white text-[#444] py-3 px-4 w-[200px] shadow-2xl border-2 border-gray-200">
      <ul>
        {menuItems.map((item, index) => {
          if (item.isDivider) {
            return <hr key={`divider-${index}`} className="my-2" />;
          }

          const IconComponent = item.icon;
          
          const content = (
            <li
              key={index}
              onClick={item.onClick}
              className="flex items-center my-1 cursor-pointer"
            >
              <IconComponent className={isRTL ? "ml-3" : "mr-3"} />
              {item.label}
            </li>
          );

          return item.isLink ? (
            <Link key={index} href={item.link}>
              {content}
            </Link>
          ) : (
            content
          );
        })}
      </ul>
    </div>
  );
}