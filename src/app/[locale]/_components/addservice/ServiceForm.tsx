/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState, useContext } from 'react';
import GalleryModal from "./GalleryModal";
import { FaImage, FaPlus } from 'react-icons/fa';
import TagInput from './TagInput';
import ButtonA from '../reusable/buttons/ButtonA';
import axios from 'axios';
import { createService, FormDataProp, Keyword } from '../../_lib/services';
import { serviceFormSchema } from '../../_validation/service';
import UpgradeService from './UpgradesService';
import { Upgrade } from '../../_lib/upgardes';
import { useRouter } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const alertify = require("alertifyjs");
// import 'alertifyjs/build/css/alertify.css';
import "../../alertify.css";
import "alertifyjs/build/css/alertify.rtl.css";
import { RootState } from '../../_lib/redux/store';
import {
    TypedUseSelectorHook,

    useSelector as useReduxSelector,
} from "react-redux";
import IUserProfile from '../../_models/userProfile';
import { useLocale } from 'next-intl';


// Import your AuthContext or any other context as needed
// import { AuthContext } from '../../context/AuthContext';
interface DevelopmentOptions {
    unique: boolean;
    ownership: boolean;
    acknowledgment: boolean;
}

const initialDevelopmentOptions: DevelopmentOptions = {
    unique: false,
    ownership: false,
    acknowledgment: false,
};

interface Categories {
    _id: string;
    name: {
        ar: string;
        en: string;
    };
}

interface Category {
    _id: string;
    title: {
        ar: string;
        en: string;
    };
}

interface SubCategories {
    _id: string;
    title: {
        ar: string;
        en: string;
    };
    category_id: string;
    subcategories: Category[];
}

const initialFormData: FormDataProp = {
    userId: '',
    title: {
        ar: '',
        en: ''
    },
    categoryId: '',
    subcategoryId: '',
    description: {
        ar: '',
        en: ''
    },
    BuyerRules: '',
    price: 5,
    deliveryTime: 1,
    keywords: [] as Keyword[],
};


