import React from "react";
import IOrderListItem from "../../_models/orderlist";
import { useFormatter, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaDollarSign, FaInfoCircle, FaUserAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function OrderHeader({ item }: { item: IOrderListItem }) {
  const localActive = useLocale();
  const format = useFormatter();
  const dateTime = new Date(item.createdAt);
  const now = new Date(Date.now());
  const relativeTime = format.relativeTime(dateTime, { now });
  const pathname = usePathname()
  const show = pathname.includes('purchases') ? `orders` : `sales`
  const user = show == `orders`? item.items[0].service_id.userId : item.user_id
  return (
    <div className="bg-white py-7 px-12 mb-10 flex font-kufi items-center">
      <div className="pe-5">
        <Image
          src={`${user.profilePicture.startsWith('http')? `${user.profilePicture}`:`${process.env.NEXT_PUBLIC_API_BASE_URL}/${user.profilePicture}`}`}
          height={60}
          width={60}
          alt=""
          className="w-[60] h-[60] rounded-full min-w-fit"
        />
      </div>
      <div>
        <div>
          <Link href={`/orders/${item._id}`} className="hover:text-primary text-[#444] font-bold">
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
              ? user.first_name.ar
              : user.first_name.en}{" "}
            {localActive == "ar"
              ? user.last_name.ar
              : user.last_name.en}
          </div>
          <div className={`mx-2 flex items-center ${localActive == 'en'? `flex-row-reverse`: ``}`}>
            <span className="me-2">
              <FaDollarSign />
            </span>
            {item.total}
          </div>
          <div className="mx-2 flex items-center">
            <span className="me-2">
              <FaInfoCircle />
            </span>
            {localActive == "ar"? item.status.ar : item.status.en}
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
