import React from 'react'

function About() {
  return (
    <div className='bg-black text-white h-screen'>
        <div>
             <h1 className='font-bold text-6xl'>
                Built On Rawness.
            </h1>
        </div>
        <div className='pt-10'>
           
            <p className='font-semibold place-items-center px-20'>
                We are a studio that believes great architecture is honest. No excess, no pretence — just space, material, and purpose working together. Every project we take is a commitment to that philosophy.

The architectural truth is found in the removal of the unnecessary.
            </p>
        </div>
        <div className='rounded-md pt-10 object content-center'>
            <img className='rounded-lg h-90 w-200 object-cover flex-col' src="./bg2.jpg" />
        </div>
    </div>
  )
}

export default About