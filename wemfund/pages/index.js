import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowToUse from '@/components/HowToUse'
import NavBar from '@/components/NavBar'
import Reviews from '@/components/Reviews'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>WemFund</title>
        <meta name="description" content="Payment for trips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <NavBar/>
      <Hero/>
      <HowToUse/>
      <Features/>
      <Reviews/>
      <Footer/>
    </>
  )
}
