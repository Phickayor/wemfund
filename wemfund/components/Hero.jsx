import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="text-darkblue text-center">
      <div className="flex flex-col justify-center py-4 lg:px-10 px-5 my-10">
        <div className="lg:w-1/2 px-5 w-5/6 self-center space-y-5">
          <h1 className="lg:text-6xl text-3xl font-semibold lg:leading-[72px] font-[poppins]">
            Pay Ride <br /> With Ease
          </h1>
          <p className="lg:text-3xl text-lg font-medium font-[poppins] lg:mx-10">
            With Trippayer you can easily pay for your ride on your mobile phone
            anywhere anytime.
          </p>
        </div>
        <div className=" mx-auto">
          <img
            src="/SmartCar.png"

          />
        </div>

        <p
          className="mt-10 font-semibold text-3xl lg:text-6xl lg:leading-[70px] "
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Easy <b className="text-purple font-semibold">Payment for trips </b><br />
          Sign up for <b className="text-purple font-semibold">free </b>now!
        </p>

        <div
          className="flex justify-center my-5 "
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src="/PlayStore.png" className="lg:mx-4 m-2 rounded-3xl" />
          <img src="/AppStore.png" className="lg:mx-4 m-2 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
