import React from 'react'
import ReviewCard from './ReviewCard'
import pic1 from "../assets/images/pic-1.png"
import pic2 from "../assets/images/pic-2.png"
import pic3 from "../assets/images/pic-3.png"
import MainHeading from './MainHeading'
const Reviews = () => {
  return (
    <>
    <div className='mt-16 max-w-[1150px] mx-auto p-5 mb-10' id='review'>
      <MainHeading firstWord="Customer's" p='Review'/>
    </div>
    <section className='flex xs:flex-col lg:flex-row max-w-[1150px] p-5 mb-10 mx-auto xs:space-y-4 lg:space-y-0 xs:space-x-0 lg:space-x-4'>
        <ReviewCard img={pic1}/>
        <ReviewCard img={pic2}/>
        <ReviewCard img={pic3}/>
    </section>
    </>
  )
}

export default Reviews