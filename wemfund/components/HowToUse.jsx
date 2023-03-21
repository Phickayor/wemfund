import React from "react";

function HowToUse() {
  return (
    <div className="flex font-[poppins] text-darkblue my-10 mx-auto w-10/12">
      <div className="border-2 flex bg-purple ">
        <img src="/howToUseImage.png" className="self-center" />
      </div>
      <div className="flex flex-col justify-end w-full py-10">
        <h1 className="text-center font-bold text-6xl text-black">
          How Trippayer works
        </h1>
        <div className="space-y-8 py-6 mx-auto text-darkblue">
          <div className=" mx-auto space-y-2">
            <div className="flex space-x-10 text-2xl ">
              <h1 className="font-bold">01</h1>
              <h1 className="font-semibold">Create an Account</h1>
            </div>
            <p className="text-sm mx-3 px-12 text-left border-l-4 text-3xl">
              Sign up for an account with <br /> your name, email and phone
              number.
            </p>
          </div>
          <div className=" mx-auto  space-y-2">
            <div className="flex space-x-10 text-2xl font-semibold">
              <h1 className="font-bold">02</h1>
              <h1>Set Up Your Profile</h1>
            </div>
            <p className="text-sm mx-3 px-12 text-left border-l-4 text-3xl">
              Sign up for an account with <br /> your name, email and phone
              number.
            </p>
          </div>
          <div className=" mx-auto space-y-2">
            <div className="flex space-x-10 text-2xl font-semibold">
              <h1 className="font-bold">03</h1>
              <h1>Pay Ride </h1>
            </div>
            <p className="text-sm mx-3 px-12 text-left border-l-4 text-3xl">
              Sign up for an account with <br /> your name, email and phone
              number.
            </p>
          </div>
          <div className=" mx-auto  space-y-2">
            <div className="flex space-x-10 text-2xl font-semibold">
              <h1 className="font-bold">04</h1>
              <h1>View Transaction History</h1>
            </div>
            <p className="text-sm mx-3 px-12 text-left border-l-4 text-3xl">
              Sign up for an account with <br /> your name, email and phone
              number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
