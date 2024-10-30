import React from 'react';
import { useLocale } from 'next-intl';
import ButtonA from '../reusable/buttons/ButtonA';

const content = {
  ar: {
    title: "أنجز أعمالك بسهولة وأمان",
    buttonText: "سجل الآن"
  },
  en: {
    title: "Complete Your Work Easily and Securely",
    buttonText: "Register Now"
  }
};

export default function CallToActionSection() {
  const locale = useLocale();
  const currentContent = content[locale as keyof typeof content] || content.en;

  return (
    <div className='bg-secondary w-full py-8 my-3 text-center'>
      <h1 className={`text-2xl py-6 ${locale === 'ar' ? 'font-kufi' : 'font-sans'} text-white`}>
        {currentContent.title}
      </h1>
      <ButtonA text={currentContent.buttonText} />
    </div>
  );
}