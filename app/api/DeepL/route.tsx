// app/api/translate/route.ts
import { NextResponse } from "next/server";
import * as deepl from "deepl-node";

const authKey = "9e4f8b78-fe23-4d13-945c-f6e83885d662:fx"; // Zastąp swoim kluczem API
const translator = new deepl.Translator(authKey);

export async function POST(request: Request) {
  try {
    const { resultSite, targetLanguage } = await request.json();

    if (!resultSite || !targetLanguage) {
      return NextResponse.json({ error: "Brak HTML lub języka docelowego" }, { status: 400 });
    }

    const results = await translator.translateText(
      resultSite,
      null,
      targetLanguage as deepl.TargetLanguageCode,
    );
    if (Array.isArray(results)) {
      const translatedTexts = results.map((result) => result.text).join(""); // Łączy wszystkie teksty
      return NextResponse.json({ translatedHtml: translatedTexts, status: 200 });
    } else {
      return NextResponse.json({ translatedHtml: results.text, status: 200 });
    }
  } catch (error: any) {
    console.error("Błąd tłumaczenia DeepL:", error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
