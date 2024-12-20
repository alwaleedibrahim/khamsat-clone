import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Noto_Kufi_Arabic, Noto_Naskh_Arabic } from "next/font/google";
import Navbar from './_components/navbar/navbar';
import Footer from './_components/footer/footer';
import ReduxProvider from './_components/redux-provider/provider';
import PersistProvider from './_components/redux-provider/persist';
import ClientSideCartProvider from './_components/cart-provider/ClientSideCartProvider';
import { NotificationProvider } from './NotificationProvider';

config.autoAddCss = false;

const NotoKufiArabic = Noto_Kufi_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto-kufi",
});
const NotoNaskhArabic = Noto_Naskh_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto-naskh",
});

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: LocaleLayoutProps) {
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body className={`${NotoKufiArabic.variable} ${NotoNaskhArabic.variable}`}>
                <NextIntlClientProvider messages={messages}>
                    <ClientSideCartProvider>
                        <ReduxProvider>
                            <PersistProvider>
                                <NotificationProvider>
                                    <Navbar />
                                    {children}
                                    <Footer />
                                </NotificationProvider>
                            </PersistProvider>
                        </ReduxProvider>
                    </ClientSideCartProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
