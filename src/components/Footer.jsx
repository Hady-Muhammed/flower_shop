import React from "react";
import payMethods from "../assets/images/payment.png";
const Footer = () => {
  return (
    <>
      <footer data-aos='fade-up' data-aos-duration='1000' className="max-w-[1000px] my-10 mt-20 gap-10 xs:space-x-0 xs:text-center lg:text-left lg:space-x-10  mx-auto xs:grid md:grid-cols-2 lg:grid-cols-4">
        <ul className="space-y-4">
          <h1 className="text-2xl font-semibold">Quick Links</h1>
          <a href="#" className="block hover:text-pink-400 duration-300 text-gray-500">Home</a>
          <a href="#about" className="block hover:text-pink-400 duration-300 text-gray-500">About</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">Products</a>
          <a href="#review" className="block hover:text-pink-400 duration-300 text-gray-500">Review</a>
          <a href="#contact" className="block hover:text-pink-400 duration-300 text-gray-500">Contact</a>
        </ul>
        <ul className="space-y-4">
          <h1 className="text-2xl font-semibold">Extra Links</h1>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">My Account</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">My Order</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">My Favorite</a>
        </ul>
        <ul className="space-y-4">
          <h1 className="text-2xl font-semibold">Locations</h1>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">India</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">USA</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">Japan</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">France</a>
        </ul>
        <ul className="space-y-4">
          <h1 className="text-2xl font-semibold">Contact Info</h1>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">+123-456-8790</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">Example@gmail.com</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">Cairo, Egypt - 400104</a>
          <a href="#products" className="block hover:text-pink-400 duration-300 text-gray-500">
            <img src={payMethods} className='mx-auto' alt="payMethods" />
          </a>
        </ul>
      </footer>
      <div className="max-w-[1000px] text-center mx-auto p-10 border-t border-t-pink-400">
        <h5>
          Created By Mr.{" "}
          <span className="text-pink-400 font-semibold">Hady Muhammed</span> |
          All Rights Reserved
        </h5>
      </div>
    </>
  );
};

export default Footer;
