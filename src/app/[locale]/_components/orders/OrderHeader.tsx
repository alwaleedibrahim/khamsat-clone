import React from "react";
import IOrderListItem from "../../_models/orderlist";
import { useFormatter, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaDollarSign, FaInfoCircle, FaUserAlt } from "react-icons/fa";

export default function OrderHeader({ item }: { item: IOrderListItem }) {
  const localActive = useLocale();
  const format = useFormatter();
  const dateTime = new Date(item.createdAt);
  const now = new Date(Date.now());
  const relativeTime = format.relativeTime(dateTime, { now });
  const profilePicture = `${item.items[0].service_id.userId.profilePicture}`
  return (
    <div className="bg-white w-fit py-7 px-12 my-5 flex font-kufi items-center">
      <div className="pe-5">
        <Image
          src={`${profilePicture.startsWith('http')? `${profilePicture}`:`${process.env.NEXT_PUBLIC_API_BASE_URL}/${profilePicture}`}`}
          height={60}
          width={60}
          alt=""
          className="w-[60] h-[60] rounded-full min-w-fit"
        />
      </div>
      <div>
        <div>
          <Link href={``} className="hover:text-primary text-[#444] font-bold">
            {localActive == "ar"
              ? item.items[0].service_id.title.ar
              : item.items[0].service_id.title.en}
          </Link>
        </div>
        <div className="flex pt-3 text-sm text-gray-600 items-center">
          <div className="me-4 flex items-center">
            <span className="me-2">
              <FaUserAlt />
            </span>
            {localActive == "ar"
              ? item.items[0].service_id.userId.first_name.ar
              : item.items[0].service_id.userId.first_name.en}{" "}
            {localActive == "ar"
              ? item.items[0].service_id.userId.last_name.ar
              : item.items[0].service_id.userId.last_name.en}
          </div>
          <div className="mx-2 flex items-center">
            <span className="me-2">
              <FaDollarSign />
            </span>
            {item.total}
          </div>
          <div className="mx-2 flex items-center">
            <span className="me-2">
              <FaInfoCircle />
            </span>
            {item.status}
          </div>
          <div className="mx-2 flex items-center">
            <span className="me-2">
              <FaClock />
            </span>
            {relativeTime}
          </div>
        </div>
      </div>
    </div>
  );
}
