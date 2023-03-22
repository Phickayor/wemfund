import React from "react";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  const instagram = (
    <FontAwesomeIcon icon={faInstagram} className="font-semibold text-4xl" />
  );
  const facebook = (
    <FontAwesomeIcon icon={faFacebook} className="font-semibold text-4xl" />
  );
  return (
    <div className="bg-darkblue border-white border-t-2 text-white">
      <div className="flex justify-between text-[poppins] px-16 py-10">
        <div className="my-4 w-1/2">
          <h1 className="text-4xl font-bold my-4">Logo</h1>
          <p className="my-4 w-11/12 font-normal text-2xl">Trippayer is a payment gateway which can be used to make payment for trips in nigeria</p>

          <div className="flex mt-10 space-x-4">
            <a href="">{instagram}</a>
            <a href="">{facebook}</a>
            <a href="">{instagram}</a>
            <a href="">{facebook}</a>
          </div>
        </div>
        <div className="my-4 px-10">
          <h1 className="text-3xl font-semibold my-4">Quick Links</h1>
          <ul className="space-y-4 font-medium text-2xl">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="my-4 px-10">
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
