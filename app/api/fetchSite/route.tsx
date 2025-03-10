import { NextResponse } from "next/server";
import { chromium } from "playwright";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const siteurl: any = searchParams.get("siteurl");
  console.log("LINK   " + siteurl);
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(siteurl, { waitUntil: "load" });
    // Pobranie pełnej zawartości HTML
    const html = await page.content();
    await browser.close();
    return NextResponse.json({ msg: "Scraping fine", status: 200, data: html });
  } catch (error) {
    console.error("Playwright error:", error);
    return NextResponse.json({ error: error, status: 500 });
  }
}
