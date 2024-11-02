import { z } from 'zod';
const ObjectIdRegex = /^[a-fA-F0-9]{24}$/;

const LocalizedString = z.object({
    ar: z.string().min(3, { message: 'العنوان بالعربية مطلوب' }),
    en: z.string().min(3, { message: 'العنوان بالإنجليزية مطلوب' }),
});

const KeywordSchema = z.object({
    title: LocalizedString,
});

export const serviceFormSchema = z.object({
    userId: z.string().regex(ObjectIdRegex, { message: 'معرف المستخدم غير صالح' }),
    title: LocalizedString,
    categoryId: z.string().regex(ObjectIdRegex, { message: 'معرف الفئة غير صالح' }),
    subcategoryId: z.string().regex(ObjectIdRegex, { message: 'معرف الفئة الفرعية غير صالح' }),
    description: LocalizedString,
    BuyerRules: z.string().min(20, { message: 'قواعد المشتري مطلوبة' }),
    price: z.number().min(1, { message: 'السعر يجب أن يكون على الأقل 1' }),
    deliveryTime: z.number().min(1, { message: 'وقت التسليم يجب أن يكون على الأقل 1 يوم' }),
    keywords: z.array(KeywordSchema).min(3, { message: 'يجب اضافة على الاقل 3 كلمات مفتاحية'}),
    images: z.array(z.instanceof(File)).min(1, { message: 'يجب اضافه صورة علي الاقل'}),
});
