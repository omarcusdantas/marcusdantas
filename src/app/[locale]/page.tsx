import { getTranslations } from "@/shared/utils/intl";

interface HomePageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations(locale, "HomePage");

  return <h2>{t("title")}</h2>;
}
