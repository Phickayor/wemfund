import About from '@/components/About'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

function about() {
  return (
    <div>
        <NavBar/>
        <About/>
        <Footer/>
    </div>
  )
}

export default about