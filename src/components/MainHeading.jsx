import React from 'react'


const MainHeading = ({firstWord , p}) => {
  return (
    <h2  data-aos='flip-down' data-aos-duration='1000' className='text-center bg-[#fff4fa] text-4xl p-10 font-bold'><span className='text-pink-400'>{firstWord}</span> {p}</h2>
    )
}

export default MainHeading