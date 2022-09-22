import React from "react";
import MainHeading from "./MainHeading";
import vid from "../assets/images/about-vid.mp4";
import MainBtn from "./MainBtn";

const AboutUs = () => {
  return (
    <div className="max-w-[1150px] mt-16 mx-auto p-5" id='about'>
      <MainHeading firstWord="About" p="Us" />

      <div className="flex mt-16 space-x-8 xs:flex-col lg:flex-row">
        <div className="video relative before:absolute before:w-full before:p-5 before:mix-blend-lighten before:font-bold before:word before:text-4xl before:z-10 before:top-1/2 before:left-0 before:translate-y-[-50%] before:content-['Best__Flower_Sellers'] before:text-center before:bg-white">
          <video src={vid} loop autoPlay muted className="w-[1500px] "></video>
        </div>
        <div data-aos='zoom-in' data-aos-duration='1000' className="space-y-4 flex flex-col justify-center lg:mt-0 xs:mt-10">
          <h3 className="text-4xl font-bold">Why Choose Us?</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            suscipit optio voluptates eos, nobis laborum explicabo consequuntur
          </p>
          <p className="text-gray-400">
          nemo repellendus enim repudiandae recusandae libero, pariatur
            possimus illum dolor tempore ad necessitatibus?
          </p>
          <MainBtn content='Learn More'/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
