'use client'
import Image from 'next/image'
import localFont from 'next/font/local';
import 'notyf/notyf.min.css';

import Header from './components/Header'
import AgilityAndQuality from './components/AgilityAndQuality'
import WelcomeSection from './components/WelcomeSection';
import OurServices from './components/OurServices';
import OurIndustries from './components/OurIndustries';
import JoinUs from './components/JoinUs';
import ContactUs from './components/ContactUs';
import ValueYourTime from './components/ValueYourTime';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const hallenger = localFont({
  src: [
    {
      path: '../../public/fonts/hallenger/HallengerSerifFont.otf',
      // path: 'fonts/hallenger/HallengerSerifFont.otf',
      style: 'normal',
    },
  ],
  variable: '--font-hallenger',
});

export default function Home() {

  return (
    <main className={hallenger.className}>
      {/* // <main className="font-main"> */}
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
  )
}
