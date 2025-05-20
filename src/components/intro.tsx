"use client";

import { SessionStorage, STORAGE_KEYS } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const fullText = `let yurim = {
  name: "Yurim Lee",
  ...
};

console.log(yurim); ↵`;

const storage = new SessionStorage();

export const Intro = () => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const indexRef = useRef(0);

  const [isDone, setIsDone] = useState(false);
  const [exit, setExit] = useState(false);

  const [shouldShowIntro, setShouldShowIntro] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined") return;

    const viewed = storage.get(STORAGE_KEYS.INTRO_TOKEN);

    if (viewed !== "true") {
      setShouldShowIntro(true);

      const timer = setInterval(() => {
        const i = indexRef.current;

        if (i < fullText.length) {
          setDisplayedText((prev) => [...prev, fullText.charAt(i)]);
          indexRef.current += 1;
        } else {
          clearInterval(timer);
          storage.set(STORAGE_KEYS.INTRO_TOKEN, "true");
        }
      }, 45);

      setTimeout(() => setIsDone(true), 3800);
      setTimeout(() => setExit(true), 3950);
      setTimeout(() => router.push("/profile"), 4050);

      return () => clearInterval(timer);
    }
  }, [router]);

  if (!shouldShowIntro) return null;

  const renderText = () => {
    const joined = displayedText.join("");
    const parts = joined.split(/(yurim)/g);

    return parts.map((part, idx) =>
      part === "yurim" ? (
        <span key={idx} className="text-[#5C4ACD]">
          {part}
        </span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

  return (
    <div>
      <div
        className={`fixed inset-0 z-100 bg-[#181818] text-white flex items-center justify-center text-xl px-4 font-mono pointer-events-auto ${
          exit ? "slide-diagonal-out" : ""
        }`}
      >
        <pre className="whitespace-pre-wrap">{renderText()}</pre>
      </div>
      {isDone && (
        <div className="fixed z-[11] fade-out inset-0 bg-white/10 pointer-events-none"></div>
      )}
    </div>
  );
};
