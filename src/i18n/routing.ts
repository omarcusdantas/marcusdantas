import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "en",
  localePrefix: "never",
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365, // Expires in one year
  },
});
