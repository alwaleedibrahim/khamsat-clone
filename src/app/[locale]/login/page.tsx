"use client";

import { FieldError, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faWindows } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../_lib/redux/slice/authSlice";
import { ToastContainer, toast } from "react-toastify";
import { useLocale, useTranslations } from "next-intl";

import "react-toastify/dist/ReactToastify.css";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const t = useTranslations("LoginPage");
  const localActive = useLocale();
  const searchParams = useSearchParams();

  const redirectToPage = searchParams.get("redirect");

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );

      if (response.status === 400) {
        const errorResult = await response.json();
        if (errorResult.message === "Invalid email or password") {
          setErrorMessage(t("invalidEmailOrPassword"));
          setTimeout(() => setErrorMessage(""), 3410);
        }
        throw new Error("Bad response from server");
      }

      const result = await response.json();
      dispatch(login(result.data.token));
      // toast.success(t("login_success"));
      setTimeout(() => {
        if (redirectToPage) {          
          router.push(`/${localActive}/${redirectToPage}/`);
        } else {
          router.push("/");
        }
      }, 1000);
    } catch (error) {
      console.log("Login failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#eceff4]">
      <div className={`${styles.custom_container} bg-white font-kufi`}>
        <h3 className="text-2xl text-style1 mb-[15px] ">{t("login")}</h3>

        <div className={`flex gap-[10px] mt-[15px] mb-[30px]`}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="w-[48px] h-[48px]"
          />
          <div>
            <h6 className="text-lg">خمسات</h6>
            <p className="text-gray-500">khamsat.com</p>
          </div>
        </div>

        <div className={`text-center grid lg:grid-cols-2 gap-[30px]`}>
          <div>
            <a
              href="/"
              className={`bg-[#dd4b39]  text-white flex items-center justify-center py-[14px] px-[20px] gap-3`}
            >
              <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "26px" }} />
              <span className="text-[14px]">{t("google_login")}</span>
            </a>
          </div>

          <div>
            <a
              href="/"
              className={`bg-[#0f4bac] text-white flex items-center justify-center py-[14px] px-[20px] gap-3`}
            >
              <FontAwesomeIcon icon={faWindows} style={{ fontSize: "26px" }} />
              <span className="text-[14px]">{t("microsoft_login")}</span>
            </a>
          </div>
        </div>

        <hr className={`${styles.hr_text}`} data-content={t("or")} />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className={`${styles.form_group}`}>
            <label
              htmlFor="email"
              className="text-[14px] text-style1 mb-[10px] block"
            >
              {t("email")}
            </label>
            <input
              {...register("email", {
                required: t("email_required"),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("email_invalid"),
                },
              })}
              type="email"
              id="email"
              placeholder={t("email_placeholder")}
              className="bg-[#f7f9fc] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {(errors.email as FieldError)?.message}
              </p>
            )}
          </div>

          <div className={`${styles.form_group}`}>
            <label
              htmlFor="password"
              className="text-[14px] text-style1 mb-[10px] block"
            >
              {t("password")}
            </label>
            <input
              {...register("password", {
                required: t("password_required"),
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,}$/,
                  message: t("passwordNotValid"),
                },
                minLength: {
                  value: 8,
                  message: t("password_min_length"),
                },
              })}
              type="password"
              id="password"
              placeholder={t("password_placeholder")}
              className="bg-[#f7f9fc] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {(errors.password as FieldError)?.message}
              </p>
            )}
          </div>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <div
            className={`${styles.form_group} grid lg:grid-cols-[175px_minmax(900px,_1fr)_100px] mb-[10px]`}
          >
            <button
              type="submit"
              className="text-white font-[400] w-[100%] hover:opacity-75 rounded-0 bg-[#2caae2] text-[14px] py-[12px] px-[21px]"
              disabled={isSubmitting}
            >
              {t("login_button")}
            </button>
          </div>
        </form>
        <ToastContainer
          rtl={localActive == "ar"}
          position={`top-${localActive == "ar" ? "left" : "right"}`}
        />
      </div>
    </div>
  );
};

export default Login;
