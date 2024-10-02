import React from "react";

const SnippetSection = () => {
  const features = [
    { href: "/move-offline-business-to-online", title: "حوّل أعمالك للعالم الرقمي" },
    { href: "/start-business", title: "ابدأ مشروعك التجاري" },
    { href: "/start-ecommerce", title: "أنشئ متجرك الإلكتروني" },
    { href: "/create-website", title: "أطلق موقعك الإلكتروني" },
    { href: "/online-marketing-solutions", title: "حلول التسويق الرقمي" },
    { href: "/create-online-course", title: "أنشئ دورتك التدريبية" },
    { href: "/self-publish-book", title: "انشر كتابك عبر الإنترنت" },
  ];

  return (
    <div className="p-section"> 
      <div className="mx-auto px-4"> 
        <div className="text-center mb-[50px]">
          <h2 className="text-[28px] text-style1 font-kufi">حلول متكاملة لتطوير أعمالك</h2>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-[5px]"> 
          {features.map((feature, index) => (
            <li key={index} className="bg-white p-[15px] border border-[#eee]">
                <a href={feature.href} className="text-center">
                  <h6 className="font-kufi text-style1 text-[14px]">{feature.title}</h6>
                </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SnippetSection;
