import { NextRequest, NextResponse } from "next/server";
type TranslationItem = {
  translatedText: string;
  detectedSourceLanguage?: string;
  model?: string;
};
export async function POST(req: NextRequest) {
  try {
    const { text, targetLang } = await req.json();

    const res = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text, // string[]
          target: targetLang, 
          format: "text",
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      const translatedTexts = data.data.translations.map(
        (item: TranslationItem) => item.translatedText
      );

      return NextResponse.json({ translated: translatedTexts });
    } else {
      console.error("❌ Google API 오류:", data.error);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }
  } catch (err) {
    console.error("💥 서버 내부 오류:", err);
    return NextResponse.json(
      { error: "서버 오류 발생", detail: String(err) },
      { status: 500 }
    );
  }
}
