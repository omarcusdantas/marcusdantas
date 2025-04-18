import type { Metadata } from "next";
import { Lato, Noto_Sans } from "next/font/google";
import { IntlProvider } from "@/shared/contexts/IntlContext";
import { ThemeProvider } from "@/shared/contexts/ThemeContext";
import { checkLocale } from "@/shared/hooks/useIntl";
import { Header } from "@/shared/components/Header";
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

interface Props {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  checkLocale(locale);

  return (
    <html lang={locale} className={`${lato.variable} ${notoSans.variable} font-noto`} suppressHydrationWarning>
      <body>
        <IntlProvider>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
