import React from "react";
import Image from "next/image";
import { useLocale } from 'next-intl';

const footerContent = {
  ar: {
    khamsat: {
      title: "موقع خمسات",
      links: [
        { text: "حول خمسات", href: "#" },
        { text: "كيف يعمل الموقع", href: "#" },
        { text: "الأسئلة الشائعة", href: "#" },
        { text: "ضمان الحقوق", href: "#" },
        { text: "البيع على خمسات", href: "#" },
        { text: "مركز المساعدة", href: "#" },
      ],
    },
    blog: {
      title: "مدونة خمسات",
      links: [
        { text: "إليك تجربتي لأهم 10 إضافات", href: "#" },
        { text: "5 مشكلات إذا عالجتها ستنخفض السلات المتروكة", href: "#" },
        { text: "و كيف تبني خطة تسويقية تلبي احتياجات السوق", href: "#" },
        { text: "دليل الشركات الصغيرة", href: "#" },
        { text: "كيف تصمم موقعاً إلكترونياً جذاباً", href: "#" },
      ],
    },
    community: {
      title: "مجتمع خمسات",
      links: [
        { text: "نماذج أعمال قمت بتنفيذها", href: "#" },
        { text: "طلبات الخدمات غير الموجودة", href: "#" },
        { text: "تجارب وقصص المستخدمين", href: "#" },
        { text: "أمور عامة حول خمسات", href: "#" },
      ],
    },
    social: {
      title: "تابعنا",
      paymentTitle: "وسائل الدفع المتاحة",
    },
    bottom: {
      links: [
        { text: "شروط الاستخدام", href: "#" },
        { text: "بيان الخصوصية", href: "#" },
        { text: "المستويات", href: "#" },
        { text: "التسويق بالعمولة", href: "#" },
      ],
      copyright: "© 2024 Hsoub. All rights reserved.",
    },
    hsoub: {
      services: [
        { title: "انا", desc: "اداة واحدة لادارة مشاريعك و فريقك" },
        { title: "مستقل", desc: "اكبر منصة عمل حر في العالم العربي" },
        { title: "خمسات", desc: "سوق بيع و شراء الخدمات المصغرة" },
        { title: "بيكاليكا", desc: "متجر القوالب و المنتجات الرقمية" },
        { title: "بعيد", desc: "موقع توظيف الخبراء عن بعد" },
        { title: "زيتون", desc: "برنامج خدمة العملاء الاكثر بساطة" },
        { title: "اكاديمية حسوب", desc: "دورات احترافية لتطوير مستقبلك" },
        { title: "حسوب I/O", desc: "مجتمع متخصص للنقاشات في مختلف المجالات" },
        { title: "مدونة مستقل", desc: "مقالات متنوعة حول العمل الحر" },
      ],
    },
  },
  en: {
    khamsat: {
      title: "Khamsat Website",
      links: [
        { text: "About Khamsat", href: "#" },
        { text: "How It Works", href: "#" },
        { text: "FAQ", href: "#" },
        { text: "Rights Guarantee", href: "#" },
        { text: "Sell on Khamsat", href: "#" },
        { text: "Help Center", href: "#" },
      ],
    },
    blog: {
      title: "Khamsat Blog",
      links: [
        { text: "My Experience with Top 10 Add-ons", href: "#" },
        { text: "5 Issues to Fix to Reduce Cart Abandonment", href: "#" },
        { text: "How to Build a Market-Focused Marketing Plan", href: "#" },
        { text: "Small Business Guide", href: "#" },
        { text: "How to Design an Attractive Website", href: "#" },
      ],
    },
    community: {
      title: "Khamsat Community",
      links: [
        { text: "Portfolio of Completed Work", href: "#" },
        { text: "Requests for Unavailable Services", href: "#" },
        { text: "User Experiences and Stories", href: "#" },
        { text: "General Topics About Khamsat", href: "#" },
      ],
    },
    social: {
      title: "Follow Us",
      paymentTitle: "Available Payment Methods",
    },
    bottom: {
      links: [
        { text: "Terms of Use", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Levels", href: "#" },
        { text: "Affiliate Marketing", href: "#" },
      ],
      copyright: "© 2024 Hsoub. All rights reserved.",
    },
    hsoub: {
      services: [
        { title: "Ana", desc: "One tool to manage your projects and team" },
        { title: "Mostaql", desc: "Largest freelance platform in the Arab world" },
        { title: "Khamsat", desc: "Marketplace for buying and selling micro-services" },
        { title: "Bikalika", desc: "Templates and digital products store" },
        { title: "Baeed", desc: "Remote expert recruitment site" },
        { title: "Zaitoun", desc: "Simplest customer service software" },
        { title: "Hsoub Academy", desc: "Professional courses for your future development" },
        { title: "Hsoub I/O", desc: "Specialized community for discussions in various fields" },
        { title: "Mostaql Blog", desc: "Various articles about freelancing" },
      ],
    },
  },
};

export default function Footer() {
  const locale = useLocale();
  const content = footerContent[locale as keyof typeof footerContent] || footerContent.ar;
  const isRTL = locale === 'ar';

  return (
    <footer className={`bg-white text-foreground py-10 ${isRTL ? 'font-kufi' : 'font-sans'}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm p-container-space">
        {/* First Column */}
        <div className="md:pr-4 md:mr-8">
          <h3 className="mb-4 text-lg font-light">{content.khamsat.title}</h3>
          <ul className="space-y-3 font-medium">
            {content.khamsat.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-black hover:text-gray-800">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="mb-4 text-lg font-light">{content.blog.title}</h3>
          <ul className="space-y-3 font-medium">
            {content.blog.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-black hover:text-gray-800">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="mb-4 text-lg font-light">{content.community.title}</h3>
          <ul className="space-y-3 font-medium">
            {content.community.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-black hover:text-gray-800">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="text-center md:text-right">
          <h3 className="mb-4 text-lg font-light">{content.social.title}</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-blue-800 hover:opacity-75">
              <Image src="/images/facebook_icon.png" alt="Facebook" width={40} height={40} />
            </a>
            <a href="#" className="text-blue-500 hover:opacity-75">
              <Image src="/images/twitter_icon.png" alt="Twitter" width={40} height={40} />
            </a>
          </div>

          <h3 className="mt-8 text-lg font-light">{content.social.paymentTitle}</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Image src="/images/paypal_icon.png" alt="PayPal" width={40} height={50} />
            <Image src="/images/masterCard_icon.png" alt="MasterCard" width={40} height={40} />
            <Image src="/images/visa_icon.png" alt="Visa" width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="bg-gray-100 py-6 font-koshi mt-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
          <ul className="flex flex-wrap space-x-8 text-sm font-light mb-4 md:mb-0 mr-12">
            {content.bottom.links.map((link, index) => (
              <li key={index} className="ml-6">
                <a href={link.href} className="text-black hover:text-gray-800">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <span className="text-sm text-gray-800 font-light ml-11">
            {content.bottom.copyright}
          </span>
        </div>
      </div>

      {/* Hsoub Services Section */}
      <div className="py-10 px-4 sm:px-8 md:px-12">
        <div className="flex justify-center items-center mb-8">
          <Image src="/images/hasob_logo.png" alt="hasobLogo" width={150} height={150} />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-5 px-10">
            {content.hsoub.services.map((service, index) => (
              <div key={index} className="min-w-[150px]">
                <a href="#" className="text-xs font-light block mb-1">
                  {service.title}
                </a>
                <a href="#" className="text-[10px] text-gray-600 block">
                  {service.desc}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}