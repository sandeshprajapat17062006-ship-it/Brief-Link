
import React from 'react'
import Firstsection from '../Section/FirstSection'
import InputSection from '../Section/InputSection'
import MyLinks from '../Section/MyLinks'

const MainPage = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[900px] flex-grow flex-col items-center px-5 py-16 md:px-8 md:py-20">
      <Firstsection />
      <InputSection />
      <MyLinks />
    </div>
  )
}

export default MainPage
