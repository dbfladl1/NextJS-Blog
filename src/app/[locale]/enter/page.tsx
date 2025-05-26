"use client";

import { Intro } from "@/components/intro";
import { SessionStorage, STORAGE_KEYS } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLocale } from "next-intl";


const storage = new SessionStorage();
export default function EnterPage() {
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    const viewed = storage.get(STORAGE_KEYS.INTRO_TOKEN);

    if (viewed !== "true") {
      router.replace(`/${locale}/intro`);
    } else {
      router.replace(`/${locale}/main/profile`);
    }
  }, [router]);
  return null;
}
