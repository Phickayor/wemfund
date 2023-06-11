import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="text-darkblue text-center">
      <div className="flex flex-col justify-center py-4 lg:px-10 px-5 lg:my-10">
        <div className="lg:w-1/2 px-5 w-5/6 self-center space-y-5">
          <h1 className="lg:text-6xl text-3xl font-semibold lg:leading-[72px] font-[poppins]">
            Pay Ride <br /> With Ease
          </h1>
          <p className="lg:text-3xl text-lg font-medium font-[poppins] lg:mx-10">
            With Trippayer you can easily pay for your ride on your mobile phone
            anywhere anytime.
          </p>
        </div>
        <div className=" mx-auto">
          <img
            src="/SmartCar.png"

          />
        </div>

        <p
          className="mt-10 font-semibold text-3xl lg:text-6xl lg:leading-[70px] mx-auto w-10/12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >We help <b className="text-purple font-semibold">riders</b> accept <b className="text-purple font-semibold">payments</b>,
          Book <b className="text-purple font-semibold">rides</b>,Scan to
          <b className="text-purple font-semibold"> pay</b>, Earn
          <b className="text-purple font-semibold"> token 🔽</b>.
          {/* Easy <b className="text-purple font-semibold">Payment for trips </b><br />
          Sign up for <b className="text-purple font-semibold">free </b>now! */}
        </p>
        {/* Temporary Download Link for Test Phase */}
        <a href="https://expo.dev/artifacts/eas/41uy7fFV5BbSXCELkNPUtH.apk">
          <button className=" mx-auto w-fit bg-darkblue text-white font-medium text-2xl hover:scale-110 px-10 py-3 mt-5 md:mt-10 font-[poppins] rounded-xl">
            Download app
          </button>
        </a>
        {/* Play Store and App Store download links */}
        {/* <div
          className="grid grid-cols-2 lg:gap-8 gap-6 my-5 lg:px-0 px-10 mx-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src="/PlayStore.png" className="rounded-lg object-fit" />
          <img src="/AppStore.png" className=" rounded-lg object-fit" />
        </div> */}

      </div>
    </div>
  );
}

export default Hero;
