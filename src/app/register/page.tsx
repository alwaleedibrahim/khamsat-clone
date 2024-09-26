"use client";
import { FieldError, useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faWindows } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from "react";
import styles from "./register.module.css";

// interface RegisterFormData {
//     email: string;
//     password: string;
// }


const Register: React.FC = () => {
    const mediaItems = [
        { id: 1, title: 'أنا', sub: 'ركز على أهدافك وتابع ما يهمك حقاً', brand: 'brand--ana' },
        { id: 2, title: 'مستقل', sub: 'منصّة العمل الحر العربية', brand: 'brand--mostaql' },
        { id: 3, title: 'خمسات', sub: 'سوق بيع وشراء الخدمات المصغّرة', brand: 'brand--khamsat' },
        { id: 4, title: 'بيكاليكا', sub: 'أفضل المنتجات الرقمية الجاهزة', brand: 'brand--picalica' },
        { id: 5, title: 'بعيد', sub: 'وظّف عن بعد', brand: 'brand--baaeed' },
        { id: 6, title: 'زيتون', sub: 'برنامج خدمة العملاء الأكثر بساطة', brand: 'brand--zaetoon' },
        { id: 7, title: 'أكاديمية حسوب', sub: 'تعلّم وطوّر مهاراتك', brand: 'brand--academy' },
        { id: 8, title: 'موسوعة حسوب', sub: 'مرجع المطورين العرب', brand: 'brand--wiki' },
        { id: 9, title: 'حسوب I/O', sub: 'ناقش أشخاصًا بنفس اهتماماتك', brand: 'brand--io' },
    ];

    const {
        // handleSubmit,
        formState: { errors },
    } = useForm();

    // const [formData, setFormData] = useState({});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-[#eceff4]">
            <div className="flex flex-col lg:flex-row justify-center mx-auto mt-[140px] max-w-[1136px] bg-white p-[70px]">
                <div className={`${styles.custom_container} lg:w-[60%] w-[90%] pl-[30px] font-kufi`}>
                    <h1 className="text-2xl text-style1 mb-[40px] ">إنشاء حساب جديد</h1>

                    <div className={`text-center grid lg:grid-cols-2 gap-[30px]`}>
                        <div>
                            <a
                                href="/"
                                className={`bg-[#dd4b39]  text-white flex items-center justify-center py-[12px] px-[21px] gap-3`}
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
                                className={`bg-[#0f4bac] text-white flex items-center justify-center py-[12px] px-[21px] gap-3`}
                            >
                                <FontAwesomeIcon icon={faWindows} style={{ fontSize: '26px' }} />
                                <span className="text-[14px]">
                                    باستخدام مايكروسوفت
                                </span>
                            </a>
                        </div>
                    </div>

                    <hr className={`${styles.hr_text}`} data-content="أو" />

                    <form className="space-y-4 bg-[#f7f9fc] py-[40px] px-[30px]">
                        <div className={`${styles.form_group}  grid lg:grid-cols-2 gap-[30px]`}>
                            <div>
                                <label htmlFor="name" className="text-[14px] text-style1 mb-[10px] block">
                                    الاسم
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="اكتب اسمك باللغة العربية"
                                    required
                                    className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{(errors.name as FieldError)?.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="name" className="text-[14px] text-style1 mb-[10px] block">
                                    اسم العائلة
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="اكتب اسم العائلة هنا باللغة العربية"
                                    required
                                    className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{(errors.name as FieldError)?.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-[30px]">
                            <label htmlFor="email" className="text-[14px] text-style1 mb-[10px] block">
                                البريد الالكتروني
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="أدخل البريد الإلكتروني الخاص بك"
                                required
                                className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{(errors.email as FieldError)?.message}</p>
                            )}
                        </div>

                        <div className="mb-[30px]">
                            <label htmlFor="password" className="text-[14px] text-style1 mb-[10px] block">
                                كلمة المرور
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="أدخل كلمة المرور الخاصة بك"
                                required
                                className="bg-[#fcfdfd] shadow-none px-[10px] py-[9px] text-[14px] border border-[#aaafb9] h-[40px] text-style1 w-full focus:bg-[#fcfdfd] outline-none"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{(errors.password as FieldError)?.message}</p>
                            )}
                        </div>

                        <div className="my-[30px]">
                            <div className="field checkbox c-checkbox">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        value="false"
                                        className="hidden peer"
                                    />
                                    <span className="c-checkbox__check w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-transparent">
                                        <svg
                                            className="hidden w-4 h-4 text-white peer-checked:block"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>

                                    </span>
                                    <span className="checkbox-label text-gray-700">
                                        قرأت وأوافق على&nbsp;
                                        <a target="_blank" href="/terms" className="text-blue-500 hover:underline">
                                            شروط الاستخدام
                                        </a>
                                        &nbsp;و&nbsp;
                                        <a target="_blank" href="/privacy" className="text-blue-500 hover:underline">
                                            بيان الخصوصية
                                        </a>
                                    </span>
                                </label>
                            </div>
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

                </div>
                <div className={`${styles.custom_container} lg:w-[40%] w-[100%] bg-white px-[30px]`}>
                    <h1 className="text-2xl text-style1 mb-[40px] font-naskh ">حساب واحد لجميع منتجاتنا</h1>
                    <div className="my-[30px]">
                        <ul>
                            {mediaItems.map((item) => (
                                <li key={item.id}>
                                    <article className="mb-[40px] flex items-center gap-3">
                                        <div>
                                            <div className={`brand ${item.brand} w-[48px] h-[48px] bg-gray-200`} />
                                        </div>
                                        <div>
                                            <h3 className="font-kufi text-[18px] mb-[4px]">{item.title}</h3>
                                            <h4 className="text-[14px] text-style2 font-naskh">{item.sub}</h4>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div >

            <div className="text-center text-[14px] text-naskh py-[30px]">
                <p>&copy; 2024 حسوب. جميع الحقوق محفوظة.</p>
            </div>
        </div >
    );
}

export default Register