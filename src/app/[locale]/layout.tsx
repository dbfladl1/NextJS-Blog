import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { JSX } from "react";
export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const messages = await getMessages({ });

  return (
    <NextIntlClientProvider messages={messages}>
      <div>{children}</div>
    </NextIntlClientProvider>
  );
}
