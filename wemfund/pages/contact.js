import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

function contact() {
  return (
    <div className='bg-darkblue'>
        <NavBar/>
        <div className='h-52 w-full'>
          <img src='/ContactImage.png' className='h-52 w-full'/>
        </div>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default contact