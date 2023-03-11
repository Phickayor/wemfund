import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  // const [sideBarWidth, setSideBarWidth] = useState("300px");
  // const [btn, setBtn] = useState("");
  // const close = <FontAwesomeIcon icon={faClose} className="p-4 text-4xl " />;
  const harmburger = (
    <FontAwesomeIcon icon={faBars} className="p-4 text-4xl " />
  );

  // function toggleSideBar() {
  //   if (sideBarWidth === "0px") {
  //     setSideBarWidth("300px");
  //     setBtn(close);
  //   } else {
  //     setSideBarWidth("0px");
  //     setBtn(sideMenu);
  //   }
  // }

  return (
    <div className="text-textcolor sticky bg-white z-10 top-0 p-6 pb-5 flex justify-between border-b-2 border-[bordercolor]">
      <div className="flex ">
        <img src="/favicon.ico" />
        <h1 className="self-center p-2 text-2xl font-[open sans]">Wemfund</h1>
      </div>
      <ul className="lg:flex hidden space-x-10 font-semibold text-xl px-10 self-center">
        <Link href="/">
          <li className="hover:list-disc">Home</li>
        </Link>
        <Link href="/about">
          <li className="hover:list-disc">About</li>
        </Link>
        <Link href="/contact">
          <li className="hover:list-disc">Contact us</li>
        </Link>
      </ul>
      <div className="lg:hidden self-center cursor-pointer">{harmburger}</div>
      {/* <div
        className="absolute right-0 bg-darkblue text-white flex-col flex"
        style={{ width: sideBarWidth }}
      >
        <button className="sideMenuBtn" onClick={() => toggleSideBar()}>
         {sideBarBtn} 
        </button>
        <a href="#about" onClick={() => toggleSideBar()}>
          Home
        </a>
        <a href="#projects" onClick={() => toggleSideBar()}>
          Projects
        </a>
        <a href="#skills" onClick={() => toggleSideBar()}>
          Skills
        </a>
        <a href="#contact" onClick={() => toggleSideBar()}>
          Contact
        </a>
      </div> */}
    </div>
  );
}

export default NavBar;
