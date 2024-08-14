import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <p className='uppercase font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>NO <span className='text-blue-400'>DAYS OFF</span></p>
      <p className='text-sm md:text-base font-light'>Never skip gym</p>
      <Button func={() => {
        window.location.href='#generate'
      }} text={"Accept"}></Button>
    </div>
  )
}
