"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  // const param = encodeURIComponent(siteurl);
  // const [site, setSite] = useState();
  // const [link, setLink] = useState("");

  // const fetchSite = async () => {
  //   try {
  //sciagmy stronę z głownego linka
  // const result = await fetch(`/api/fetchSite?siteurl=${param}`);
  // const data = await result.json();
  // const resultSite = await data.data;

  // //znajdujemy właściwy URL
  // const regex = /src="([^"]+)"/g;
  // let matches: any;
  // matches = regex.exec(resultSite);

  // const res = await fetch(`/api/fetchSite?siteurl=${matches[1]}`);
  // const dat = await res.json();
  // const resultS = await dat.data;

  //   const res = await fetch(`/api/GoogleTranslate`);
  //   const dat = await res.json();
  //   console.log(dat);
  //   const resultS = await dat.data;
  //   setSite(resultS);
  //   console.log(resultS);
  //   // handleTranslate(matches[1]);
  // } catch (error) {
  //   console.error("Błąd:", error);
  //   return null;
  // }
  // };

  //tłumaczeni

  // const handleTranslate = async (matches: any) => {
  //   console.log("works");
  //   try {
  //     const result = await fetch(`/api/DeepL`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ matches, targetLanguage: "PL" }),
  //     });

  //     const res = await result.json();
  //     setSite(res.translatedHtml);
  //     console.log(res.translatedHtml);
  //   } catch (error) {
  //     console.error("Błąd tłumaczenia:", (error as Error).stack || error);
  //     throw new Error(`Translation error: ${(error as Error).message}`);
  //   }
  // };

  function Search() {
    const params = useSearchParams();
    const siteurl: string | null = params.get("siteurl");
    return <iframe className="w-screen h-screen" src={`https://${siteurl}`}></iframe>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search />
    </Suspense>
  );
}
