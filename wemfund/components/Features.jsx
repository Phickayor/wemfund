import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
function Features() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="font-[poppins] my-20 mx-auto w-10/12 font-[poppins] flex flex-col md:flex-row text-textcolor space-y-10 md:space-y-0 space-x-0 md:space-x-10">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className=" text-center md:text-left md:border-none border-b-2  border-dashed border-bordercolor pb-6 ">
        <div className="bg-darkblue md:mx-0 mx-auto w-24 h-24 rounded-full flex">
          <img
            src="/Online payment.png"
            className="object-fit mx-auto self-center "
          />
        </div>
        <div className="space-y-2 mt-4">
          <h1 className="font-semibold text-darkblue md:text-3xl text-2xl">Pay For Ride</h1>
          <p className="md:text-xl text-lg">With Trippayer you can pay for your rides seamlessly</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className=" text-center md:text-left md:border-none border-b-2 border-dashed border-bordercolor pb-6 ">
        <div className="bg-darkblue md:mx-0 mx-auto w-24 h-24 rounded-full flex">
          <img src="/multipayment.png"
            className="object-fit mx-auto self-center "
          />
        </div>
        <div className="space-y-2 mt-4">
          <h1 className="font-semibold text-darkblue md:text-3xl text-2xl">
            Recieve Funds
          </h1>
          <p className="md:text-xl text-lg">
            Trippayer gives you abilily to receive funds as a driver
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className=" text-center md:text-left md:border-none border-b-2 border-dashed border-bordercolor pb-6 ">
        <div className="bg-darkblue md:mx-0  mx-auto w-24 h-24 rounded-full flex">
          <img src="/nfc payment.png" className="rounded-full w-24 h-24 p-2 self-center mx-auto " />
        </div>
        <div className="space-y-2 mt-4">
          <h1 className="font-semibold text-darkblue md:text-3xl text-2xl">Top Up funds</h1>
          <p className="md:text-xl text-lg">You can topup your wallet from your bank with ease</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
