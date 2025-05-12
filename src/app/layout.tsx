import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "let yurim",
  icons: {
    icon: "/images/favicon.png",
  },
};

import { Open_Sans } from "next/font/google";
import {Intro} from "@/components/intro";

const sans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body className={`p-0`}>
        <Intro />
        <div>{children}</div>
      </body>
    </html>
  );
}
