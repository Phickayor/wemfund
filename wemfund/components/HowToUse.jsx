import React from "react";

function HowToUse() {
  return (
    <div className="flex font-[poppins] text-darkblue lg:h-fit h-96 my-10 mx-auto lg:w-10/12 w-11/12">
      <div className="flex bg-purple ">
        <img src="/howToUseImage.png" className="self-center" />
      </div>
      <div className="flex flex-col lg:justify-end lg:py-10 py-5 lg:w-full ">
        <h1 className="text-center font-bold lg:text-6xl text-black my-5">
          How TripPayer works
        </h1>
        <div className="space-y-8 py-6 mx-auto text-darkblue overflow-y-scroll lg:overflow-y-visible">
          <div className=" lg:mx-auto mx-4 space-y-2 lg:w-9/12">
            <div className="flex lg:space-x-10 space-x-5 text-md lg:text-3xl font-semibold ">
              <h1 className="font-bold">01</h1>
              <h1 className="font-semibold">Create an Account</h1>
            </div>
            <p className="lg:w-9/12 lg:mx-3 lg:px-12 pl-6 text-left border-l-4 lg:text-xl text-xs">
              Sign up for an account with your name, email and phone
              number.
            </p>
          </div>
          <div className=" lg:mx-auto mx-4 space-y-2 lg:w-9/12">
            <div className="flex lg:space-x-10 space-x-5 lg:text-3xl font-semibold ">
              <h1 className="font-bold">02</h1>
              <h1 className="font-semibold">Set Up Your Profile</h1>
            </div>
            <p className=" lg:w-9/12 lg:mx-3 lg:px-12 pl-6 text-left border-l-4 lg:text-xl text-xs">
              Sign up for an account with your name, email and phone
              number.
            </p>
          </div>
          <div className=" lg:mx-auto mx-4 space-y-2 lg:w-9/12">
            <div className="flex lg:space-x-10 space-x-5 lg:text-3xl font-semibold ">
              <h1 className="font-bold">03</h1>
              <h1 className="font-semibold">Pay Ride</h1>
            </div>
            <p className=" lg:w-9/12 lg:mx-3 lg:px-12 pl-6 text-left border-l-4 lg:text-xl text-xs">
              Sign up for an account with your name, email and phone
              number.
            </p>
          </div>
          <div className=" lg:mx-auto mx-4 space-y-2 lg:w-9/12">
            <div className="flex lg:space-x-10 space-x-5 lg:text-3xl font-semibold ">
              <h1 className="font-bold">04</h1>
              <h1 className="font-semibold">View Transaction History</h1>
            </div>
            <p className="lg:w-9/12 lg:mx-3 lg:px-12 pl-6 text-left border-l-4 lg:text-xl text-xs">
              Sign up for an account with your name, email and phone
              number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;
