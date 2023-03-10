import About from '@/components/About'
import DownloadApp from '@/components/DownloadApp'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Vision from '@/components/Vision'
import React from 'react'

function about() {
  return (
    <div>
        <NavBar/>
        <About/>
        <Vision/>
        <DownloadApp/>
        <Footer/>
    </div>
  )
}

export default about