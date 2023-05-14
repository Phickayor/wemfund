import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
function Vision() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="my-20 font-[poppins] space-y-4 text-center mx-auto text-darkblue">
      <h1 className="text-darkblue font-semibold text-4xl lg:text-7xl my-5">Our Vision</h1>
      <div className="lg:my-10">
        <div className="lg:flex justify-between font-[poppins] font-medium px-10 lg:px-20 p-10">
          <div className="lg:w-1/2  flex justify-center" data-aos="fade-right"
            data-aos-duration="1000">
            <img src="/VisionImage.png" />
          </div>
          <p data-aos="fade-left"
            data-aos-duration="1000" className="lg:w-1/2 self-center lg:text-6xl text-3xl mt-10 lg:mt-0 font-medium">
            Providing seamless transaction between riders and customers
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between font-[poppins] font-medium px-10 lg:px-20 py-10">
          <p data-aos="fade-right"
            data-aos-duration="1000" className="lg:w-1/2 self-center lg:text-6xl text-3xl mt-10 lg:mt-0  font-medium order-2 lg:order-1">
            Providing a better payment option for customers during the new cashless policy          </p>
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2" data-aos="fade-left"
            data-aos-duration="1000">
            <img src="/VisionImage2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
