import { NextIntlClientProvider } from "next-intl";

interface Props {
  readonly children: React.ReactNode;
}

export function IntlProvider({ children }: Props) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
