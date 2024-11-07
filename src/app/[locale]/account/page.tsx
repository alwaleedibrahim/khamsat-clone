"use client";
import { ChangeEvent, FormEvent } from "react";
import { FaCog, FaUser } from "react-icons/fa";
import { FieldError, useForm } from "react-hook-form";
import React, { useState } from "react";
import styles from "./account.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { AppDispatch, RootState } from "@/app/[locale]/_lib/redux/store";
import { getProfile } from "../_lib/redux/slice/profileSlice";
import IUserProfile from "../_models/userProfile";

interface AccountFormData {
  email: string;
  password: string;
  nameAr: string;
  nameEn: string;
  username: string;
  familyNameAr: string;
  familyNameEn: string;
  terms: boolean;
}

export default function ProfilePage() {
  const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  const token: string = useSelector((state) => state.auth.token) || "";
  const user: IUserProfile = useSelector((state) => state.profile.user);
  const [activeTab, setActiveTab] = useState(`account`);
  const t = useTranslations("RegisterPage");
  const [profilePic, setProfilePic] = useState<null | File>(null);
  const [preview, setPreview] = useState(
    user?.profilePicture?.startsWith("http")
      ? user?.profilePicture
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${user?.profilePicture}`
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [termsAccepted, setTermsAccepted] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfilePic(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const onSubmit = async (data: AccountFormData) => {
    setIsSubmitting(true);
    try {
      const payload = {
        email: data.email,
        password: data.password,
        username: data.username,
        first_name: {
          en: data.nameEn,
          ar: data.nameAr,
        },
        last_name: {
          en: data.familyNameEn,
          ar: data.familyNameAr,
        },
      };
      if (profilePic) {
        const formData = new FormData();
        formData.append("profilePicture", profilePic);
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${user?._id}`, {
          method: "PATCH",
          headers: {
            Authorization: token,
          },
          body: formData,
        })
          .then((res) =>
            console.log(
              "image uploaded",
              res.json().then((v) => {
                console.log(v);
                dispatch(getProfile(token));
              })
            )
          )
          .catch((e) => console.log(e));
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${user?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Edit profile failed");
      }

      const result = await response.json();
      if (!result) {
        throw new Error("Edit profile failed");
      }
      dispatch(getProfile(token));
      toast.success("تم تعديل بيانات حسابك بنجاح");
      router.push("/profile");
    } catch (error) {
      console.log("Edit Profile failed", error);
      toast.error("فشل تعديل بيانات الحساب");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 md:p-8">
      {/* Main Content */}
      <div className="p-section shadow-sm font-kufi">
        {/* Right Sidebar */}
        <div className="mb-6 flex flex-col md:flex-row justify-evenly">
          <div className=" mb-6 md:mb-0 md:w md:w-1/3 mx-4">
            <div className="bg-white space-y-4 my-3 p-5">
              <h2 className="font-bold">إعدادات</h2>
              <div className="space-y-2">
                <div
                  className={`p-2 border-b flex ${
                    activeTab == `account` ? `bg-primary text-white` : ``
                  }`}
                  onClick={() => {
                    setActiveTab("account");
                  }}
                >
                  <FaCog className="ms-2 my-3" />
                  <span className="m-2.5">المعلومات الشخصية</span>
                </div>
                <div
                  className={`font-semibold ${
                    activeTab == `profile` ? `bg-primary text-white` : ``
                  } p-2  flex`}
                  onClick={() => {
                    setActiveTab("profile");
                  }}
                >
                  <FaUser className="ms-2 my-3" />
                  <span className="m-2.5">الملف الشخصي</span>
                </div>

                <div className="p-2 border-b flex">
                  <span className="ms-2 my-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="20px"
                      width="18px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"></path>
                    </svg>
                  </span>
                  <span className="m-2.5">المزيد</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form Area */}
          {activeTab == "profile" ? (
            <div className="md:w-3/4 p-3 max-w-xl">
              <form
                className="space-y-6 w-fit"
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                }}
              >
                <div className="space-y-4">
                  <div className="flex ">
                    <h3>نوع الحساب</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="accountType" id="customer" />
                      <label htmlFor="customer">مشتري</label>
                      <span className="text-gray-500 text-sm">
                        (أبحث عن خدمات لشرائها)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="accountType" id="seller" />
                      <label htmlFor="seller">بائع</label>
                      <span className="text-gray-500 text-sm">
                        (أبيع خدماتي على المنصة)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex">
                    <h3>المسمى الوظيفي</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input className="w-full  border border-gray-300 p-2" />
                  <label className="text-[#444] font-naskh">
                    أدخل مسمى وظيفي مثل: مهندس معماري
                  </label>
                </div>

                <div className="space-y-4">
                  <h3>النبذة التعريفية</h3>
                  <textarea
                    className="w-full  border border-gray-300 p-2"
                    rows={6}
                  />
                  <p className="text-sm text-gray-500">
                    المعلومات التي ستظهر في صفحة خاصة باقي المستخدمين. لا تدخل
                    رقم جوال أو وسائل تواصل خارجية
                  </p>
                </div>

                <button className="bg-primary font-kufi text-white px-[24px] py-[12px] hover:bg-[#3a7d25] transition-all">
                  حفظ
                </button>
              </form>
            </div>
          ) : (
            <div className="md:w-3/4 p-3 max-w-xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 bg-[#f7f9fc] px-[30px]"
                noValidate
              >
                <div
                  className={`${styles.form_group}  grid justify-center gap-[30px]`}
                >
                  <label
                    htmlFor="fileInput"
                    className="profile-pic-wrapper relative cursor-pointer mb-4"
                  >
                    <Image
                      src={preview}
                      alt="Current Profile"
                      className="profile-pic rounded-full m-auto"
                      width={200}
                      height={200}
                    />
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg">
                        أضغط لتحميل صورة
                      </span>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                <div
                  className={`${styles.form_group}  grid lg:grid-cols-2 gap-[30px]`}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[14px] text-style1 mb-[10px] block"
                    >
                      الاسم
                    </label>
                    <input
                      {...register("nameAr", {
                        required: t("validation.nameRequired"),
                      })}
                      defaultValue={user?.first_name?.ar}
                      type="text"
                      id="name"
                      placeholder={t("form.namePlaceholder")}
                      required
                      className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                    />
                    {errors.nameAr && (
                      <p className="text-red-500 text-sm mt-1">
                        {(errors.nameAr as FieldError)?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="text-[14px] text-style1 mb-[10px] block"
                    >
                      اسم العائلة
                    </label>
                    <input
                      {...register("familyNameAr", {
                        required: t("validation.familyNameRequired"),
                      })}
                      type="text"
                      id="name"
                      defaultValue={user?.last_name?.ar}
                      placeholder={t("form.familyNamePlaceholder")}
                      required
                      className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                    />
                    {errors.familyNameAr && (
                      <p className="text-red-500 text-sm mt-1">
                        {(errors.familyNameAr as FieldError)?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`${styles.form_group}  grid lg:grid-cols-2 gap-[30px]`}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[14px] text-style1 mb-[10px] block"
                    >
                      Name
                    </label>
                    <input
                      {...register("nameEn", {
                        required: t("validation.nameRequired"),
                      })}
                      type="text"
                      id="name"
                      defaultValue={user?.first_name?.en}
                      placeholder={t("form.namePlaceholder")}
                      required
                      className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                    />
                    {errors.nameEn && (
                      <p className="text-red-500 text-sm mt-1">
                        {(errors.nameEn as FieldError)?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="text-[14px] text-style1 mb-[10px] block"
                    >
                      Family Name
                    </label>
                    <input
                      {...register("familyNameEn", {
                        required: t("validation.familyNameRequired"),
                      })}
                      type="text"
                      id="name"
                      defaultValue={user?.last_name?.en}
                      placeholder={t("form.familyNamePlaceholder")}
                      required
                      className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                    />
                    {errors.familyNameEn && (
                      <p className="text-red-500 text-sm mt-1">
                        {(errors.familyNameEn as FieldError)?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`${styles.form_group}  grid lg:grid-cols-2 gap-[30px]`}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[14px] text-style1 mb-[10px] block"
                    >
                      اسم المستخدم
                    </label>
                    <input
                      {...register("username", {
                        required: t("validation.nameRequired"),
                      })}
                      type="text"
                      id="name"
                      defaultValue={user?.username}
                      placeholder={t("form.namePlaceholder")}
                      required
                      className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm mt-1">
                        {(errors.username as FieldError)?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-[30px]">
                  <label
                    htmlFor="password"
                    className="text-[14px] text-style1 mb-[10px] block"
                  >
                    {t("form.password")}
                  </label>
                  <input
                    {...register("password", {
                      required: t("validation.passwordRequired"),
                      pattern: {
                        value:
                          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,}$/,
                        message: t("validation.notValid"),
                      },
                      minLength: {
                        value: 8,
                        message: t("validation.password_min_length"),
                      },
                    })}
                    type="password"
                    id="password"
                    placeholder={t("validation.passwordRequired")}
                    required
                    className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {(errors.password as FieldError)?.message}
                    </p>
                  )}
                </div>

                <div className="my-[30px]">
                  <div className="field checkbox c-checkbox"></div>
                  {errors.terms && ( // عرض رسالة الخطأ إذا كانت الشروط غير محددة
                    <p className="text-red-500 text-sm mt-1">
                      {(errors.terms as FieldError)?.message}
                    </p>
                  )}
                </div>
                <div
                  className={`${styles.form_group} grid lg:grid-cols-[175px_minmax(900px,_1fr)_100px]  mb-[10px]`}
                >
                  <button
                    type="submit"
                    className="text-white font-[400] w-[100%] hover:opacity-75 rounded-0 bg-[#2caae2] text-[14px] py-[12px] px-[21px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? " جاري الحفظ " : "حفظ"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
