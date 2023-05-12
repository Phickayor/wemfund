import React, { useEffect } from "react";
import { faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init()
  }, [])
  const instagram = (
    <FontAwesomeIcon icon={faInstagram} className="font-semibold text-4xl" />
  );
  const twitter = (
    <FontAwesomeIcon icon={faTwitter} className="font-semibold text-4xl" />
  );
  const linkedin = (
    <FontAwesomeIcon icon={faLinkedinIn} className="font-semibold text-4xl" />
  );
  const mail = (
    <FontAwesomeIcon icon={faEnvelope} className="font-semibold text-4xl" />
  );
  return (
    <div className="bg-darkblue h-full border-white border-t-2 px-10 py-5 flex flex-col-reverse md:flex-row text-white">

      <div className="my-4 w-full">
        <div className="flex md:px-10 ">
          <img src="/favicon.ico" className="md:h-24 md:w-fit bg-white rounded-full border-none w-1/6 self-center" />
          <h1 className="self-center p-2 text-4xl font-semibold font-[poppins]">Trippayer</h1>
        </div>
        <p className="my-4 md:w-11/12 font-normal text-2xl">Trippayer is a payment gateway which can be used to make payment for trips in nigeria</p>

        <div className="flex mt-10 space-x-4">
          <a href="https://www.instagram.com/trippayer/">{instagram}</a>
          <a href="">{twitter}</a>
          <a href="">{linkedin}</a>
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-4 w-full text-[poppins] md:px-16 px-4 py-5 md:py-10"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="my-4 w-full">
          <h1 className="text-3xl font-semibold my-4">Quick Links</h1>
          <ul className="space-y-4 font-light text-2xl">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="my-4 w-full ">
          <h1 className="text-3xl font-semibold my-4">Supports</h1>
          <ul className="text-2xl space-y-4 font-light">
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
