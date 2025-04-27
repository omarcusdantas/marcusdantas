import { use } from "react";
import { useTranslations } from "@/shared/hooks/useIntl";

interface HomeProps {
  readonly params: Promise<{ locale: string }>;
}

export default function Home({ params }: HomeProps) {
  const { locale } = use(params);
  const t = useTranslations(locale, "HomePage");

  return <h2>{t("title")}</h2>;
}
