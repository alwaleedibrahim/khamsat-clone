"use client";
import React, { useEffect, useState, useContext } from 'react';
import GalleryModal from "./GalleryModal";
import { FaImage, FaPlus } from 'react-icons/fa';
import TagInput from './TagInput';
import ButtonA from '../reusable/buttons/ButtonA';
import axios from 'axios';
import { createService } from '../../_lib/services';
// Import your AuthContext or any other context as needed
// import { AuthContext } from '../../context/AuthContext';

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

interface DevelopmentOptions {
    unique: boolean;
    ownership: boolean;
    acknowledgment: boolean;
}

export interface FormDataProp {
    userId: string;
    title: {
        ar: string;
        en: string;
    };
    categoryId: string;
    subcategoryId: string;
    description: {
        ar: string;
        en: string;
    };
    BuyerRules: string;
    price: number;
    deliveryTime: number;
    keywords: string[];
    images?: string[];
    developmentOptions?: DevelopmentOptions;
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
    keywords: [],
};

const initialDevelopmentOptions: DevelopmentOptions = {
    unique: false,
    ownership: false,
    acknowledgment: false,
};

const ServiceForm: React.FC = () => {
    const [categories, setCategories] = useState<Categories[]>([]);
    const [subCategories, setSubCategories] = useState<SubCategories[]>([]);
    const [formData, setFormData] = useState<FormDataProp>(initialFormData);
    const [singleFile, setSingleFile] = useState<File | null>(null);
    const [files, setFiles] = useState<File[]>([]);
  
    const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false);
    const [loadingCategories, setLoadingCategories] = useState<boolean>(false);
    const [loadingSubCategories, setLoadingSubCategories] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [developmentOptions, setDevelopmentOptions] = useState<DevelopmentOptions>(initialDevelopmentOptions);

    // Replace with your actual auth context or method to get user ID
    // const { user } = useContext(AuthContext);

    // Fetch main categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            setLoadingCategories(true);
            try {
                const response = await axios.get(`http://localhost:4500/categories`);
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

    // Fetch subcategories when a main category is selected
    useEffect(() => {
        if (formData.categoryId) {
            const fetchSubCategories = async () => {
                setLoadingSubCategories(true);
                try {
                    const response = await axios.get(`http://localhost:4500/categories/category/${formData.categoryId}`);
                    setSubCategories(response.data.subcategories);
                    setError("");
                } catch (err) {
                    console.error("Error fetching subcategories:", err);
                    setError("Failed to load subcategories. Please try again later.");
                } finally {
                    setLoadingSubCategories(false);
                }
            };

            fetchSubCategories();
        } else {
            setSubCategories([]);
            setFormData(prev => ({ ...prev, subcategoryId: '' }));
        }
    }, [formData.categoryId]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Handle nested fields
        if (name.startsWith('title.')) {
            const lang = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                title: {
                    ...prev.title,
                    [lang]: value,
                },
            }));
        } else if (name.startsWith('description.')) {
            const lang = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                description: {
                    ...prev.description,
                    [lang]: value,
                },
            }));
        } else if (['price', 'deliveryTime'].includes(name)) {
            setFormData(prev => ({
                ...prev,
                [name]: Number(value),
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleImages = (images: string[]) => {
        setFormData(prev => ({
            ...prev,
            images: images,
        }));
    };

    const handlekeywords = (keywords: string[]) => {
        setFormData(prev => ({
            ...prev,
            keywords: keywords,
        }));
    };

    const handleDevelopmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setDevelopmentOptions((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData();

        // Replace with actual user ID from auth
        // if (!user || !user.id) {
        //     alert('User not authenticated');
        //     return;
        // }
        // form.append('userId', user.id);

        // For demonstration, using a placeholder
        form.append('userId', 'your-user-id'); // Replace this

        form.append('title.ar', formData.title.ar);
        form.append('title.en', formData.title.en);
        form.append('description.ar', formData.description.ar);
        form.append('description.en', formData.description.en);
        form.append('BuyerRules', formData.BuyerRules);
        form.append('categoryId', formData.categoryId);
        form.append('subcategoryId', formData.subcategoryId);
        form.append('price', formData.price.toString());
        form.append('deliveryTime', formData.deliveryTime.toString());

        // Append keywords individually
        formData.keywords.forEach((keyword) => {
            form.append('keywords', keyword);
        });

        // Append development options as JSON
        form.append('developmentOptions', JSON.stringify(developmentOptions));

        // Append files if they exist
        if (singleFile) {
            form.append('singleFile', singleFile);
        }

        files.forEach((file) => {
            form.append('files', file);
        });

        try {
            const response = await createService();
            alert(response.message);
            // Reset form
            setFormData(initialFormData);
            setDevelopmentOptions(initialDevelopmentOptions);
            setSingleFile(null);
            setFiles([]);
            setError("");
        } catch (error) {
            console.error('Error creating service:', error);
            setError("Failed to create service. Please try again.");
            alert('Failed to create service');
        }
    };

    // Placeholder for handling adding development options
    const handleAddDevelopment = () => {
        // Implement logic to add development options if needed
    };

    return (
        <form onSubmit={handleSubmit} className='mb-[30px]'>
            <div className="font-kufi">
                {/* Service Title */}
                <div className='bg-white p-container-space '>
                    {/* Arabic Title */}
                    <div className='mb-5'>
                        <label className="block mb-3 text-style1">عنوان الخدمة</label>
                        <input
                            type="text"
                            name="title.ar"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            maxLength={60}
                            placeholder="اكتب عنواناً"
                            value={formData.title.ar}
                            onChange={handleInputChange}
                            required
                        />
                        <p className="text-gray-500 mt-2 text-[12px]">
                            أدخل عنواناً واضحاً باللغة العربية يصف الخدمة التي تريد أن تقدمها. لا تدخل رموزاً أو كلمات مثل
                            &quot;حصرياً&quot;، &quot;لأول مرة&quot;، &quot;لفترة محدود&quot;.. الخ.
                        </p>
                    </div>

                    {/* English Title */}
                    <div className='mb-5'>
                        <label className="block mb-3 text-style1">Service title</label>
                        <input
                            type="text"
                            name="title.en"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            maxLength={60}
                            placeholder="Write a title"
                            value={formData.title.en}
                            onChange={handleInputChange}
                            required
                        />
                        <p className="text-gray-500 mt-2 text-[12px]">
                            Enter a clear title in English that describes the service you want to provide. Do not enter symbols or words like
                            &quot;Exclusive&quot;, &quot;For the first time&quot;, &quot;For a limited time&quot;, etc.
                        </p>
                    </div>

                    {/* Category Selection */}
                    <div className="mb-5">
                        <label className="block mb-3 text-style1">التصنيف</label>
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
                            </div>

                            {/* Sub Category Dropdown */}
                            <div className="w-full md:w-1/2 pr-2">
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
                        {error && <p className="text-red-500 mt-2 text-[12px]">{error}</p>}
                    </div>

                    {/* Service Description */}
                    <div className="mb-5">
                        <label className="block mb-3 text-style1">وصف الخدمة</label>
                        <textarea
                            name="description.ar"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            rows={6}
                            maxLength={900}
                            placeholder="اكتب وصفاً مفصلاً للخدمة التي تقدمها..."
                            value={formData.description.ar}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <p className="text-[12px] text-gray-600 mt-2">
                            أدخل وصف الخدمة بدقة يتضمن جميع المعلومات والشروط. يمنع وضع البريد
                            الالكتروني، رقم الهاتف أو أي معلومات اتصال أخرى.
                        </p>
                    </div>

                    {/* English Service Description */}
                    <div className="mb-5">
                        <label className="block mb-3 text-style1">Service description</label>
                        <textarea
                            name="description.en"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            rows={6}
                            maxLength={900}
                            placeholder="Write a detailed description of the service you provide..."
                            value={formData.description.en}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <p className="text-[12px] text-gray-600 mt-2">
                            Enter the service description accurately including all the information and conditions. Prevents mail mode
                            Email, phone number or any other contact information.
                        </p>
                    </div>

                    {/* Service Gallery */}
                    <div className="mb-5">
                        <label className="block mb-3 text-style1">معرض الخدمة</label>
                        <div className="text-center p-10 bg-[#f7f9fc] rounded">
                            {/* Gallery Upload Section */}
                            <div id="images">
                                <div className="mb-6">
                                    <button
                                        type="button"
                                        onClick={() => setShowGalleryModal(true)}
                                        className="flex items-center gap-2 mx-auto bg-primary font-kufi text-white px-6 py-3 hover:bg-[#3a7d25] transition-all rounded"
                                    >
                                        <FaImage className="text-[12px] text-white" />
                                        <span>أضف صورة أو فيديو</span>
                                    </button>
                                </div>
                                <p className="text-[12px]">القياس: 800x470 بكسل . الحجم الأقصى: 5 ميجا. العدد المسموح: 10 ملفات.</p>
                            </div>

                            {/* Modal for Adding Images/Videos */}
                            {showGalleryModal && (
                                <GalleryModal
                                    // setShowGalleryModal={setShowGalleryModal}
                                    // handleImages={handleImages}
                                />
                            )}

                            <p className="mt-2 text-[12px]">
                                أضف صور أو فيديو مصمم بشكل جيد لتظهر خدمتك بشكل احترافي وتزيد من مبيعاتك.
                            </p>
                        </div>
                    </div>

                    {/* Instructions for Buyers */}
                    <div className="mb-5">
                        <label className="block mb-3 text-style1">
                            تعليمات للمشتري
                        </label>
                        <textarea
                            name="BuyerRules"
                            className="border p-2 w-full text-style2 focus:outline-none focus:border-primary"
                            rows={4}
                            maxLength={900}
                            placeholder="أدخل تعليمات واضحة للمشتري..."
                            value={formData.BuyerRules}
                            onChange={handleInputChange}
                            required
                        ></textarea>
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
                                <label className="block mb-3 text-style1">سعر الخدمة</label>
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
                            </div>

                            {/* Delivery Time Dropdown */}
                            <div className="w-full md:w-1/2 pr-2">
                                <label className="block mb-3 text-style1">مدة التسليم</label>
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
                    </div>

                    {/* Tag Input */}
                    <div className="mb-5">
                        <TagInput
                        // handlekeywords={handlekeywords} 
                        />
                    </div>

                    {/* Add Development Button */}
                    <div className="flex justify-end mb-5">
                        <button
                            type="button"
                            className="flex items-center text-[12px] px-4 py-2 w-fit font-kufi border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded"
                            onClick={handleAddDevelopment}
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
