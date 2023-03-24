import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
function DownloadApp() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div
      className="mx-auto md:w-10/12 w-11/12 text-center my-10"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="md:text-6xl text-4xl font-semibold md:leading-[52px] font-[poppins] text-darkblue">
        Download the TripPayer App
      </h1>
      <p className="md:text-4xl text-2xl my-5 mx-auto md:w-3/5">Join over 200+ people already growing with TripPayer</p>
      <button className="bg-darkblue text-white font-medium text-2xl px-10 py-3 mt-5 font-[poppins] rounded-xl">
        Download app
      </button>
    </div>
  );
}

export default DownloadApp;
