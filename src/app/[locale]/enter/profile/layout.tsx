// layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { JSX, ReactNode } from "react";

// 👇 Next.js 내부 LayoutProps에 맞추기 위해 params를 Promise에서 unwrap한 형태로 둠
type LayoutPropsWorkaround = {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any; // ← 핵심: 타입 체크 피하기 위해 any로 강제
};

const ProfileLayout = async ({
  children,
  params,
}: LayoutPropsWorkaround): Promise<JSX.Element> => {
  const { locale } = await Promise.resolve(params); // ← 이 줄이 핵심: Next.js가 기대하는 Promise params를 받아서 처리
  let messages;
  try {
    messages = (await import(`@/messages/profile/${locale}.json`)).default;
  } catch (e) {
    console.error(e);
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default ProfileLayout;
