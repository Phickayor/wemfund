import React, { useEffect } from "react";
import { faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Footer() {
  useEffect(() => {
    AOS.init()
  }, [])
  const instagram = (
    <FontAwesomeIcon icon={faInstagram} className="font-semibold text-2xl self-center lg:text-4xl " />
  );
  const linkedin = (
    <FontAwesomeIcon icon={faLinkedinIn} className="font-semibold text-2xl self-center lg:text-4xl " />
  );
  const twitter = (
    <FontAwesomeIcon icon={faTwitter} className="font-semibold text-2xl self-center lg:text-4xl " />
  );
  return (
    <div className="bg-darkblue h-full border-white border-t-2 lg:px-10 p-5 lg:py-5 flex flex-col-reverse lg:flex-row text-white">

      <div className="lg:my-4 w-full font-[poppins]">
        <div className="flex lg:px-10">
          <img src="/favicon.ico" className="lg:h-24 lg:w-fit w-1/6 self-center" />
          <h1 className="self-center p-2 lg:text-4xl text-3xl font-bold font-[poppins]">Trippayer</h1>
        </div>
        <p className="my-4 lg:w-11/12 text-md lg:text-2xl">Trippayer is a payment gateway which can be used to make payment for trips in nigeria</p>

        <div className="flex lg:mt-10 space-x-4 ">
          <a href="https://www.instagram.com/trippayer/" className="bg-purple px-2 py-1 hover:bg-inherit rounded-full">{instagram}</a>
          <a href="https://www.linkedin.com/in/trippayer-812955276/" className="bg-purple px-2 py-1 hover:bg-inherit rounded-full">{linkedin}</a>
          <a href="https://www.twitter.com/trippayer" className="bg-purple px-2 py-1 hover:bg-inherit rounded-full">{twitter}</a>
        </div>
      </div>
      <div
        className="flex justify-around w-full font-[pon....ppins] py-5 lg:py-10"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="lg:my-4  lg:space-y-10">
          <h1 className="text-lg lg:text-3xl my-4 ">Quick Links</h1>
          <ul className="lg:space-y-4 space-y-2 font-medium text-sm lg:text-2xl whitespace-nowrap">
            <Link href="/terms"><li>Terms and Conditions</li></Link>
            <Link href="/privacy-policy"><li>Privacy Policy</li></Link>
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
