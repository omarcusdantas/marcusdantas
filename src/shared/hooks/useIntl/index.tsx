import { notFound } from "next/navigation";
import { useTranslations as useTranslationsExternal, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function useTranslations(locale: string, section: string) {
  setRequestLocale(locale);
  const useTranslations = useTranslationsExternal(section);
  return useTranslations;
}

export function checkLocale(locale: string) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
}
