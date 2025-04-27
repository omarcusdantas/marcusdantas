import { NextIntlClientProvider } from "next-intl";

interface IntlProviderProps {
  readonly children: React.ReactNode;
}

export function IntlProvider({ children }: IntlProviderProps) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
