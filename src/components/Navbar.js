"use client";

import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around mt-6">
      <div className=" flex">
        <img className=" w-8 h-8" src="logo.png" alt="" />{" "}
        <h1 className=" logo_text text-[28px] ml-2 text-[#3489cb] ">
          ONLIBRARY
        </h1>
      </div>
      <div className="flex space-x-8">
        <a className=" text-[15px] text-[#3489cb]" href="/features">
          Features
        </a>
        <a className=" text-[15px] text-[#3489cb]" href="/pricing">
          Pricing
        </a>
        <a className=" text-[15px] text-[#3489cb]" href="/books">
          Books
        </a>
        <a className=" text-[15px] text-[#3489cb]" href="/ebooks">
          E-Books
        </a>
      </div>
      <div>
        <button className=" border  py-2 px-8 rounded border-[#3489cb] text-[#3489cb]">
          Login
        </button>
        <button className=" bg-[#3489cb] py-2 px-6 text-white">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
