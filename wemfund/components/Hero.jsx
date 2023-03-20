import React from "react";
function Hero() {
  return (
    <div className="text-darkblue text-center">
      <div className="flex flex-col justify-center py-4 md:px-10 px-5 ">
        <div className="md:w-1/2 px-5 w-5/6 self-center space-y-5">
          <h1 className="md:text-6xl text-3xl font-semibold md:leading-[72px] leading-[50px] font-[poppins]">
            Pay Ride <br className="md:hidden" /> With Ease
          </h1>
          <p className="md:text-3xl text-lg font-[poppins] mx-10">
            With Trippayer you can easily pay for your ride on your mobile phone
            anywhere anytime.
          </p>
        </div>
        <div className=" mx-auto">
          <img
            src="/SmartCar.png"

          />
        </div>

        <p className="font-semibold text-6xl leading-[70px] ">
          Easy <b className="text-purple font-semibold">Payment for trips </b><br />
          Sign up for <b className="text-purple font-semibold">free </b>now!
        </p>

        <div className="flex justify-center my-5 ">
          <img src="/PlayStore.png" className="md:mx-4 m-2" />
          <img src="/AppStore.png" className="md:mx-4 m-2" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
