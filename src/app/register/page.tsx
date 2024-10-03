"use client";

import { FieldError, useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faWindows} from '@fortawesome/free-brands-svg-icons';
import React, { useState } from "react";
import styles from "./register.module.css";
import Image from "next/image";

import { useDispatch} from "react-redux";
import {login} from "../redux/slice/authSlice";


interface RegisterFormData {
    email: string;
    password: string;
    name: string;
    familyName:string
}


const Register: React.FC = () => {


    const mediaItems = [
        { id: 1, title: 'أنا', sub: 'ركز على أهدافك وتابع ما يهمك حقاً', brand: '/images/brands/ana.jpeg' },
        { id: 2, title: 'مستقل', sub: 'منصّة العمل الحر العربية', brand: '/images/brands/mostaql.jfif' },
        { id: 3, title: 'خمسات', sub: 'سوق بيع وشراء الخدمات المصغّرة', brand: '/images/brands/khamsat.png' },
        { id: 4, title: 'بيكاليكا', sub: 'أفضل المنتجات الرقمية الجاهزة', brand: '/images/brands/picalica.jfif' },
        { id: 5, title: 'بعيد', sub: 'وظّف عن بعد', brand: '/images/brands/baaeed.jpg' },
        { id: 6, title: 'زيتون', sub: 'برنامج خدمة العملاء الأكثر بساطة', brand: '/images/brands/zaetoon.jpg' },
        { id: 7, title: 'أكاديمية حسوب', sub: 'تعلّم وطوّر مهاراتك', brand: '/images/brands/academy.png' },
        { id: 8, title: 'موسوعة حسوب', sub: 'مرجع المطورين العرب', brand: '/images/brands/wiki.png' },
        { id: 9, title: 'حسوب I/O', sub: 'ناقش أشخاصًا بنفس اهتماماتك', brand: '/images/brands/io.png' },
    ];

    const { register, handleSubmit,formState: { errors },} = useForm<RegisterFormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    
    const onSubmit = async (data: RegisterFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch(`http://localhost:3000/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const result = await response.json();
            dispatch(login(result.token)); // Use the token received backend

        } catch (error) {
            console.log("Registration failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };




    // const [formData, setFormData] = useState({});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  

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
                             

                         {/* registeration form */}


                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-[#f7f9fc] py-[40px] px-[30px]">
                        <div className={`${styles.form_group}  grid lg:grid-cols-2 gap-[30px]`}>
                            <div>

                                <label htmlFor="name" className="text-[14px] text-style1 mb-[10px] block">
                                    الاسم
                                </label>
                                <input
                                  {...register("name", { required: "الاسم مطلوب" })}
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
                                        {...register("familyName", { required: "اسم العائلة مطلوب" })}
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
                             {...register("email", { required: "البريد الالكتروني مطلوب" })}
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
                                    {...register("password", { required: "كلمة المرور مطلوبة" })}
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
                                        className="absolute w-0 h-0 peer"
                                    />
                                    <span className="relative w-[1.2rem] h-[1.1rem] border-[1.5px] border-[#aaa] flex items-center justify-center bg-white">
                                        <Image
                                            width={22}
                                            height={24}
                                            alt="checked"
                                            src='/images/icons/checked.png'
                                            className="hidden peer-checked:block w-[0.8rem] h-[0.8rem] p-0"
                                        />
                                    </span>

                                    <span className="text-[14px] text-style1">
                                        قرأت وأوافق على&nbsp;
                                        <a target="_blank" href="/terms" className="text-[#337ab7] text-naskh text-sm hover:text-[#1e476c]">
                                            شروط الاستخدام
                                        </a>
                                        &nbsp;و&nbsp;
                                        <a target="_blank" href="/privacy" className="text-[#337ab7] text-naskh text-sm hover:text-[#1e476c]">
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
                    <h1 className="text-xl text-style1 mb-[40px] font-kufi ">حساب واحد لجميع منتجاتنا</h1>
                    <div className="my-[30px]">
                        <ul>
                            {mediaItems.map((item) => (
                                <li key={item.id}>
                                    <article className="mb-[40px] flex items-center gap-3">
                                        <div>
                                            <Image width={48} height={48} src={`${item.brand}`} alt='logo-brand' className={`w-[48px] h-[48px] bg-gray-200`} />
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