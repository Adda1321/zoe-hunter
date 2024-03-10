"use client";
import localFont from "next/font/local";

import Header from "../app/components/Header";
import AgilityAndQuality from "../app/components/AgilityAndQuality";
import WelcomeSection from "../app/components/WelcomeSection";
import OurServices from "../app/components/OurServices";
import OurIndustries from "../app/components/OurIndustries";
import JoinUs from "../app/components/JoinUs";
import ContactUs from "../app/components/ContactUs";
import ValueYourTime from "../app/components/ValueYourTime";
import AboutUs from "../app/components/AboutUs";
import Footer from "../app/components/Footer";
import Head from "next/head";
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
      <WelcomeSection />
      <AboutUs />
      <ValueYourTime />
      <AgilityAndQuality />
      <OurServices />
      <OurIndustries />
      <JoinUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
