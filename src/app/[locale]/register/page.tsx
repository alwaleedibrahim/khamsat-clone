"use client";

import { FieldError, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faWindows } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import styles from "./register.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { login } from "../_lib/redux/slice/authSlice";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { useLocale, useTranslations } from "next-intl";
import 'react-toastify/dist/ReactToastify.css';
import { getProfile } from "../_lib/redux/slice/profileSlice";
import { AppDispatch } from "../_lib/redux/store";

interface RegisterFormData {
  email: string;
  password: string;
  name: string;
  familyName: string;
  terms: boolean;
}
const Register: React.FC = () => {
  const mediaItems = [
    {
      id: 1,
      title: "أنا",
      title_en: "Ana",
      sub: "ركز على أهدافك وتابع ما يهمك حقاً",
      sub_en: "Focus on your goals and pursue what truly matters to you",
      brand: "/images/brands/ana.jpeg",
    },
    {
      id: 2,
      title: "مستقل",
      title_en: "Mostaql",
      sub: "منصّة العمل الحر العربية",
      sub_en: "The Arabic freelance platform",
      brand: "/images/brands/mostaql.jfif",
    },
    {
      id: 3,
      title: "خمسات",
      title_en: "Khamsat",
      sub: "سوق بيع وشراء الخدمات المصغّرة",
      sub_en: "Marketplace for buying and selling microservices",
      brand: "/images/brands/khamsat.png",
    },
    {
      id: 4,
      title: "بيكاليكا",
      title_en: "Picalica",
      sub: "أفضل المنتجات الرقمية الجاهزة",
      sub_en: "The best ready-made digital products",
      brand: "/images/brands/picalica.jfif",
    },
    {
      id: 5,
      title: "بعيد",
      title_en: "Baaeed",
      sub: "وظّف عن بعد",
      sub_en: "Hire remotely",
      brand: "/images/brands/baaeed.jpg",
    },
    {
      id: 6,
      title: "زيتون",
      title_en: "Zaetoon",
      sub: "برنامج خدمة العملاء الأكثر بساطة",
      sub_en: "The simplest customer service program",
      brand: "/images/brands/zaetoon.jpg",
    },
    {
      id: 7,
      title: "أكاديمية حسوب",
      title_en: "Hsoub Academy",
      sub: "تعلّم وطوّر مهاراتك",
      sub_en: "Learn and develop your skills",
      brand: "/images/brands/academy.png",
    },
    {
      id: 8,
      title: "موسوعة حسوب",
      title_en: "Hsoub Wiki",
      sub: "مرجع المطورين العرب",
      sub_en: "The reference for Arab developers",
      brand: "/images/brands/wiki.png",
    },
    {
      id: 9,
      title: "حسوب I/O",
      title_en: "Hsoub I/O",
      sub: "ناقش أشخاصًا بنفس اهتماماتك",
      sub_en: "Discuss with people of similar interests",
      brand: "/images/brands/io.png",
    },
  ];
  
  const t = useTranslations('RegisterPage');
  const localActive = useLocale();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    try {
      const payload = {
        email: data.email,
        password: data.password,
        username: "",
        account_type: "seller",
        first_name: {
          en: data.name,
          ar: data.name
        },
        last_name: {
          en: data.familyName,
          ar: data.familyName
        }
      };
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      dispatch(login(result.data.token)); // Use the token received backend
      toast.success(t("success.accountCreated"));
      setTimeout(() => router.push("/"), 2000); //make user redirected to home page
    } catch (error) {
      console.log("Registration failed", error);
      toast.error(t("errors.registrationFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  // const [formData, setFormData] = useState({});

  return (
    <div className="min-h-screen flex flex-col bg-[#eceff4]">
      <div className="flex flex-col lg:flex-row justify-center mx-auto mt-[140px] max-w-[1136px] bg-white p-[70px]">
        <div
          className={`${styles.custom_container} lg:w-[60%] w-[90%] pl-[30px] font-kufi`}
        >
          <h1 className="text-2xl text-style1 mb-[40px] ">{t("title")}</h1>

          <div className={`text-center grid lg:grid-cols-2 gap-[30px]`}>
            <div>
              <a
                href="/"
                className={`bg-[#dd4b39]  text-white flex items-center justify-center py-[12px] px-[21px] gap-3`}
              >
                <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "26px" }} />
                <span className="text-[14px]">{t("socialLogin.google")}</span>
              </a>
            </div>

            <div>
              <a
                href="/"
                className={`bg-[#0f4bac] text-white flex items-center justify-center py-[12px] px-[21px] gap-3`}
              >
                <FontAwesomeIcon
                  icon={faWindows}
                  style={{ fontSize: "26px" }}
                />
                <span className="text-[14px]">{t("socialLogin.microsoft")}</span>
              </a>
            </div>
          </div>

          <hr className={`${styles.hr_text}`} data-content={t("or")} />

          {/* registeration form */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-[#f7f9fc] py-[40px] px-[30px]"
            noValidate
          >
            <div
              className={`${styles.form_group}  grid lg:grid-cols-2 gap-[30px]`}
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-[14px] text-style1 mb-[10px] block"
                >
                  {t("form.name")}
                </label>
                <input
                  {...register("name", { required: t("validation.nameRequired") })}
                  type="text"
                  id="name"
                  placeholder={t("form.namePlaceholder")}
                  required
                  className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {(errors.name as FieldError)?.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="text-[14px] text-style1 mb-[10px] block"
                >
                  {t("form.familyName")}
                </label>
                <input
                  {...register("familyName", { required: t("validation.familyNameRequired") })}
                  type="text"
                  id="name"
                  placeholder={t("form.familyNamePlaceholder")}
                  required
                  className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {(errors.name as FieldError)?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-[30px]">
              <label
                htmlFor="email"
                className="text-[14px] text-style1 mb-[10px] block"
              >
                {t("form.email")}
              </label>
              <input
                {...register("email", {
                  required: t("validation.emailRequired"),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t("validation.email_invalid"),
                  },
                })}
                type="email"
                id="email"
                placeholder={t("form.emailPlaceholder")}
                required
                className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {(errors.email as FieldError)?.message}
                </p>
              )}
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
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,}$/,
                    message: t("validation.notValid")
                  },
                  minLength: {
                    value: 8,
                    message: t("validation.password_min_length")
                  }
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
              <div className="field checkbox c-checkbox">
                <label className="flex items-center space-x-2">
                  <input
                    {...register("terms", { required: t("validation.termsRequired") })}
                    type="checkbox"
                    onChange={() => setTermsAccepted((t) => !t)}
                    name="terms"
                    className="absolute w-0 h-0 peer"
                  />
                  <span className="relative w-[1.2rem] h-[1.1rem] border-[1.5px] border-[#aaa] flex items-center justify-center bg-white">
                    <Image
                      width={22}
                      height={24}
                      alt="checked"
                      src="/images/icons/checked.png"
                      className={`${termsAccepted ? 'block' : 'hidden'}  peer-checked:block w-[0.8rem] h-[0.8rem] p-0`}
                    />
                  </span>

                  <span className="text-[14px] text-style1">
                    {t("form.terms.text")}&nbsp;
                    <a
                      target="_blank"
                      href="/terms"
                      className="text-[#337ab7] text-naskh text-sm hover:text-[#1e476c]"
                    >
                      {t("form.terms.termsLink")}
                    </a>
                    &nbsp;{t("form.terms.and")}&nbsp;
                    <a
                      target="_blank"
                      href="/privacy"
                      className="text-[#337ab7] text-naskh text-sm hover:text-[#1e476c]"
                    >
                      {t("form.terms.privacyLink")}
                    </a>
                  </span>
                </label>
              </div>
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
                {isSubmitting ? t("form.submitting") : t("form.submit")}
              </button>
            </div>
          </form>
        </div>
        <div className={`${styles.custom_container} lg:w-[40%] w-[100%] bg-white px-[30px]`}>
          <h1 className="text-xl text-style1 mb-[40px] font-kufi">
            {localActive === 'ar' ? 'حساب واحد لجميع منتجاتنا' : 'One account for all our products'}
          </h1>
          <div className="my-[30px]">
            <ul>
              {mediaItems.map((item) => (
                <li key={item.id}>
                  <article className="mb-[40px] flex items-center gap-3">
                    <div>
                      <Image
                        width={48}
                        height={48}
                        src={item.brand}
                        alt={`logo-brand-${localActive === 'ar' ? item.title : item.title_en}`}
                        className="w-[48px] h-[48px] bg-gray-200"
                      />
                    </div>
                    <div>
                      <h3 className="font-kufi text-[18px] mb-[4px]">
                        {localActive === 'ar' ? item.title : item.title_en}
                      </h3>
                      <h4 className="text-[14px] text-style2 font-naskh">
                        {localActive === 'ar' ? item.sub : item.sub_en}
                      </h4>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
      <div className="text-center text-[14px] text-naskh py-[30px]">
        <p>&copy; 2024 حسوب. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  );
};

export default Register;