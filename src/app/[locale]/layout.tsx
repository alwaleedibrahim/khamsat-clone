import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Noto_Kufi_Arabic, Noto_Naskh_Arabic } from "next/font/google";
import Navbar from './_components/navbar/navbar';
import Footer from './_components/footer/footer';
import ReduxProvider from './_components/redux-provider/provider';
import ClientSideCartProvider from './ClientSideCartProvider';

config.autoAddCss = false;

const NotoKufiArabic = Noto_Kufi_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto-kufi",
});
const NotoNaskhArabic = Noto_Naskh_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto-naskh",
});

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body className={`${NotoKufiArabic.variable} ${NotoNaskhArabic.variable}`}>
                <ClientSideCartProvider>
                    <NextIntlClientProvider messages={messages}>
                        <ReduxProvider>
                            <Navbar />
                            {children}
                            <Footer />
                        </ReduxProvider>
                    </NextIntlClientProvider>
                </ClientSideCartProvider>
            </body>
        </html>
    );
}