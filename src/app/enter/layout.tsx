import { NavMenuMobile } from "@/components/navMenuMobile";
import NavMenuPc from "@/components/navMenuPc";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export default function EnterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${sans.className} max-w-[1440px] mx-auto caret-transparent`}
    >
      <header className="p-5 flex items-center justify-between border-b">
        {/* 모바일 메뉴 (햄버거) */}
        <NavMenuMobile />
        <h1 className="text-2xl sm:text-3xl font-bold">
          let<span className="text-[#5C4ACD]"> yurim</span>
        </h1>
        <NavMenuPc />
      </header>
      <main>{children}</main>
    </div>
  );
}
