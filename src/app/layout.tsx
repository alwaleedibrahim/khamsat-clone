
import Footer from "./_components/footer/footer";
import WhyUs from "./_components/whyUs/whyUs";


import "./globals.css";
import { Noto_Kufi_Arabic, Noto_Naskh_Arabic } from "next/font/google";

const NotoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
});
const NotoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh",
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${NotoKufiArabic.variable} ${NotoNaskhArabic.variable}`}
      >
       
        <WhyUs/>

        {children}
      <Footer/>
      </body>
    </html>
  );
}