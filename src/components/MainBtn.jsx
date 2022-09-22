import React from 'react'

const MainBtn = ({content}) => {
  return (
    <button data-aos-once='true' data-aos='fade-in' data-aos-delay="700" data-aos-duration='1000' className='rounded-full text-white bg-gray-900 px-12 hover:bg-gray-700 duration-150 shadow-md shadow-black py-3'>
        {content}
    </button>
  )
}

export default MainBtn