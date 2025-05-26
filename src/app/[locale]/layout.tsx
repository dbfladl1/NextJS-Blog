import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { JSX, ReactNode } from "react";


type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function PagesLayout(props: Props): Promise<JSX.Element>  {
  const { children, params } = props;
  const { locale } = await Promise.resolve(params);
  const messages = await getMessages({ locale });
  console.log("🧭 loading from path:", `@/messages/profile/${locale}.json`);
  if (!messages) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`p-0`}>
        <div>{children}</div>
      </div>
    </NextIntlClientProvider>
  );
}
