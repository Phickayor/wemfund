import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
function ContactForm() {
  const nameContainer = useRef()
  const mailContainer = useRef()
  const messageContainer = useRef()
  useEffect(() => {
    AOS.init()
  }, [])
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const mail = <FontAwesomeIcon icon={faEnvelope} />;
  const location = <FontAwesomeIcon icon={faMapMarker} />;
  const instagram = (
    <FontAwesomeIcon icon={faInstagram} className="font-semibold text-4xl" />
  ); const linkedin = (
    <FontAwesomeIcon icon={faLinkedinIn} className="font-semibold text-4xl" />
  );
  const twitter = (
    <FontAwesomeIcon icon={faTwitter} className="font-semibold text-4xl" />
  );
  function HandleSubmit() {
    var name = nameContainer.current.value
    fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, arrivalDate, depatureDate })
    }
    ).then(function (response) {

    }
    ).then(function (data) {

    })
  }
  return (
    <div className="my-10 mx-auto md:w-10/12 w-11/12 flex md:flex-row flex-col justify-around font-[poppins]">
      <div className="px-10 md:w-1/2"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="mx-auto md:w-10/12 my-10 h-full">
          <h1 className="font-bold text-darkblue md:text-4xl text-2xl my-4">Contact Us</h1>
          <p className="text-textcolor text-xl">
            Fill up the form and get a response from our team within 24 hours
          </p>
          <ul className="my-10 space-y-5 text-xl">
            <li className="flex">{phone} &nbsp; +2347064287358</li>
            <li className="flex">{mail} &nbsp; trippayer@gmail.com</li>
            <li className="flex ">{location} &nbsp; 3, Yunusa Adeniji Street Off John Olugbo Street Ikeja, 100001, Lagos</li>
          </ul>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/trippayer/">{instagram}</a>
            <a href="">{twitter}</a>
            <a href="">{linkedin}</a>
          </div>
        </div>
      </div>

      <div
        className="md:w-1/2 text-white md:text-2xl text-xl"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <form className="bg-darkblue px-10 md:py-20 py-10 rounded-2xl mx-auto md:w-10/12 h-fit">
          <label className="">Name</label>
          <input
            className="text-textcolor rounded-md block p-2 my-3 w-full"
            type="text"
            ref={nameContainer}
          />
          <label className="">Email</label>
          <input
            className="text-textcolor rounded-md block p-2 my-3 w-full "
            type="text"
            ref={mailContainer}
          />
          <label className="p-2">Message</label>
          <textarea
            className="text-textcolor rounded-md block p-2 my-3 w-full"
            type="text"
            ref={messageContainer}
          />

          <button className="border border-color mx-5 text-white w-fit px-10 py-3 mt-5 font-[poppins] rounded-2xl">
            Send
          </button>
        </form>
      </div>
    </div >
  );
}

export default ContactForm;
