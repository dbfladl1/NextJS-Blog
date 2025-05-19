"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { useLangSwitcher } from "@/hooks/useLangSwitcher";
import { useLocale } from "next-intl";

export default function NavMenuPc() {
  const { handleLangChange } = useLangSwitcher();
  const locale = useLocale();

  const pathname = usePathname();

  const lang = pathname.includes("/en/") ? "en" : "ko";


  return (
    <nav className="hidden sm:block">
      <div className=" sm:flex sm:gap-3 sm:justify-end mb-2">
        <button
          className="group inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium text-white bg-gradient-to-r from-[#6e37ab] to-[#82BDE6] shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          onClick={() => handleLangChange(lang === "ko" ? "en" : "ko")}
        >
          <Globe className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
          <span>{lang === "en" ? "KOR" : lang === "ko" && "ENG"}</span>
        </button>
      </div>
      <ul className="flex gap-6 text-sm sm:text-base items-center font-medium">
        <li>
          <Link href={`/${locale}/enter/profile`}>PROFILE</Link>
        </li>
        <li>
          <Link href={`/${locale}/enter/portfolio`}>PORTFOLIO</Link>
        </li>
        <li>
          <Link href={`/${locale}/enter/guestbook`}>GUESTBOOK</Link>
        </li>
        <li>
          <Link href={`/${locale}/enter/devlog`}>DEVLOG</Link>
        </li>
      </ul>
    </nav>
  );
}
