'use client';

import { usePathname, useRouter } from "next/navigation";

const SUPPORTED_LOCALES = ["en", "ko"];

export function useLangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLangChange = (nextLang: "ko" | "en") => {
    const parts = pathname.split("/").filter(Boolean);
    const currentLocale = parts[0];
    const isLocalePrefixed = SUPPORTED_LOCALES.includes(currentLocale);
    const newParts = isLocalePrefixed ? parts.slice(1) : parts;
    const newPath = `/${nextLang}/${newParts.join("/")}`;
    router.replace(newPath);
  };

  return { handleLangChange };
}