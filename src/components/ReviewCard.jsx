import React from 'react'
import {HiStar} from 'react-icons/hi'
const ReviewCard = ({img}) => {
  return (
    <div data-aos='fade-up-left' data-aos-duration='1000' className='p-5 space-y-4 shadow-lg border'>
        <div className="flex">
            <HiStar size={30} className='text-pink-400'/>
            <HiStar size={30} className='text-pink-400'/>
            <HiStar size={30} className='text-pink-400'/>
            <HiStar size={30} className='text-pink-400'/>
            <HiStar size={30} className='text-pink-400'/>
        </div>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae sint beatae placeat praesentium facere, error unde mollitia saepe cum est! Voluptatibus distinctio est nesciunt molestiae facere doloremque ipsum id!</p>
        <div className="flex space-x-3">
            <img className='w-[50px] rounded-full' src={img} alt="x" />
            <div>
                <h4>John Doe</h4>
                <p>Happy Customer</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard