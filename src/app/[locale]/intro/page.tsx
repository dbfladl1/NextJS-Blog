import { Intro } from "@/components/intro";

export const metadata = {
  title: "Yurim's Portfolio | Creative Developer",
  description: "intro page.",
};

export default async function IntroPage(params: { locale: string }) {
  const { locale } = await Promise.resolve(params);
  return (
    <div className="p-4">
      <Intro locale={locale} />
    </div>
  );
}
