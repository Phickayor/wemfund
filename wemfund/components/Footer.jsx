import React, { useEffect } from "react";
import { faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init()
  }, [])
  const instagram = (
    <FontAwesomeIcon icon={faInstagramSquare} className="font-semibold text-3xl lg:text-4xl hover:text-purple" />
  );
  const linkedin = (
    <FontAwesomeIcon icon={faLinkedin} className="font-semibold text-3xl lg:text-4xl hover:text-purple" />
  );
  return (
    <div className="bg-darkblue h-full border-white border-t-2 lg:px-10 p-5 lg:py-5 flex flex-col-reverse lg:flex-row text-white">

      <div className="lg:my-4 w-full font-[poppins]">
        <div className="flex lg:px-10">
          <img src="/favicon.ico" className="lg:h-24 lg:w-fit w-1/6 self-center" />
          <h1 className="self-center p-2 lg:text-4xl text-3xl font-bold font-[poppins]">Trippayer</h1>
        </div>
        <p className="my-4 lg:w-11/12 text-md lg:text-2xl">Trippayer is a payment gateway which can be used to make payment for trips in nigeria</p>

        <div className="flex lg:mt-10 mt-5 space-x-4 ">
          <a href="https://www.instagram.com/trippayer/">{instagram}</a>
          <a href="">{linkedin}</a>
        </div>
      </div>
      <div
        className="flex justify-around w-full font-[poppins] py-5 lg:py-10"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="lg:my-4  lg:space-y-10">
          <h1 className="text-lg lg:text-3xl my-4 ">Quick Links</h1>
          <ul className="lg:space-y-4 space-y-2 font-medium text-sm lg:text-2xl whitespace-nowrap">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="lg:my-4 lg:space-y-10">
          <h1 className="text-lg lg:text-3xl my-4">Supports</h1>
          <ul className="text-sm lg:text-2xl space-y-2 lg:space-y-4 font-medium">
            <li>Help</li>
            <li>Contact us</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Footer;
