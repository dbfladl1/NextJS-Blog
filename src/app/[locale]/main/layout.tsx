import { NavMenuMobile } from "@/components/navMenuMobile";
import NavMenuPc from "@/components/navMenuPc";
import { JSX } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};


export default async function PageLayout(props: Props): Promise<JSX.Element> {
  const { children } = props;

  return (
      <div className="bg-gradient-to-br">
        <div
          className={` caret-transparent pb-5`}
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
  );
}
