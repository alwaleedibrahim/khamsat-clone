"use client";

import React from "react";
import { useState } from "react";
import { useLocale } from 'next-intl';

const questionListItems = {
  ar: [
    {
      title: "ما هو خمسات؟",
      content:
        "خمسات هو أكبر سوق عربي لبيع وشراء الخدمات المصغرة. يجمع خمسات بين الشباب العربي الموهوب المستعد لتقديم خبراته ومهاراته على شكل خدمات مصغرة بأسعار تبدأ من 5 دولار، وبين الأفراد ورواد الأعمال الذين يحتاجون هذه الخدمات لتساعدهم في تنمية وتطوير أعمالهم.",
    },
    {
      title: "كيف يمكن أن أستفيد من خمسات؟",
      content: [
        "قد يتوقف إطلاق شركتك على تصميم شعار، أو يتوقف عملك بسبب الحاجة لمحتوى متجدد لموقعك، ربما تملك فكرة رائعة لبرنامج أو تطبيق ولكن ليست لديك أدنى فكرة عن البرمجة والتطوير، لديك بحث دراسي أو ترجمة مطلوبة في وقت معين وتحتاج لمن يساعدك فيها.",
        <span className="block h-5" key={`paragraph-separator`}> </span>,
        "يوفّر خمسات كل الخدمات الإبداعية والاحترافية التي تحتاجها لتنمية وتطوير أعمالك، والتي يمكن طلبها من أشخاص موهوبين مستعدين لخدمتك في إنجاز مهامك بسهولة عبر الإنترنت وبأسعار اقتصادية تتناسب مع الأفراد ورواد الأعمال من أصحاب المشاريع الناشئة.",
      ],
    },
    {
      title: "كيف يضمن موقع خمسات حقوقي؟",
      content:
        "موقع خمسات يضمن لك حقوقك بشكل كامل، كن مطمئنا عند شراء أي خدمة معروضة في الموقع، يقوم خمسات بدور الوسيط بين المشتري والبائع ويحمي حقوق الطرفين المالية في حال الالتزام بشروط موقع خمسات وبنود الضمان والإبقاء على جميع التواصلات داخل الموقع.",
    },
    {
      title: "ماذا سيحدث بعد شرائي لأحد الخدمات المعروضة في خمسات؟",
      content:
        "ستصلك رسالة بريدية لتأكيد عملية الشراء، وستتمكن من التواصل المباشر مع البائع ضمن صفحة الطلب. بعد قيام البائع بتنفيذ وتسليم الخدمة يمكنك تقييمها حتى يستفيد بقية المشترين من تجربتك، وفي حال تأخر البائع عن مدة تنفيذ الطلب الموضحة أو عدم التزامه بالوصف المحدد للخدمة يمكنك إلغاء الطلب واستعادة رصيدك كاملًا.",
    },
    {
      title: "ماذا لو لم أكن راضيا عن مستوى الخدمة المستلمة؟",
      content:
        "في حال عدم رضاك عن الخدمة المستلمة يمكنك طلب التعديلات عليها من البائع، وفي حال كانت الخدمة المستلمة دون الجودة الموضحة في وصف الخدمة، يمكنك إلغاء الطلب ببساطة ليعود الرصيد لحسابك وتتمكن من شراء إحدى الخدمات الأخرى على الموقع. عند مواجهتك لأي مشكلة لا تتردد في التواصل بشكل مباشر مع خدمة العملاء عن طريق مركز المساعدة.",
    },
  ],
  en: [
    {
      title: "What is Khamsat?",
      content:
        "Khamsat is the largest Arab marketplace for buying and selling micro-services. It connects talented Arab youth who are ready to offer their expertise and skills in the form of micro-services starting from $5, with individuals and entrepreneurs who need these services to help them grow and develop their businesses.",
    },
    {
      title: "How can I benefit from Khamsat?",
      content: [
        "Your company launch might depend on a logo design, or your work might be held up due to the need for renewed website content. Maybe you have a great idea for a program or application but don't have the slightest idea about programming and development, or you have academic research or translation needed at a specific time and need someone to help you with it.",
        <span className="block h-5" key={`paragraph-separator`}> </span>,
        "Khamsat provides all the creative and professional services you need to grow and develop your business, which can be requested from talented individuals ready to serve you in completing your tasks easily online and at economical prices suitable for individuals and entrepreneurs from startup owners.",
      ],
    },
    {
      title: "How does Khamsat guarantee my rights?",
      content:
        "Khamsat website fully guarantees your rights. Feel assured when purchasing any service offered on the site. Khamsat acts as an intermediary between the buyer and seller and protects both parties' financial rights when adhering to Khamsat's terms and guarantee provisions and keeping all communications within the site.",
    },
    {
      title: "What happens after I purchase one of the services offered on Khamsat?",
      content:
        "You will receive an email to confirm the purchase, and you will be able to communicate directly with the seller within the order page. After the seller executes and delivers the service, you can rate it so other buyers can benefit from your experience. If the seller delays beyond the specified execution period or fails to comply with the service description, you can cancel the order and get your credit back in full.",
    },
    {
      title: "What if I'm not satisfied with the level of service received?",
      content:
        "If you are not satisfied with the service received, you can request modifications from the seller. If the received service is below the quality described in the service description, you can simply cancel the order and the credit will return to your account so you can purchase another service on the site. If you face any problem, don't hesitate to contact customer service directly through the help center.",
    },
  ]
};

export default function Accordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const locale = useLocale();

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const questions = questionListItems[locale as keyof typeof questionListItems] || questionListItems.en;
  const headerText = locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions';

  return (
    <div className="accordion bg-white p-section flex flex-col justify-center items-center">
      <h2 className={`text-3xl ${locale === 'ar' ? 'font-kufi' : 'font-sans'} pb-10`}>
        {headerText}
      </h2>
      <div className="accordion max-w-screen-lg sm:px-0 md:px-10">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border-neutral-200 bg-white border-b dark:border-neutral-300 dark:bg-body-dark"
          >
            <h2 className="mb-0" id={`heading${index}`}>
              <button
                className="group relative flex w-full items-center border-0 bg-white px-5 py-6 text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white justify-between"
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndexes.includes(index)}
                aria-controls={`collapse${index}`}
              >
                <span
                  className={`text-lg ${locale === 'ar' ? 'font-kufi' : 'font-sans'} font-medium ${
                    openIndexes.includes(index)
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`${locale === 'ar' ? '-me-1' : '-ms-1'} h-5 w-5 shrink-0 transition-transform duration-500 ease-in-out ${
                    openIndexes.includes(index) ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`overflow-hidden divide-x transition-[max-height] duration-500 ease-in-out ${
                openIndexes.includes(index) ? "max-h-screen" : "max-h-0"
              }`}
              aria-labelledby={`heading${index}`}
            >
              <div className={`px-5 py-4 text-start ${locale === 'ar' ? 'font-naskh' : 'font-sans'}`}>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}