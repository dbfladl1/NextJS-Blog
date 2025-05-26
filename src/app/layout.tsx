import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "let yurim",
  icons: {
    icon: "/images/favicon.png",
  },
};


const generalSans = localFont({
  src: [
    { path: "../public/fonts/GeneralSans-Regular.woff", weight: "400" },
    { path: "../public/fonts/GeneralSans-Bold.woff", weight: "700" },
  ],
  variable: "--font-general",
  display: "swap",
});
const pretendard = localFont({
  src: [
    { path: "../public/fonts/Pretendard-Regular.woff", weight: "400" },
    { path: "../public/fonts/Pretendard-Bold.woff", weight: "700" },
  ],
  variable: "--font-pretendard",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${generalSans.variable} ${pretendard.variable}`}>
      <body className={`p-0`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
