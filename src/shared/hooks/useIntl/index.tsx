import { useTranslations as useTranslationsExternal } from "next-intl";

export function useTranslations(section: string) {
  return useTranslationsExternal(section);
}
