import About from '@/components/About'
import DownloadApp from '@/components/DownloadApp'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Vision from '@/components/Vision'
import Head from 'next/head'
import React from 'react'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false; /* eslint-disable import/first */
function about() {
  return (
    <div>
      <Head>
        <title>About Trippayer</title>
        <meta name="description" content="Payment for trips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar firstNav={"Home"} firstNavLink={"/"} secondNav={"Contact Us"} secondNavLink={"/contact"} />
      <About />
      <Vision />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default about