import React from "react";

function Vision() {
  return (
    <div className="my-20 font-[poppins] space-y-4 text-center mx-auto text-darkblue">
      <h1 className="text-darkblue font-semibold text-7xl my-5">Our Vision</h1>
      <div className="my-10">
        <div className="md:flex justify-between font-[poppins] font-medium px-10 md:px-20 p-10">
          <div className="md:w-1/2  flex justify-center">
            <img src="/VisionImage.png" />
          </div>
          <p className="md:w-1/2 self-center text-6xl font-medium">
            Providing seamless transaction between riders and customers
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between font-[poppins] font-medium px-10 md:px-20 py-10">
          <p className="md:w-1/2 self-center text-6xl font-medium">
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
