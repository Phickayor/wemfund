import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
function NavBar(props) {
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
  var navigations = [
    {
      "name": props.firstNav,
      "href": props.firstNavLink
    }, {
      "name": props.secondNav,
      "href": props.secondNavLink
    }
  ]
  function toggleSideBar() {
    if (sideBarWidth === "0%") {
      setSideBarWidth("100%");
    } else {
      setSideBarWidth("0%");
    }
  }

  return (
    <div className="text-textcolor sticky bg-white font-[poppins] z-10 top-0 lg:p-3 p-2 flex justify-between ">
      <div className="flex lg:px-10 ">
        <img src="/favicon.ico" className="lg:h-24 lg:w-full w-1/6 self-center" />
        <h1 className="self-center p-2 lg:text-3xl text-xl font-semibold font-[poppins]">Trippayer</h1>
      </div>
      <ul className="lg:flex hidden space-x-10 font-semibold text-xl px-10 self-center">
        {navigations.map((nav, index) => (
          <Link href={nav.href} key={index}>
            <li className="hover:list-disc">{nav.name}</li>
          </Link>
        ))}
      </ul>
      <div
        className="lg:hidden self-center cursor-pointer"
        onClick={() => toggleSideBar()}
      >
        {harmburger}
      </div>
      <div
        className=" duration-[1.5s] right-0 top-0 l h-screen fixed overflow-y-scroll bg-darkblue text-white flex-col flex"
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
