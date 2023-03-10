import React from "react";
function Hero() {
  return (
    <div className="text-darkblue">
      <div className="flex p-4 px-10">
        <div className="md:w-1/2 self-center ">
          <h1 className="text-5xl font-semibold leading-[52px] font-[open sans]">
            Pay rides with ease
          </h1>
          <p className="text-xl my-5 font-[poppins] w-1/2 md:w-full">
            With Wemfund you can easily pay for your ride on your mobile phone
            anywhere anytime.
          </p>
          <button className="bg-darkblue text-white w-fit px-10 py-3 mt-5 font-[poppins] rounded-2xl">
            Get started
          </button>
        </div>
        <img
          src="/SmartCar.png"
          className="w-1/2 absolute md:relative right-0 "
        />
      </div>
      <div className="flex justify-between mx-auto w-11/12 my-5">
        <p className="w-1/2 self-center font-semibold text-xl ">
          Easy Payment Gateway, Sign up for free now!
        </p>

        <div className="flex justify-end  space-x-10 w-1/2 absolute right-5 md:relative ">
          <img src="/PlayStore.png" />
          <img src="/AppStore.png" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
