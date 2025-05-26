"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLangSwitcher } from "@/hooks/useLangSwitcher";
import { useLocale } from "next-intl";

export function NavMenuMobile() {
  const { handleLangChange } = useLangSwitcher();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const lang = pathname.includes("/en/") ? "en" : "ko";

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
          open ? "max-h-60 py-1" : "max-h-0 py-0"
        }`}
      >
        <button
          className="group inline-flex items-center gap-2 px-2 mb-3 py-1 rounded-full font-medium text-white bg-gradient-to-r from-[#6e37ab] to-[#82BDE6] shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          onClick={() => handleLangChange(lang === "ko" ? "en" : "ko")}
        >
          <Globe className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
          <span>{lang === "en" ? "KOR" : lang === "ko" && "ENG"}</span>
        </button>

        <ul className="flex flex-col gap-4 text-sm ml-1 font-medium">
          <li>
            <Link
              href={`/${locale}/main/profile`}
              onClick={() => setOpen(false)}
            >
              PROFILE
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/main/portfolio`}
              onClick={() => setOpen(false)}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/main/portfolioguestbook`}
              onClick={() => setOpen(false)}
            >
              GUESTBOOK
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/main/devlog`}
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
