import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
config.autoAddCss = false; /* eslint-disable import/first */

function contact() {
  return (
    <div>
      <Head>
        <title>Trippayer | Contact</title>
        <meta name="description" content="Payment for trips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default contact