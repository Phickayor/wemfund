import React from "react";

function Footer() {
  return (
    <div className="bg-darkblue border-white border-t-2 text-white">
      <div className="flex flex-wrap justify-between text-[poppins] md:px-20 px-10  py-5  ">
        <div className="my-4">
          <h1 className="text-2xl font-semibold my-4">Company</h1>
          <ul className="space-y-4">
            <li>About Us</li>
            <li>The Wemfund Blog</li>
            <li>Join our team</li>
            <li>Our services</li>
          </ul>
        </div>
        <div className="my-4">
          <h1 className="text-2xl font-semibold my-4">Resources</h1>
          <ul className="space-y-4">
            <li>Privacy and Policy</li>
            <li>Terms Of Services</li>
            <li>Feedback</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="my-4">
          <h1 className="text-2xl font-semibold my-4">Address</h1>
          <p className="mt-4">01 stong avenue, ikeja Lagos State.</p>
        </div>
      </div>
      <div className="md:px-20 px-10 flex space-x-5">
        <img src="/favicon.ico" />
        <p className="self-center font-[open sans]">
          Wemfund &copy; 2023 wemfund.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
