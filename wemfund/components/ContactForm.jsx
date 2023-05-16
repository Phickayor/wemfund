import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
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
  const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
  const instagram = (
    <FontAwesomeIcon icon={faInstagram} className="font-semibold text-4xl" />
  ); const linkedin = (
    <FontAwesomeIcon icon={faLinkedinIn} className="font-semibold text-4xl" />
  );
  const [load, setLoad] = useState()
  function HandleSubmit(e) {
    e.preventDefault()
    setLoad(spin)
    var name = nameContainer.current.value
    var email = mailContainer.current.value
    var message = messageContainer.current.value
    fetch("https://trippayer.onrender.com/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    }
    )
      .then(function (response) {
        return response.json()
      }
      ).then(function (data) {
        if (data.info === "success") {
          nameContainer.current.value = " "
          mailContainer.current.value = " "
          messageContainer.current.value = " "
          alert(`Hey ${name}, your message has been delivered successfully`)
        } else {
          alert(`An error occured, check your internet connection`)
        }
        setLoad("")
      })
      .catch((error) => {
        console.log(error)
        alert('An error occured, check your internet connection and try again')
        setLoad("")
      });

  }
  return (
    <div className="lg:my-10 my-5 mx-auto lg:w-10/12 w-11/12 flex lg:flex-row flex-col justify-around font-[poppins]">
      <div className="px-5 lg:px-10 lg:w-1/2"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="mx-auto lg:w-10/12 my-10 h-full">
          <h1 className="font-bold text-darkblue lg:text-4xl text-2xl my-4">Contact Us</h1>
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
            <a href="">{linkedin}</a>
          </div>
        </div>
      </div>

      <div
        className="lg:w-1/2 text-white lg:text-2xl text-xl"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <form className="bg-darkblue px-10 lg:py-20 py-10 rounded-2xl mx-auto lg:w-10/12 h-fit" onSubmit={HandleSubmit}>
          <label className="">Name</label>
          <input
            className="text-textcolor rounded-md block p-2 my-3 w-full"
            required
            type="text"
            ref={nameContainer}
          />
          <label className="">Email</label>
          <input
            className="text-textcolor rounded-md block p-2 my-3 w-full "
            required
            type="email"
            ref={mailContainer}
          />
          <label className="p-2">Message</label>
          <textarea
            className="text-textcolor rounded-md block p-2 my-3 w-full"
            required
            type="text"
            ref={messageContainer}
          />

          <button className="border border-color mx-5 text-white w-fit px-10 py-3 mt-5 font-[poppins] rounded-2xl">
            {load} &nbsp;Send
          </button>
        </form>
      </div>
    </div >
  );
}

export default ContactForm;
