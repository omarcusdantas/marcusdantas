import { Lato, Noto_Sans } from "next/font/google";
import { Header } from "@/modules/layout/components/Header";
import { IntlProvider } from "@/shared/contexts/IntlContext";
import { ThemeProvider } from "@/shared/contexts/ThemeContext";
import { checkLocale, getLocales } from "@/shared/utils/intl";
import type { Metadata } from "next";
import "./globals.css";

const lato = Lato({
  variable: "--font-import-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-import-noto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  checkLocale(locale);

  return (
    <html lang={locale} className={`${lato.variable} ${notoSans.variable} font-noto`} suppressHydrationWarning>
      <body className="bg-tertiary-01 dark:bg-primary-03">
        <IntlProvider>
          <ThemeProvider>
            <Header />
            <main className="flex flex-col items-center justify-center pt-25">{children}</main>
          </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return getLocales();
}

export const dynamicParams = false;
