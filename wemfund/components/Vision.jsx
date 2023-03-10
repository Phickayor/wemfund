import React from "react";

function Vision() {
  return (
    <div className="my-10 font-[open sans] space-y-4 text-center mx-auto text-textcolor">
      <h1 className="text-[#4749FF] font-semibold text-3xl my-5">Our Vision</h1>
      <div className="my-10">
        <div className="flex justify-between font-[poppins] font-medium text-3xl px-20 py-10">
          <p className="w-1/2 self-center">
            Developing Africa payment infrastructure for the transportation
            system
          </p>
          <div className="w-1/2 flex justify-center ">
            <img src="/VisionImage.png" />
          </div>
        </div>
        <div className="flex justify-between font-[poppins] font-medium text-3xl px-20 py-10">
          <div className="w-1/2  flex justify-center ">
            <img src="/VisionImage2.png" />
          </div>
          <p className="w-1/2 self-center">
            Developing Africa payment infrastructure for the transportation
            system
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
