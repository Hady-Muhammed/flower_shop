import React from 'react'
import avatar from '../assets/images/avatar.jpg'
const Profile = () => {
  return (
    <div className='flex my-20 justify-evenly'>
      <img className='rounded-full w-[200px] h-[200px] object-cover' src={avatar} alt='avatar'/>
      <div className='w-[60%]'>
        <label>Username</label>
        <input className='w-[70%] block p-5 bg-gray-100 border-b border-black' type='text' value='John Doe'/>
        <label className='block mt-10'>Password</label>
        <input className='w-[70%] block p-5 bg-gray-100 border-b border-black' type='password' value='25784321hm'/>
        <div className='mt-10 font-semibold text-2xl'>
          Current Balance : 500$
        </div>
      </div>
    </div>
  )
}

export default Profile