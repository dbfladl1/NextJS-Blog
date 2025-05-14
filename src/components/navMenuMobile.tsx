"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { handleSwitchToEnglish, handleSwitchToKor } from "@/utils/returnURL";

export function NavMenuMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 현재 경로 ex: /enter/profile
  const engPath = handleSwitchToEnglish(pathname);
  const korPath = handleSwitchToKor(pathname);

  const lang = pathname.includes("/en") ? "en" : "";
  function getLocalizedPath(path: string, lang: "" | "en") {
    return `/enter${lang === "en" ? "/en" : ""}/${path}`;
  }

  return (
    <>
      <button
        className="sm:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`sm:hidden overflow-hidden transition-all duration-300 px-5 ${
          open ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex gap-3 mb-3 text-sm">
          <li className="border-1 px-2">
            <Link href={korPath}>KO</Link>
          </li>
          <li className="border-1 px-2">
            <Link href={engPath}>EN</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4 text-sm font-medium">
          <li>
            <Link
              href={getLocalizedPath("profile", lang)}
              onClick={() => setOpen(false)}
            >
              PROFILE
            </Link>
          </li>
          <li>
            <Link
              href={getLocalizedPath("portfolio", lang)}
              onClick={() => setOpen(false)}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              href={getLocalizedPath("guestbook", lang)}
              onClick={() => setOpen(false)}
            >
              GUESTBOOK
            </Link>
          </li>
          <li>
            <Link
              href={getLocalizedPath("devlog", lang)}
              onClick={() => setOpen(false)}
            >
              DEVLOG
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
