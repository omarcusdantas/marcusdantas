import { use } from "react";
import { useTranslations } from "@/shared/hooks/useIntl";

interface Props {
  readonly params: Promise<{ locale: string }>;
}

export default function Blog({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations(locale, "HomePage");

  return <h2>{t("title") + " - Blog"}</h2>;
}
