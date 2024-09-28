"use client";

import { FieldError, useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faWindows } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";

// interface LoginFormData {
//     email: string;
//     password: string;
// }


const Login: React.FC = () => {
    const {
        register,
        // handleSubmit,
        formState: { errors },
    } = useForm();

    // const [formData, setFormData] = useState({});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-[#eceff4]">
            <div className={`${styles.custom_container} bg-white font-kufi`}>
                <h3 className="text-2xl text-style1 mb-[15px] ">تسجيل الدخول</h3>

                <div className={`flex gap-[10px] mt-[15px] mb-[30px]`}>
                    <Image src="/images/logo.png" alt="Logo" width={48} height={48} className="w-[48px] h-[48px]" />
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
                            <FontAwesomeIcon icon={faGoogle} style={{ fontSize: '26px' }} />
                            <span className="text-[14px]">
                                باستخدام جوجل
                            </span>
                        </a>
                    </div>

                    <div>
                        <a
                            href="/"
                            className={`bg-[#0f4bac] text-white flex items-center justify-center py-[14px] px-[20px] gap-3`}
                        >
                            <FontAwesomeIcon icon={faWindows} style={{ fontSize: '26px' }} />
                            <span className="text-[14px]">
                                باستخدام مايكروسوفت
                            </span>
                        </a>
                    </div>
                </div>

                <hr className={`${styles.hr_text}`} data-content="أو" />

                <form className="space-y-4">
                    <div className={`${styles.form_group}`}>
                        <label htmlFor="email" className="text-[14px] text-style1 mb-[10px] block">
                            البريد الالكتروني
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="أدخل البريد الإلكتروني الخاص بك"
                            {...register("email", { required: "البريد الالكتروني مطلوب" })}
                            className="bg-[#f7f9fc] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                            />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{(errors.email as FieldError)?.message}</p>
                        )}
                    </div>

                    <div className={`${styles.form_group}`}>
                        <label htmlFor="password" className="text-[14px] text-style1 mb-[10px] block">
                            كلمة المرور
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="أدخل كلمة المرور الخاصة بك"
                            {...register("password", { required: "كلمة المرور مطلوبة" })}
                            className="bg-[#f7f9fc] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{(errors.password as FieldError)?.message}</p>
                        )}
                    </div>

                    <div className={`${styles.form_group} grid lg:grid-cols-[175px_minmax(900px,_1fr)_100px]  mb-[10px]`} >
                        <button
                            type="submit"
                            className="text-white font-[400] w-[100%] hover:opacity-75 rounded-0 bg-[#2caae2] text-[14px] py-[12px] px-[21px]"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'جاري الدخول...' : 'دخول'}
                        </button>
                    </div>
                </form>

                <div className="mt-[35px]">
                    <label className="block mb-[10px] text-style1 text-[14px] font-normal ">مساعدة</label>
                    <ul className="pr-[40px] mb-[10px]">
                        <li key="register" className="list-disc text-sm leading-9">
                            <a href="/register" className="text-[#337ab7] text-naskh text-sm hover:text-[#14324d]">
                                لا أملك حساب بعد
                            </a>
                        </li>
                        <li key="reset-password" className="list-disc text-sm leading-9">
                            <a href="/reset_password" className="text-[#337ab7] text-naskh text-sm hover:text-[#14324d]">
                                فقدت كلمة المرور
                            </a>
                        </li>
                        <li key="resend-confirmation" className="list-disc text-sm leading-9">
                            <a href="/resend_confirmation" className="text-[#337ab7] text-naskh text-sm hover:text-[#14324d]">
                                لم يصلني رمز التفعيل
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-[14px] text-naskh py-[30px]">
                <p>&copy; 2024 حسوب. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    );
}

export default Login