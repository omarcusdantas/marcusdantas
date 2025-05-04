import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export function checkLocale(locale: string) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
}

export function getLocales() {
  return routing.locales.map((locale) => ({ locale }));
}
