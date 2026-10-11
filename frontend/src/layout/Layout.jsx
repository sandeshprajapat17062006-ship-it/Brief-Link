
import React from 'react'
import Navbar from '../components/Navbar'
import MainPage from '../pages/MainPage'
import Footer from '../Section/Footer'

const Layout = () => {
  return (
    <div className='min-h-screen bg-[#F7F3EB] text-[#2B1718] transition-all duration-200'>
        <Navbar />
        <MainPage />
        <Footer />
    </div>
  )
}

export default Layout
