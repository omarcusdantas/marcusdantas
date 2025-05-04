import { useTranslations } from "@/shared/hooks/useIntl";

export default function Blog() {
  const t = useTranslations("HomePage");

  return <h2>{t("title") + " - Blog"}</h2>;
}
