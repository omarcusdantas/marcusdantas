"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { Locales } from "@/i18n/locales";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const toggleLocale = () => {
    const currentQueryString = searchParams.toString();
    const searchString = currentQueryString ? `?${currentQueryString}` : "";

    const newLocale = locale === Locales.en ? Locales.pt : Locales.en;
    const newUrl = `/${newLocale}${pathname}${searchString}`;

    router.replace(newUrl);
  };

  return (
    <button className="text-md" onClick={toggleLocale}>
      {locale.toUpperCase()}
    </button>
  );
}
