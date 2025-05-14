'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleSwitchToEnglish, handleSwitchToKor } from "@/utils/returnURL";


export default function NavMenuPc() {
  const pathname = usePathname(); // 현재 경로 ex: /enter/profile
  const engPath = handleSwitchToEnglish(pathname);
  const korPath = handleSwitchToKor(pathname);

  const lang = pathname.includes("/en/") ? "en" : "";

  function getLocalizedPath(path: string, lang: "" | "en") {
    return `/enter${lang === "en" ? "/en" : ""}/${path}`;
  }

  return (
    <nav className="hidden sm:block">
      <ul className=" sm:flex sm:gap-3 sm:justify-end">
        <li>
          <Link href={korPath}>KO</Link>
        </li>
        <li>
          <Link href={engPath}>EN</Link>
        </li>
      </ul>
      <ul className="flex gap-6 text-sm sm:text-base items-center font-medium">
        <li>
          <Link href={getLocalizedPath("profile",lang)}>PROFILE</Link>
        </li>
        <li>
          <Link href={getLocalizedPath("portfolio",lang)}>PORTFOLIO</Link>
        </li>
        <li>
          <Link href={getLocalizedPath("guestbook",lang)}>GUESTBOOK</Link>
        </li>
        <li>
          <Link href={getLocalizedPath("devlog",lang)}>DEVLOG</Link>
        </li>
      </ul>
    </nav>
  );
}
