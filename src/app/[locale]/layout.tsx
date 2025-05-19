import { NavMenuMobile } from "@/components/navMenuMobile";
import NavMenuPc from "@/components/navMenuPc";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { JSX } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const generalSans = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-Regular.woff", weight: "400" },
    { path: "../../public/fonts/GeneralSans-Bold.woff", weight: "700" },
  ],
  variable: "--font-general",
});
const pretendard = localFont({
  src: [
    { path: "../../public/fonts/Pretendard-Regular.woff", weight: "400" },
    { path: "../../public/fonts/Pretendard-Bold.woff", weight: "700" },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export default async function EnterLayout(props: Props): Promise<JSX.Element> {
  const { children, params } = props;
  const { locale } = params;
  const messages = await getMessages({ locale });

  if (!messages) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="bg-gradient-to-br">
        <div
          className={`${generalSans.variable} ${pretendard.variable} caret-transparent pb-5`}
        >
          <header className="p-5 flex items-center justify-between border-b sm:border-none">
            {/* 모바일 메뉴 (햄버거) */}
            <NavMenuMobile />
            <h1 className="text-2xl sm:text-4xl font-bold">
              let<span className="text-[#5C4ACD]"> yurim</span>
            </h1>
            <NavMenuPc />
          </header>
          <main>{children}</main>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
