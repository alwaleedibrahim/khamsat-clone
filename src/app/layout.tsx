import Footer from "./_components/footer/footer";
import Navbar from "./_components/navbar/navbar";

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Noto_Kufi_Arabic, Noto_Naskh_Arabic } from "next/font/google";

import { Provider } from "react-redux";
import { store } from "../app/redux/store";

config.autoAddCss = false;

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
        <Provider store={store}>
          <Navbar />
          {children}

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
