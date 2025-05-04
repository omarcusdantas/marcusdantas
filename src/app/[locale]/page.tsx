import { useTranslations } from "@/shared/hooks/useIntl";

export default function Home() {
  const t = useTranslations("HomePage");

  return <h2>{t("title")}</h2>;
}
