import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowToUse from '@/components/HowToUse'
import NavBar from '@/components/NavBar'
import Reviews from '@/components/Reviews'
import Head from 'next/head'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <title>Trippayer</title>
        <meta name="description" content="Payment for trips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <NavBar />
      <Hero />
      <div data-aos="zoom-in-right"
        data-aos-duration="1000">
        <HowToUse />
      </div>
      <div data-aos="fade-right"
        data-aos-duration="1000" >
        <Features />
      </div>
      <div data-aos="fade-down"
        data-aos-duration="1000" >
        <Reviews />
      </div>
      <div data-aos="fade-up"
        data-aos-duration="1500" >
        <Footer />
      </div>
    </>
  )
}