const ServiceForm: React.FC = () => {
    const [categories, setCategories] = useState<Categories[]>([]);
    const [subCategories, setSubCategories] = useState<SubCategories[]>([]);
    const [formData, setFormData] = useState<FormDataProp>(initialFormData);
    const [singleFile, setSingleFile] = useState<File | null>(null);
    const [files, setFiles] = useState<(string | File)[]>([]);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false);
    const [loadingCategories, setLoadingCategories] = useState<boolean>(false);
    const [loadingSubCategories, setLoadingSubCategories] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [developmentOptions, setDevelopmentOptions] = useState<DevelopmentOptions>(initialDevelopmentOptions);
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const user_id: string = useSelector((state) => state.profile.user?._id);
    const token: string | null = useSelector((state) => state.auth.token);
    const router = useRouter();
    const localActive = useLocale();

    // Replace with your actual auth context or method to get user ID
    // const { user } = useContext(AuthContext);

    // Fetch main categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            setLoadingCategories(true);
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`);
                setCategories(response.data.categories);
                setError("");
            } catch (err) {
                console.error("Error fetching categories:", err);
                setError("Failed to load categories. Please try again later.");
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchSubCategories = async () => {
            if (formData.categoryId) {
                setLoadingSubCategories(true);
                try {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/category/${formData.categoryId}`);
                    setSubCategories(response.data.subcategories);
                    setError("");
                } catch (err) {
                    console.error("Error fetching subcategories:", err);
                    setError("Failed to load subcategories. Please try again later.");
                } finally {
                    setLoadingSubCategories(false);
                }
            } else {
                setSubCategories([]);
                if (formData.subcategoryId) {
                    setFormData(prev => ({ ...prev, subcategoryId: '' }));
                }
            }
        };

        fetchSubCategories();
    }, [formData.categoryId]);



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Handle nested fields
        if (name.startsWith('title.')) {
            const lang = name.split('.')[1];
            const fieldName = `title.${lang}`;
            setFormData(prev => ({
                ...prev,
                title: {
                    ...prev.title,
                    [lang]: value,
                },
            }));
            setFieldErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[fieldName];
                return newErrors;
            });
        } else if (name.startsWith('description.')) {
            const lang = name.split('.')[1];
            const fieldName = `description.${lang}`;
            setFormData(prev => ({
                ...prev,
                description: {
                    ...prev.description,
                    [lang]: value,
                },
            }));
            setFieldErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[fieldName];
                return newErrors;
            });
        } else if (['price', 'deliveryTime'].includes(name)) {
            setFormData(prev => ({
                ...prev,
                [name]: Number(value),
            }));
            setFieldErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
            setFieldErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handlekeywords = (keywords: Keyword[]) => {
        setFormData(prev => ({
            ...prev,
            keywords: keywords,
        }));
        setFieldErrors(prev => {
            const newErrors = { ...prev };
            return newErrors;
        });
    };


    const handleDevelopmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setDevelopmentOptions((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    // Handle form submission
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataToValidate = {
            userId: user_id,
            title: formData.title,
            categoryId: formData.categoryId,
            subcategoryId: formData.subcategoryId,
            description: formData.description,
            BuyerRules: formData.BuyerRules,
            price: formData.price,
            deliveryTime: formData.deliveryTime,
            keywords: formData.keywords,
            images: files.filter(file => file instanceof File) as File[],
        };
        const validation = serviceFormSchema.safeParse(dataToValidate);
        if (!validation.success) {
            const fieldErrorsMap: { [key: string]: string } = {};
            validation.error.errors.forEach(err => {
                const path = err.path.join('.');
                fieldErrorsMap[path] = err.message;
            });
            setFieldErrors(fieldErrorsMap);
            return;
        }
        const form = new FormData();
        const validatedData = validation.data;

        form.append('userId', validatedData.userId);
        form.append('title[ar]', validatedData.title.ar);
        form.append('title[en]', validatedData.title.en);
        form.append('description[ar]', validatedData.description.ar);
        form.append('description[en]', validatedData.description.en);
        form.append('BuyerRules', validatedData.BuyerRules);
        form.append('categoryId', validatedData.categoryId);
        form.append('subcategoryId', validatedData.subcategoryId);
        form.append('price', validatedData.price.toString());
        form.append('deliveryTime', validatedData.deliveryTime.toString());

        if (validatedData.keywords) {
            validatedData.keywords.forEach((keyword, index) => {
                form.append(`keywords[${index}][title][ar]`, keyword.title.ar);
                form.append(`keywords[${index}][title][en]`, keyword.title.en);
            });
        }
        if (validatedData.images) {
            validatedData.images.forEach((file, index) => {
                form.append('images', file);
            });
        }

        try {
            const response = await createService(form, token || "");
            alertify
                .confirm('إشعار', `تم إضافة الخدمة بنجاح وهي الان تحت المراجعه
                    سيتم اشعاك عند الموافقه عليها!`,
                    function () {
                        const categoryName = categories.find(cat => cat._id === formData.categoryId)?.name.en;
                        const subcategoryTitle = subCategories.find(sub => sub._id === formData.subcategoryId)?.title.en;

                        // Replace with a dynamically constructed path
                        if (categoryName && subcategoryTitle) {
                            const dynamicPath = `/${localActive}/categories/${categoryName}/${subcategoryTitle}/${response.savedService._id}`;
                            router.push(dynamicPath);
                        }
                    },
                    function () {
                        router.refresh();
                    }).set('labels', { ok: 'عرض الخدمة', cancel: 'أضف خدمة اخرى' })
                .set('defaultFocus', 'ok')
                .set('closable', false);
            // Reset form
            setFormData(initialFormData);
            setIsSubmit(true)
            setSingleFile(null);
            setFiles([]);
            setError("");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Error creating service:', error);
            setIsSubmit(false)
            setError("Failed to create service. Please try again.");
            alertify.error('Failed to create service');
        }
    };

    // ///////////////////////////////////////////////////////////////////////////////////////// //
    // Upgrades Logic 
    const [upgrades, setUpgrades] = useState<Upgrade[]>([]);

    const handleUgradesButton = () => {
        setUpgrades((prevUpgrades) => [...prevUpgrades, {} as Upgrade]);
    }

    return (
        <form onSubmit={handleSubmit} className='mb-[30px]' encType="multipart/form-data">
            <div className="font-kufi">
                {/* Service Title */}
                <div className='bg-white p-container-space '>
                    {/* Arabic Title */}
                    <div className='mb-5'>
                        <label htmlFor="titleAr" className="block mb-3 text-style1">عنوان الخدمة</label>
                        <input
                            type="text"
                            id="titleAr"
                            name="title.ar"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            maxLength={60}
                            placeholder="اكتب عنواناً"
                            value={formData.title.ar}
                            onChange={handleInputChange}
                            required
                        />
                        {fieldErrors['title.ar'] && (
                            <p className="text-red-500 text-xs mt-1">{fieldErrors['title.ar']}</p>
                        )}
                        <p className="text-gray-500 mt-2 text-[12px]">
                            أدخل عنواناً واضحاً باللغة العربية يصف الخدمة التي تريد أن تقدمها. لا تدخل رموزاً أو كلمات مثل
                            &quot;حصرياً&quot;، &quot;لأول مرة&quot;، &quot;لفترة محدود&quot;.. الخ.
                        </p>
                    </div>

                    {/* English Title */}
                    <div className='mb-5'>
                        <label htmlFor="titleEn" className="block mb-3 text-style1">Service title</label>
                        <input
                            type="text"
                            id="titleEn"
                            name="title.en"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            maxLength={60}
                            placeholder="Write a title"
                            value={formData.title.en}
                            onChange={handleInputChange}
                            required
                        />
                        {fieldErrors['title.en'] && (
                            <p className="text-red-500 text-xs mt-1">{fieldErrors['title.en']}</p>
                        )}
                        <p className="text-gray-500 mt-2 text-[12px]">
                            Enter a clear title in English that describes the service you want to provide. Do not enter symbols or words like
                            &quot;Exclusive&quot;, &quot;For the first time&quot;, &quot;For a limited time&quot;, etc.
                        </p>
                    </div>

                    {/* Category Selection */}
                    <div className="mb-5">
                        <label htmlFor="categoryId" className="block mb-3 text-style1">التصنيف</label>
                        <div className="flex flex-wrap">
                            {/* Main Category Dropdown */}
                            <div className="w-full md:w-1/2 mb-4 md:mb-0 pl-2">
                                <select
                                    id="categoryId"
                                    name="categoryId"
                                    className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                                    value={formData.categoryId}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>
                                        {loadingCategories ? "جارٍ التحميل..." : "اختر التصنيف"}
                                    </option>
                                    {categories.map((category) => (
                                        category?._id && category.name?.ar ? (
                                            <option key={category._id} value={category._id}>
                                                {category.name.ar}
                                            </option>
                                        ) : null
                                    ))}
                                </select>
                                {fieldErrors['categoryId'] && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors['categoryId']}</p>
                                )}
                            </div>

                            {/* Sub Category Dropdown */}
                            <div className="w-full md:w-1/2 pr-2">
                                <label htmlFor="subcategoryId" className="sr-only">Subcategory</label> {/* Optional for accessibility */}
                                <select
                                    id="subcategoryId"
                                    name="subcategoryId"
                                    className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                                    value={formData.subcategoryId}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>
                                        {loadingSubCategories ? "جارٍ التحميل..." : "اختر التصنيف الفرعي"}
                                    </option>
                                    {subCategories.map((subCategory) => (
                                        subCategory?._id && subCategory.title?.ar ? (
                                            <option key={subCategory._id} value={subCategory._id}>
                                                {subCategory.title.ar}
                                            </option>
                                        ) : null
                                    ))}
                                </select>
                            </div>
                        </div>
                        {fieldErrors['subcategoryId'] && (
                            <p className="text-red-500 text-xs mt-1">{fieldErrors['subcategoryId']}</p>
                        )}
                    </div>

                    {/* Service Description */}
                    <div className="mb-5">
                        <label htmlFor="descriptionAr" className="block mb-3 text-style1">وصف الخدمة</label>
                        <textarea
                            id="descriptionAr"
                            name="description.ar"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            rows={6}
                            maxLength={900}
                            placeholder="اكتب وصفاً مفصلاً للخدمة التي تقدمها..."
                            value={formData.description.ar}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        {fieldErrors['description.ar'] && (
                            <p className="text-red-500 text-xs mt-1">{fieldErrors['description.ar']}</p>
                        )}
                        <p className="text-[12px] text-gray-600 mt-2">
                            أدخل وصف الخدمة بدقة يتضمن جميع المعلومات والشروط. يمنع وضع البريد
                            الالكتروني، رقم الهاتف أو أي معلومات اتصال أخرى.
                        </p>
                    </div>

                    {/* English Service Description */}
                    <div className="mb-5">
                        <label htmlFor="descriptionEn" className="block mb-3 text-style1">Service description</label>
                        <textarea
                            id="descriptionEn"
                            name="description.en"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            rows={6}
                            maxLength={900}
                            placeholder="Write a detailed description of the service you provide..."
                            value={formData.description.en}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        {fieldErrors['description.en'] && (
                            <p className="text-red-500 text-xs mt-1">{fieldErrors['description.en']}</p>
                        )}
                        <p className="text-[12px] text-gray-600 mt-2">
                            Enter the service description accurately including all the information and conditions. Prevents mail mode
                            Email, phone number or any other contact information.
                        </p>
                    </div>

                    {/* Service Gallery */}
                    <div className="mb-5">
                        <label htmlFor="images" className="block mb-3 text-style1">معرض الخدمة</label>
                        <div className="text-center p-10 bg-[#f7f9fc] rounded">
                            {/* Gallery Upload Section */}
                            <div>
                                <div className="mb-6">
                                    <button
                                        id="images"
                                        type="button"
                                        onClick={() => setShowGalleryModal(true)}
                                        className="flex items-center gap-2 mx-auto bg-primary font-kufi text-white px-6 py-3 hover:bg-[#3a7d25] transition-all rounded"
                                    >
                                        <FaImage className="text-[12px] text-white" />
                                        <span>أضف صورة أو فيديو</span>
                                    </button>
                                </div>
                                <p className="text-[12px]">القياس: 800x470 بكسل . الحجم الأقصى: 5 ميجا. العدد المسموح: 5 ملفات.</p>
                            </div>

                            {/* Modal for Adding Images/Videos */}
                            {showGalleryModal && (
                                <GalleryModal
                                    setShowGalleryModal={setShowGalleryModal}
                                    setFiles={setFiles}
                                />
                            )}
                            {fieldErrors['images'] && (
                                <p className="text-red-500 text-xs mt-1">{fieldErrors['images']}</p>
                            )}
                            <p className="mt-2 text-[12px]">
                                أضف صور أو فيديو مصمم بشكل جيد لتظهر خدمتك بشكل احترافي وتزيد من مبيعاتك.
                            </p>
                        </div>
                    </div>

                    {/* Instructions for Buyers */}
                    <div className="mb-5">
                        <label htmlFor="buyerRules" className="block mb-3 text-style1">
                            تعليمات للمشتري
                        </label>
                        <textarea
                            id="buyerRules"
                            name="BuyerRules"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            rows={4}
                            maxLength={900}
                            placeholder="أدخل تعليمات واضحة للمشتري..."
                            value={formData.BuyerRules}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        {fieldErrors['BuyerRules'] && (
                            <p className="text-red-500 text-xs mt-1">{fieldErrors['BuyerRules']}</p>
                        )}
                        <p className="text-[12px] text-gray-600 mt-2">
                            أدخل وصف الخدمة بدقة يتضمن جميع المعلومات والشروط. يمنع وضع البريد
                            الالكتروني، رقم الهاتف أو أي معلومات اتصال أخرى.
                        </p>
                    </div>

                    {/* Price and Delivery Time */}
                    <div className="mb-5">
                        <div className="flex flex-wrap">
                            {/* Price Dropdown */}
                            <div className="w-full md:w-1/2 mb-4 md:mb-0 pl-2">
                                <label htmlFor="price" className="block mb-3 text-style1">سعر الخدمة</label>
                                <select
                                    id="price"
                                    name="price"
                                    className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value={5}>$5.00</option>
                                    <option value={10}>$10.00</option>
                                    {/* Add more options as needed */}
                                </select>
                                {fieldErrors['price'] && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors['price']}</p>
                                )}
                            </div>

                            {/* Delivery Time Dropdown */}
                            <div className="w-full md:w-1/2 pr-2">
                                <label htmlFor="deliveryTime" className="block mb-3 text-style1">مدة التسليم</label>
                                <select
                                    id="deliveryTime"
                                    name="deliveryTime"
                                    value={formData.deliveryTime}
                                    onChange={handleInputChange}
                                    className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                                    required
                                >
                                    <option value={1}>يوم واحد</option>
                                    <option value={2}>يومين</option>
                                    <option value={3}>ثلاثة أيام</option>
                                    <option value={4}>أربعة أيام</option>
                                    <option value={5}>خمسة أيام</option>
                                    <option value={6}>ستة أيام</option>
                                    <option value={7}>أسبوع</option>
                                    <option value={14}>أسبوعين</option>
                                    <option value={21}>ثلاثة أسابيع</option>
                                    <option value={30}>شهر</option>
                                </select>
                            </div>
                        </div>
                        {fieldErrors['deliveryTime'] && (
                            <p className="text-red-500 text-xs mt-1">{fieldErrors['deliveryTime']}</p>
                        )}
                    </div>

                    {/* Tag Input */}
                    <div className="mb-5">
                        <TagInput handlekeywords={handlekeywords} isSubmit={isSubmit} />
                    </div>
                    {fieldErrors['keywords'] && (
                        <p className="text-red-500 text-xs mt-1">{fieldErrors['keywords']}</p>
                    )}

                    {upgrades.length > 0 ? (
                        <div>
                            <h3 className="block mb-3 text-style1">أضف تطويراً لهذه الخدمة</h3>
                            {upgrades.map((upgrade, index) => (
                                <UpgradeService key={index} index={index} setUpgrades={setUpgrades} />
                            ))}
                        </div>
                    ) : null}

                    {/* Add Development Button */}
                    <div className="flex justify-end mb-5">
                        <button
                            type="button"
                            onClick={handleUgradesButton}
                            className="flex items-center text-[12px] px-4 py-2 w-fit font-kufi border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded"
                        >
                            <FaPlus className="mr-2" />
                            <span>أضف تطويرا لهذه الخدمة</span>
                        </button>
                    </div>
                </div>

                {/* Development Options */}
                <div className='my-[20px] bg-white font-kufi'>
                    <h5 className='p-container-space font-kufi border-b-[1px] border-[#F1F1F1]'>
                        تطويرات متوفرة لهذه الخدمة
                    </h5>

                    <div className='p-container-space text-[14px]'>
                        <div className="mb-2">
                            <div className="flex items-center">
                                <input
                                    name="unique"
                                    id="unique"
                                    type="checkbox"
                                    className="ml-2 checked:text-primary w-[14px] h-[14px]"
                                    checked={developmentOptions.unique}
                                    onChange={handleDevelopmentChange}
                                    required
                                />
                                <label htmlFor="unique">
                                    <span>عنوان ووصف الخدمة من صياغتي الخاصة وليس منسوخ من أي مكان آخر</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-2">
                            <div className="flex items-center">
                                <input
                                    name="ownership"
                                    id="ownership"
                                    type="checkbox"
                                    className="ml-2 checked:text-primary w-[14px] h-[14px]"
                                    checked={developmentOptions.ownership}
                                    onChange={handleDevelopmentChange}
                                    required
                                />
                                <label htmlFor="ownership">
                                    <span>جميع الأعمال بمعرض الخدمة نفذتها بنفسي ولدي الصلاحية لنشرها</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center">
                                <input
                                    name="acknowledgment"
                                    id="acknowledgment"
                                    type="checkbox"
                                    className="ml-2 checked:text-primary w-[14px] h-[14px]"
                                    checked={developmentOptions.acknowledgment}
                                    onChange={handleDevelopmentChange}
                                    required
                                />
                                <label htmlFor="acknowledgment">
                                    <span>
                                        الخدمة لا تحتوي أي وسائل تواصل خارجي ومتوافقة مع{' '}
                                        <a
                                            href="/terms"
                                            className="text-primary hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            شروط الاستخدام
                                        </a>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <ButtonA text='أضف خدمة' extraStyle='mx-[20px]' type="submit" />
            </div>
        </form>
    );
};

export default ServiceForm;