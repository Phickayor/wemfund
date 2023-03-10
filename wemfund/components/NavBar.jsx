import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NavBar() {
  const harmburger = (
    <FontAwesomeIcon icon={faBars} className="p-4 text-4xl " />
  );
  return (
    <div className="text-textcolor sticky top-0 p-6 pb-5 flex justify-between border-b-2 border-[bordercolor]">
      <div className="flex ">
        <img src="/favicon.ico" />
        <h1 className="self-center p-2 text-2xl font-[open sans]">Wemfund</h1>
      </div>
      <ul className="lg:flex hidden space-x-10 font-semibold text-xl px-10 self-center">
        <a href="#home">
          <li className="hover:list-disc">Home</li>
        </a>
        <a href="#about">
          <li className="hover:list-disc">About</li>
        </a>
        <a href="#contact">
          <li className="hover:list-disc">Contact us</li>
        </a>
        <a href="#services">
          <li className="hover:list-disc">Services</li>
        </a>
      </ul>
      <div className="lg:hidden self-center">{harmburger}</div>
    </div>
  );
}

export default NavBar;
