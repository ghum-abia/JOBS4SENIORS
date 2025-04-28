import React from 'react'
import Navbar from './navbar'
import Herosection from './herosection'
import Footer from './footer'

function landingpage() {
  return (
    <div className="scroll-smooth">
        <Navbar />
        <Herosection />
        <Footer />
       
    </div>
  )
}

export default landingpage