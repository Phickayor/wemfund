import About from '@/components/About'
import DownloadApp from '@/components/DownloadApp'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Vision from '@/components/Vision'
import Head from 'next/head'
import React from 'react'

function about() {
  return (
    <div>
    <Head>
      <title>About Trippayer</title>
      <meta name="description" content="Payment for trips" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <NavBar/>
        <About/>
        <Vision/>
        <DownloadApp/>
        <Footer/>
    </div>
  )
}

export default about