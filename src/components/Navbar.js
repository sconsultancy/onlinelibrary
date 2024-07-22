"use client";

import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around mt-6">
      <div className=" flex">
        <img src="logo.png" alt="" />{" "}
        <h1 className=" logo_text text-[28px] ml-2 text-[#BA131C] ">
          ONLIABRARY
        </h1>
      </div>
      <div className="flex space-x-8">
        <a className=" text-[15px] text-[#BA131C]" href="/features">
          Features
        </a>
        <a className=" text-[15px] text-[#BA131C]" href="/pricing">
          Pricing
        </a>
        <a className=" text-[15px] text-[#BA131C]" href="/books">
          Books
        </a>
        <a className=" text-[15px] text-[#BA131C]" href="/ebooks">
          E-Books
        </a>
      </div>
      <div>
        <button className=" border  py-2 px-8 rounded border-[#BA131C] text-[#BA131C]">
          Login
        </button>
        <button className=" bg-[#BA131C] py-2 px-6 text-white">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
