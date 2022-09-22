import React from 'react'
import MainBtn from './MainBtn'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Hero = () => {
  return (
    <main className='h-[80vh] bg-cover bg-center flex items-center' id='home'>
        <div className='w-fit xs:p-8 lg:p-16 pt-6 space-y-3'>
            <h1 className='xs:text-5xl lg:text-7xl font-semibold' data-aos='fade-up' data-aos-duration='1000'>Fresh Flowers</h1>
            <p className='text-pink-400 xs:text-xl lg:text-3xl font-semibold' data-aos='fade-up' data-aos-duration='1000'>Natural & Beautiful Flowers</p>
            <p className='text-gray-400 max-w-[500px]' data-aos='fade-up' data-aos-duration='1000' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, officia distinctio. Doloribus quam quod tenetur quasi sint excepturi sunt minima.</p>
            <a href="#products" className='block mt-[2em_!important]'>
              <MainBtn content="Shop Now"/>
            </a>
        </div>
    </main>
  )
}

export default Hero