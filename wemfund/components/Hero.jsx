import React from "react";

function Hero() {
  return (
    <div className="text-darkblue">
      <div className="flex">
        <div className="w-1/2  flex flex-col p-8 px-10">
          <h1 className="text-5xl font-semibold leading-[52px] font-[open sans]">
            Pay rides <br></br>with ease
          </h1>
          <p className="text-xl my-5 font-[poppins]">
            With Wemfund you can easily pay for your ride on your mobile phone
            anywhere anytime.
          </p>
          <button className="bg-darkblue text-white w-fit px-10 py-3 mt-5 font-[poppins] rounded-2xl">
            Get started
          </button>
        </div>
        <img src="/SmartCar.png" />
      </div>
      <div className="flex justify-between px-10 my-5">
        <p className="self-center font-semibold text-xl ">
          Easy Payment Gateway, Sign up for free now!
        </p>

        <div className="flex space-x-10">
          <img src="/PlayStore.png" />
          <img src="/AppStore.png" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
