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
    <div className="my-10 mx-auto md:w-10/12 w-11/12 flex md:flex-row flex-col justify-around font-[poppins]">
      <div className="px-10 md:w-1/2">
        <div className="mx-auto md:w-10/12 my-10 h-full">
          <h1 className="font-bold text-darkblue md:text-4xl text-2xl my-4">Contact Us</h1>
          <p className="text-textcolor text-xl">
            Fill up the form and get a response from our team within 24 hours
          </p>
          <ul className="my-10 space-y-5 text-xl">
            <li>{phone} &nbsp; +2347025044627</li>
            <li>{mail} &nbsp; trippayer@gmail.com</li>
            <li>{location} &nbsp; 3, Yunusa Adeniji Street Off John Olugbo Street Ikeja, 100001, Lagos</li>
          </ul>
          <div className="flex space-x-6">
            <a href="">{instagram}</a>
            <a href="">{facebook}</a>
            <a href="">{instagram}</a>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 text-white md:text-2xl text-xl">
        <form className="bg-darkblue px-10 md:py-20 py-10 rounded-2xl mx-auto md:w-10/12 h-fit">
          <label className="">Name</label>
          <input
            className="text-textcolor rounded-md block p-2 my-3 w-full"
            type="text"
          />
          <label className="">Email</label>
          <input
            className="text-textcolor rounded-md block p-2 my-3 w-full "
            type="text"
          />
          <label className="p-2">Message</label>
          <textarea
            className="text-textcolor rounded-md block p-2 my-3 w-full"
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
