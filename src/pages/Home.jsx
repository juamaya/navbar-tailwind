import React from 'react'
import pr from '../images/portafolio-juan.png'

const Home = () => {
  return (
    <main className='bg-indigo-500 w-full h-screen '>
      <div className='bg-black text-center text-white  '>Home</div>
      <div className='flex justify-center'>
        <img src={pr} alt="puerto-real"   className='  w-full' />
      </div>


    </main>

  )
}

export default Home