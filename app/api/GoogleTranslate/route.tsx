import { NextResponse } from "next/server";
import { chromium } from "playwright";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const siteurl: any =
    "https://translate.google.com/translate?sl=auto&tl=pl&u=https://ap.apinmo.com/app/escaparatecliente/index.php?cliente=012_24501150061747199945M22000473&amp;x=1741616389";
  // console.log("LINK   " + siteurl);
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(siteurl);
    // Pobranie pełnej zawartości HTML

    await page.waitForSelector("body"); // Czekaj, aż strona się załaduje

    // Pobierz przetłumaczony tekst
    const translatedText = await page.evaluate(() => {
      return document.body.innerText; // Pobierz cały tekst ze strony
    });

    console.log("Pobrano przetłumaczoną stronę");

    await browser.close();
    return NextResponse.json({ msg: "Scraping fine", status: 200, data: translatedText });
  } catch (error) {
    console.error("Playwright error:", error);
    return NextResponse.json({ error: error, status: 500 });
  }
}
