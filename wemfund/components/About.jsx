import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
function About() {

  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="my-5  font-[poppins] lg:space-y-12 space-y-6 text-center w-9/12 mx-auto">
      <h1 className="text-darkblue font-semibold lg:text-7xl text-4xl">
        About Trippayer
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="lg:text-5xl text-2xl text-textcolor font-light"
      >
        Trippayer is a transportation payment mobile application that allow users to pay
        for transportation services from the convenience of their mobile app.
      </p>
    </div>
  );
}

export default About;
