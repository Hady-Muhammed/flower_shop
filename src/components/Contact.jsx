import React from 'react'
import MainHeading from './MainHeading'
import img from '../assets/images/contact-img.svg'
import MainBtn from './MainBtn'
const Contact = () => {
  return (
    <div className='mt-16 max-w-[1150px] mx-auto p-5 mb-10' id='contact'>
        <MainHeading firstWord="Contact" p="Us"/>
        <div data-aos='fade-up-right' data-aos-duration='1000' className="flex xs:flex-col lg:flex-row mt-16">
            <form action="" className='xs:w-full lg:w-1/2 space-y-10 p-4 shadow-md'>
                <input required className='outline-none focus:border-1 focus:border-pink-400 focus:placeholder:p-5 placeholder:duration-300 rounded-md p-2 w-full border block' type="text" placeholder='Name'/>
                <input required className='outline-none focus:border-1 focus:border-pink-400 focus:placeholder:p-5 placeholder:duration-300 rounded-md p-2 w-full border block' type="email" placeholder='Email'/>
                <input required className='outline-none focus:border-1 focus:border-pink-400 focus:placeholder:p-5 placeholder:duration-300 rounded-md p-2 w-full border block' type="number" placeholder='Phone'/>
                <textarea className='outline-none focus:border-1 focus:border-pink-400 rounded-md p-2 resize-none w-full border block focus:placeholder:pl-5 placeholder:duration-300' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <MainBtn content="Send Message"/>
            </form>
            <img src={img} alt="flowers" className='xs:w-full lg:w-1/2' />
        </div>
    </div>
  )
}

export default Contact