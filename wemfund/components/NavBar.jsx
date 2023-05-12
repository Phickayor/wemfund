import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [sideBarWidth, setSideBarWidth] = useState("0%");
  const close = (
    <FontAwesomeIcon
      icon={faClose}
      className="py-3 px-4 text-4xl font-semibold text-textcolor "
    />
  );
  const harmburger = (
    <FontAwesomeIcon icon={faBars} className="p-4 text-4xl " />
  );

  function toggleSideBar() {
    if (sideBarWidth === "0%") {
      setSideBarWidth("100%");
    } else {
      setSideBarWidth("0%");
    }
  }

  return (
    <div className="text-textcolor sticky bg-white font-[poppins] z-10 top-0 md:p-3 p-2 flex justify-between ">
      <div className="flex md:px-10 ">
        <img src="/favicon.ico" className="md:h-24 md:w-full w-1/6 self-center" />
        <h1 className="self-center p-2 text-3xl font-semibold font-[poppins]">Trippayer</h1>
      </div>
      <ul className="md:flex hidden space-x-10 font-semibold text-xl px-10 self-center">
        {/* <Link href="/">
          <li className="hover:list-disc">Home</li>
        </Link> */}
        <Link href="/about">
          <li className="hover:list-disc">About</li>
        </Link>
        <Link href="/contact">
          <li className="hover:list-disc">Contact us</li>
        </Link>
      </ul>
      <div
        className="md:hidden self-center cursor-pointer"
        onClick={() => toggleSideBar()}
      >
        {harmburger}
      </div>
      <div
        className="absolute duration-[1.5s] right-0 top-0 l h-screen fixed overflow-y-scroll bg-darkblue text-white flex-col flex"
        style={{ width: sideBarWidth }}
      >
        <button
          className="absolute right-5 top-8 bg-white rounded-full w-16 h-16"
          onClick={() => toggleSideBar()}
        >
          {close}
        </button>
        <div className="flex flex-col mx-auto w-10/12 my-40 font-[poppins] text-2xl space-y-20">
          <Link href="/" onClick={() => toggleSideBar()}>
            Home
          </Link>
          <Link href="/about" onClick={() => toggleSideBar()}>
            About
          </Link>
          <Link href="/contact" onClick={() => toggleSideBar()}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
