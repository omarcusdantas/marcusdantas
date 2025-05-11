import { getTranslations } from "@/shared/utils/intl";

interface BlogPageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations(locale, "HomePage");

  return <h2>{t("title") + " - Blog"}</h2>;
}
