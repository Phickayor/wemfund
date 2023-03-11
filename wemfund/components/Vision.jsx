import React from "react";

function Vision() {
  return (
    <div className="my-10 font-[open sans] space-y-4 text-center mx-auto text-darkblue">
      <h1 className="text-darkblue font-semibold text-4xl my-5">Our Vision</h1>
      <div className="my-10">
        <div className="md:flex justify-between font-[poppins] font-medium md:text-3xl text-2xl px-10 md:px-20 p-10">
          <div className="md:w-1/2  flex justify-center">
            <img src="/VisionImage.png" />
          </div>
          <p className="md:w-1/2 self-center leading-[40px] ">
            Providing seamless transaction between riders and customers
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between font-[poppins] font-medium md:text-3xl text-2xl px-10 md:px-20 py-10">
          <p className="md:w-1/2 order-2 md:order-1 self-center leading-[40px]">
            Providing seamless transaction between riders and customers
          </p>
          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <img src="/VisionImage2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
