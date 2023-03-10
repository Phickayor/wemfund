import React from "react";

function HowToUse() {
  return (
    <div className="flex bg-darkblue text-white my-20 h-full">
      <div className="w-1/2 px-5 ">
        <div className="bg-white flex flex-col justify-center rounded-2xl mx-auto w-9/12 h-full py-10">
          <img src="/howToUseImage.png" />
        </div>
      </div>
      <div className="w-1/2 py-5">
        <div className="mx-auto my-2">
          <h1 className="text-center font-bold text-5xl font-[open sans]">
            How Wemfund works
          </h1>
        </div>
        <div className="space-y-8 py-6 w-11/12 mx-auto">
          <div className=" mx-auto space-y-2">
            <div className="flex space-x-10 text-3xl font-semibold">
              <h1>01</h1>
              <h1>Create an Account</h1>
            </div>
            <p className="text-sm mx-3 px-12 text-left border-l-4 text-3xl font-semibold">
              Sign up for an account with your name, email and phone number.
            </p>
          </div>
          <div className=" mx-auto  space-y-2">
            <div className="flex space-x-10 text-3xl font-semibold">
              <h1>02</h1>
              <h1>Set Up Your Profile</h1>
            </div>
            <p className="text-sm mx-3 px-12 text-left border-l-4 text-3xl font-semibold">
              Sign up for an account with your name, email and phone number.
            </p>
          </div>
          <div className=" mx-auto   space-y-2">
            <div className="flex space-x-10 text-3xl font-semibold">
              <h1>03</h1>
              <h1>Pay Ride </h1>
            </div>
            <p className="text-sm mx-3 px-12 text-left border-l-4 text-3xl font-semibold">
              Sign up for an account with your name, email and phone number.
            </p>
          </div>
          <div className=" mx-auto  space-y-2">
            <div className="flex space-x-10 text-3xl font-semibold">
              <h1>04</h1>
              <h1>View Transaction History</h1>
            </div>
            <p className="text-sm mx-3 px-12 text-left border-l-4 text-3xl font-semibold">
              Sign up for an account with your name, email and phone number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
