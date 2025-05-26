"use client";

import { SessionStorage, STORAGE_KEYS } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function EnterPage() {
  const router = useRouter();

  useEffect(() => {
    const storage = new SessionStorage();
    const viewed = storage.get(STORAGE_KEYS.INTRO_TOKEN);
    const locale = window.location.pathname.split("/")[1];

    if (viewed === null) {
      router.replace(`/${locale}/intro`);
    } else {
      router.replace(`/${locale}/main/profile`);
    }
  }, [router]);
  return null;
}
