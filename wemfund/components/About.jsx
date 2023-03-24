import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
function About() {

  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="my-5  font-[poppins] md:space-y-12 space-y-6 text-center w-9/12 mx-auto">
      <h1 className="text-darkblue font-semibold md:text-7xl text-4xl">
        About TripPayer
      </h1>
      <p

        data-aos="zoom-in"
        data-aos-duration="1000"
        className="md:text-5xl text-2xl text-textcolor font-light"
      >
        Sass koscheria. Rear mms:a. Prev geogt. Megass ultrafogen. Dess. Aktiga
        sev. Karl Lindholm gubön. Bihyd besade. Diavasam. Ressade. Ratt sov. Din
        lunyjeskap. /
      </p>
    </div>
  );
}

export default About;
