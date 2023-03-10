import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMailBulk,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ContactForm() {
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const mail = <FontAwesomeIcon icon={faMailBulk} />;
  const location = <FontAwesomeIcon icon={faMapMarker} />;
  const instagram = (
    <FontAwesomeIcon icon={faInstagram} className="font-semibold text-4xl" />
  );
  const facebook = (
    <FontAwesomeIcon icon={faFacebook} className="font-semibold text-4xl" />
  );
  return (
    <div className="my-10 mx-auto w-10/12 flex justify-around font-[poppins] text-white ">
      <div className="w-1/2">
        <div className="mx-auto w-10/12 my-10 h-full">
          <h1 className="font-bold text-3xl my-4">Contact Us</h1>
          <p>
            Fill up the form and get a response from our team within 24 hours
          </p>
          <ul className="my-10 space-y-5">
            <li>{phone} &nbsp; +2347025044627</li>
            <li>{mail} &nbsp; tapeyy@gmail.com</li>
            <li>{location} &nbsp; Allen road ikeja</li>
          </ul>
          <div className="flex space-x-6">
            <a href="">{instagram}</a>
            <a href="">{facebook}</a>
            <a href="">{instagram}</a>
          </div>
        </div>
      </div>

      <div className="w-1/2 ">
        <form className="mx-auto w-10/12 my-10 h-full">
          <label className="p-2 m">Name</label>
          <input
            className="text-textcolor rounded-xl block p-2 m-2"
            type="text"
          />
          <label className="p-2 mt-4">Email</label>
          <input
            className="text-textcolor rounded-xl block p-2 m-2"
            type="text"
          />
          <label className="p-2 mt-4">Message</label>
          <textarea
            className="text-textcolor rounded-xl block p-2 m-2 h-20"
            type="text"
          />

          <button className="border border-color mx-5 text-white w-fit px-10 py-3 mt-5 font-[poppins] rounded-2xl">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
