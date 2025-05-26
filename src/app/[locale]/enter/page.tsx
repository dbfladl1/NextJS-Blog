"use client";

import { SessionStorage, STORAGE_KEYS } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const storage = new SessionStorage();
export default function EnterPage() {
  const router = useRouter();

  useEffect(() => {
    const viewed = storage.get(STORAGE_KEYS.INTRO_TOKEN);

    if (viewed !== "true") {
      router.replace(`/intro`);
    } else {
      router.replace(`/main/profile`);
    }
  }, [router]);
  return null;
}
