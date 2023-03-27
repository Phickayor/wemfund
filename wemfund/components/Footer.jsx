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
    <div className="bg-darkblue border-white border-t-2 text-white">
      <div
        className="flex flex-wrap md:flex-nowrap justify-between text-[poppins] md:px-16 px-8 py-10"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="my-4 md:w-1/2 order-3 md:order-1">
          <img src="/lightlogo.png" className="text-4xl font-bold my-4 h-32" alt="Logo" />
          <p className="my-4 md:w-11/12 font-normal text-2xl">TripPayer is a payment gateway which can be used to make payment for trips in nigeria</p>

          <div className="flex mt-10 space-x-4">
            <a href="https://www.instagram.com/trippayer/">{instagram}</a>
            <a href="">{twitter}</a>
            <a href="">{linkedin}</a>
          </div>
        </div>
        <div className="my-4 md:px-10 px-5 order-1 md:order-2 w-1/2 md:w-fit">
          <h1 className="text-3xl font-semibold my-4">Quick Links</h1>
          <ul className="space-y-4 font-medium text-2xl">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="my-4 md:px-10 px-5 order-2 md:order-3 w-1/2 md:w-fit">
          <h1 className="text-3xl font-semibold my-4">Supports</h1>
          <ul className="text-2xl space-y-4 font-medium">
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
