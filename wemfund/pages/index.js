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

export default function Home() {
  return (
    <>
      <Head>
        <title>WemFund</title>
        <meta name="description" content="Payment for trips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Hero/>
      <HowToUse/>
      <Features/>
      <Reviews/>
      <Footer/>
    </>
  )
}
