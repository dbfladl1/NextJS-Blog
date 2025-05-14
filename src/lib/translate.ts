export async function translateText(text: string[], targetLang: string) {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, targetLang }),
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      console.error("Translation error:", data.error);
      return data.err;
    }
  }
