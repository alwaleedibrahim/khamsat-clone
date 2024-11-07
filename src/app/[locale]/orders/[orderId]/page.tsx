"use client";
import React, {
  ChangeEvent,
  useEffect,
} from "react";
import { useState } from "react";
import IOrderListItem from "../../_models/orderlist";
import { orderLoader } from "../../_lib/axios/orderListLoader";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { RootState } from "@/app/[locale]/_lib/redux/store";
import Spinner from "../../_components/reusable/spinner";
import Image from "next/image";
import { useFormatter } from "next-intl";
import axiosInstance from "../../_lib/axios/axiosInstance";
import IUserProfile from "../../_models/userProfile";
import { notFound } from "next/navigation";
import {
  createMessage,
  getMessagesByOrder,
  IMessageList,
} from "../../_lib/axios/messages";
import { FaClock } from "react-icons/fa";
import { useNotifications } from "../../NotificationProvider";
export default function Page({
  params: { orderId },
}: {
  params: { orderId: string };
}) {
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const token: string = useSelector((state) => state.auth.token) || "";
  const user: IUserProfile = useSelector((state) => state.profile.user) || "";
  const [order, setOrder] = useState<IOrderListItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relativeTime, setRelativeTime] = useState(``);
  const [role, setRole] = useState(``);
  const [price, setPrice] = useState(``);
  const [message, setMessage] = useState(``);
  const [messageList, setMessageList] = useState<IMessageList>();
  const [refreshMessages, setRefreshMessages] = useState(false);
  const {notifications} = useNotifications() 
  const format = useFormatter();
  useEffect(() => {
    orderLoader(token, orderId)
      .then((value) => {
        setOrder(value);
        setIsLoading(false);
        const rel = userRelationToOrder(
          user._id,
          value.user_id._id,
          value.items[0].service_id.userId._id
        );
        setRole(rel);
        const dateTime = new Date(value.createdAt);
        const now = new Date(Date.now());
        setRelativeTime(format.relativeTime(dateTime, { now }));
        setPrice(
          format.number(value.total, {
            currency: "USD",
            style: "currency",
            signDisplay: "auto",
            currencyDisplay: "name",
          })
        );
      })
      .catch(() => {
        setOrder(null);
        setIsLoading(false);
      });
  }, [orderId, price]);

  const handleChangeStatus = (status: { ar: string; en: string }) => {
    axiosInstance
      .patch(`orders/${orderId}`, {
        status: status,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(true);
        setPrice(``);
      })
      .catch((err) => console.log(err));
  };
  const userRelationToOrder = (
    currentUserId: string,
    buyerId: string,
    sellerId: string
  ): string => {
    if (currentUserId == buyerId) {
      return "buyer";
    } else if (currentUserId == sellerId) {
      return "seller";
    } else {
      return "none";
    }
  };
  const calculateRelativeTime = (value: string) : string => {
        const dateTime = new Date(value);
        const now = new Date(Date.now());
        return format.relativeTime(dateTime, { now })
  }
  const sendMessage = () => {
    const sender_id = user._id;
    const receiver_id: string =
      [order?.user_id._id, order?.items[0].service_id.userId._id].find(
        (id: string | undefined) => id != sender_id
      ) || ``;
    const order_id = order?._id;
    console.log({ sender_id, receiver_id, order_id, content: message });

    createMessage({ sender_id, receiver_id, order_id, content: message }, token)
      .then(() => {console.log("message sent"); setRefreshMessages(!refreshMessages); setMessage(``)})
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    if (role == "none") notFound();
  }, [role]);
  useEffect(() => {
    getMessagesByOrder(orderId, token)
      .then((value) => {
        setMessageList(value);
        console.log(value);
      })
      .catch((e) => console.log(e));
  }, [orderId, refreshMessages,notifications]);
  return (
    <div className="flex flex-col  py-[100px]">
      <div className="flex lg:flex-row flex-col w-full justify-center">
        <div className="lg:w-[65%] w-[100%] lg:p-sm-screen px-4">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <div className="bg-white font-kufi w-full mb-4 py-6 px-5">
                <h1 className="text-xl">
                  {order?.items[0].service_id.title.ar}
                </h1>
              </div>
              <div className="bg-white font-kufi w-full mb-4 py-6 px-5">
                <h5 className="p-container-space font-kufi border-b-[1px] border-[#F1F1F1]">
                  الرسائل
                </h5>
                {messageList && (
                  <div>
                    {messageList?.messages?.map((m) => (
                      <div key={m._id}>
                        <div className="flex w-100 my-3 items-center">
                          <Image
                            src={`${
                              m.sender_id.profilePicture.startsWith(
                                "http"
                              )
                                ? `${m.sender_id.profilePicture}`
                                : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${m.sender_id.profilePicture}`
                            }`}
                            height={60}
                            width={60}
                            alt=""
                            className="w-[60] h-[60] rounded-full min-w-fit px-4"
                          />
                          <div>
                            <h5>{`${m.sender_id.first_name.ar} ${m.sender_id.last_name.ar}`}</h5>
                            <span className="flex items-center text-sm text-[#444] font-naskh py-1"><FaClock  className="me-3"/>{calculateRelativeTime(m.createdAt)}</span>
                          </div>
                        </div>
                        <div className="flex w-100 my-5 items-center px-4">{m.content}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  <form>
                    <textarea
                      className="w-full h-32 p-2 border resize-none my-4"
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setMessage(e.target.value);
                      }}
                      value={message}
                    ></textarea>
                    <button
                      type="button"
                      onClick={() => {
                        sendMessage();
                      }}
                      className="flex items-center text-[14px] mx-4 px-8 py-2 w-fit font-kufi border bg-primary text-white hover:hover:bg-[#3a7d25] transition-all"
                    >
                      <span>ارسال</span>
                    </button>
                  </form>
                </div>
              </div>
              <div className=" bg-white font-kufi w-full">
                <h5 className="p-container-space font-kufi border-b-[1px] border-[#F1F1F1]">
                  إدارة الطلب
                </h5>

                <div className="p-container-space text-[14px]">
                  <h5 className="p-container-space font-kufi border-b-[1px] border-[#F1F1F1] w-full flex">
                    <span className="px-5 w-1/2">الحالة</span>
                    <span className="px-5 w-1/2">
                      {order && order?.status.ar}
                    </span>
                  </h5>
                </div>
                <div className="p-container-space text-[14px]">
                  {role == "buyer" && (
                    <div className="flex justify-end mb-5">
                      {order?.status.en == "Awaiting Instructions" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleChangeStatus({ en: "Canceled", ar: "ملغية" })
                          }
                          className="flex items-center text-[14px] mx-4 px-8 py-2 w-fit font-kufi border border-red-400 bg-red-500 text-white hover:bg-red-600 transition-all "
                        >
                          <span>الغي الطلب</span>
                        </button>
                      )}
                      {order?.status.en == "Awaiting Confirmation" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleChangeStatus({
                              en: "Deliverd",
                              ar: "تم تسليمها",
                            })
                          }
                          className="flex items-center text-[14px] mx-4 px-8 py-2 w-fit font-kufi border bg-primary text-white hover:hover:bg-[#3a7d25] transition-all "
                        >
                          <span>استلام الطلب</span>
                        </button>
                      )}
                    </div>
                  )}
                  {role == "seller" && (
                    <div className="flex justify-end mb-5">
                      {order?.status.en == "Awaiting Instructions" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleChangeStatus({
                              en: "In Progress",
                              ar: "جاري تنفيذها",
                            })
                          }
                          className="flex items-center text-[14px] mx-4 px-8 py-2 w-fit font-kufi border bg-primary text-white hover:hover:bg-[#3a7d25] transition-all "
                        >
                          <span>بدأ العمل</span>
                        </button>
                      )}
                      {order?.status.en == "In Progress" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleChangeStatus({
                              en: "Awaiting Confirmation",
                              ar: "بانتظار الاستلام",
                            })
                          }
                          className="flex items-center text-[14px] mx-4 px-8 py-2 w-fit font-kufi border bg-primary text-white hover:hover:bg-[#3a7d25] transition-all "
                        >
                          <span>طلب الاستلام</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="lg:w-[33%] lg:block w-100 lg:p-sm-screen px-4 sm:my-6 lg:my-0">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <div className="p-container-space font-kufi border-b-[1px] border-[#F1F1F1] bg-white">
                <h6 className="text-[16px] pb-6 border-b-[1px] border-[#F1F1F1]">
                  عن الطلب
                </h6>
                <div className="flex w-100 my-3">
                  <span className="w-1/2">حالة</span>
                  <span className="w-1/2">{order?.status.ar}</span>
                </div>
                <div className="flex w-100 my-3">
                  <span className="w-1/2">رقم الطلب</span>
                  <span className="w-1/2">{order?.order_number}</span>
                </div>
                <div className="flex w-100 my-3">
                  <span className="w-1/2">قيمة الطلب</span>
                  <span className="w-1/2">{price}</span>
                </div>
                <div className="flex w-100 my-3">
                  <span className="w-1/2">تاريخ الشراء</span>
                  <span className="w-1/2">{relativeTime}</span>
                </div>
              </div>
              {role == "buyer" ? (
                <div className="p-container-space font-kufi border-b-[1px] border-[#F1F1F1] bg-white">
                  <h6 className="text-[16px]">البائع</h6>
                  <div className="flex w-100 my-3 items-center">
                    <Image
                      src={`${
                        order?.items[0].service_id.userId.profilePicture.startsWith(
                          "http"
                        )
                          ? `${order?.items[0].service_id.userId.profilePicture}`
                          : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${order?.items[0].service_id.userId.profilePicture}`
                      }`}
                      height={60}
                      width={60}
                      alt=""
                      className="w-[60] h-[60] rounded-full min-w-fit px-4"
                    />
                    <h5>{`${order?.items[0].service_id.userId.first_name.ar} ${order?.items[0].service_id.userId.last_name.ar}`}</h5>
                  </div>
                </div>
              ) : (
                <div className="p-container-space font-kufi border-b-[1px] border-[#F1F1F1] bg-white">
                  <h6 className="text-[16px]">المشتري</h6>
                  <div className="flex w-100 my-3 items-center">
                    <Image
                      src={`${
                        order?.user_id.profilePicture.startsWith("http")
                          ? `${order?.user_id.profilePicture}`
                          : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${order?.user_id.profilePicture}`
                      }`}
                      height={60}
                      width={60}
                      alt=""
                      className="w-[60] h-[60] rounded-full min-w-fit px-4"
                    />
                    <h5>{`${order?.user_id.first_name.ar} ${order?.user_id.last_name.ar}`}</h5>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
