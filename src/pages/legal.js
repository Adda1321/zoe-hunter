"use client";
import localFont from "next/font/local";
import Head from "next/head";
import Header from "../app/components/Header";
import LegalHeading from "@/app/components/LegalHeading";
import TermsOfUse from "@/app/components/TermsOfUse";
import PrivacyPolicy from "@/app/components/PrivacyPolicy";
import CookiesPolicy from "@/app/components/CookiesPolicy";
import Footer from "../app/components/Footer";

import { useEffect } from "react";
import i18n from "../app/config/localization/i18n";

const hallenger = localFont({
  src: [
    {
      path: "../../public/fonts/hallenger/HallengerSerifFont.otf",
      // path: 'fonts/hallenger/HallengerSerifFont.otf',
      style: "normal",
    },
  ],
  variable: "--font-hallenger",
});

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const language = localStorage.getItem("defaultLanguage");
      if (language !== null) {
        i18n.changeLanguage(language)
      }
      else{
        i18n.changeLanguage("sp")
      }
    
    }
    
    }, [])
  return (
    <main className={hallenger.className}>
        <Head>
        <title>Zoi Head Hunter</title>
        <meta name="description" content="Zoi Head Hunter" />
      </Head>
      <Header />
      <LegalHeading />
      <TermsOfUse />
      <PrivacyPolicy />
      <CookiesPolicy />
      {/* <Footer /> */}
    </main>
  );
}
