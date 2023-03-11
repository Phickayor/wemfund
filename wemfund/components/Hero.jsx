import React from "react";
function Hero() {
  return (
    <div className="text-darkblue">
      <div className="flex py-4 md:px-10 px-5">
        <div className="md:w-1/2 w-5/6 self-center ">
          <h1 className="md:text-5xl text-4xl font-semibold md:leading-[72px] leading-[50px] font-[open sans]">
            Pay Ride <br className="md:hidden" /> With Ease
          </h1>
          <p className="md:text-xl text-lg my-5 font-[poppins] w-full">
            With Wemfund you can easily pay for your ride on your mobile phone
            anywhere anytime.
          </p>
          <button className="bg-darkblue text-white w-fit px-10 py-3 mt-5 font-[poppins] rounded-2xl">
            Get started
          </button>
        </div>
        <div className="w-2/3 md:w-1/2 flex flex-col justify-center">
          <img
            src="/SmartCar.png"
            className="w-full h-1/2 md:h-full relative right-0 "
          />
        </div>
      </div>
      <div className="md:flex mx-auto w-11/12 text-center md:text-left my-5">
        <p className="md:w-1/2 self-center my-4 md:my-0 font-semibold text-xl ">
          Easy Payment Gateway, Sign up for free now!
        </p>

        <div className="flex md:justify-end justify-center  md:w-1/2 relative ">
          <img src="/PlayStore.png" className="md:mx-4 m-2" />
          <img src="/AppStore.png" className="md:mx-4 m-2" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
