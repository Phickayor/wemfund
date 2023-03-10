import React from "react";

function Vision() {
  return (
    <div className="my-10 font-[open sans] space-y-4 text-center mx-auto text-darkblue">
      <h1 className="text-darkblue font-semibold text-4xl my-5">Our Vision</h1>
      <div className="my-10">
        <div className="flex justify-between font-[poppins] font-medium text-3xl px-20 py-10">
          <div className="w-1/2  flex justify-center ">
            <img src="/VisionImage.png" />
          </div>
          <p className="w-1/2 self-center leading-[40px]">
            Providing seamless transaction between riders and customers
          </p>
        </div>
        <div className="flex justify-between font-[poppins] font-medium text-3xl px-20 py-10">
          <p className="w-1/2 self-center leading-[40px]">
            Providing seamless transaction between riders and customers
          </p>
          <div className="w-1/2 flex justify-center ">
            <img src="/VisionImage2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
