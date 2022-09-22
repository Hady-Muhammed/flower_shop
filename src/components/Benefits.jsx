import React from 'react'
import Card from './Card'
import {MdLocalShipping , MdOutlinePayment} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {ImGift} from 'react-icons/im'
const Benefits = () => {
  return (
    <div className='flex lg:space-x-4 justify-center py-16 mt-10 bg-gray-300 p-5 xs:space-y-4  lg:space-y-0 lg:flex-row xs:flex-col'>
        <Card Icon={MdLocalShipping} h4="Free Shipping" p="On All Orders"/>
        <Card Icon={GiReceiveMoney} h4="10 Days Returns" p="Moneyback Guarantee"/>
        <Card Icon={ImGift} h4="Offer & Gift" p="On All Orders"/>
        <Card Icon={MdOutlinePayment} h4="Secure Payment" p="Protected By Paypal"/>
    </div>
  )
}

export default Benefits