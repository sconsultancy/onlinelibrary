import React from "react";

function Footer() {
  return (
    <div className=" flex my-10 mt-24 justify-around items-center">
      <div className=" flex">
        <img className=" w-8 h-8" src="logo.png" alt="" />{" "}
        <h1 className=" logo_text text-[28px] ml-2 text-[#3489cb] ">
          ONLIBRARY
        </h1>
      </div>
      <div className=" flex space-x-16 font-bold">
        <a href="/mobileapp">Mobile app</a>
        <a href="/community">Community</a>
        <a href="/company">Company</a>
      </div>
      <h3>© Photo, Inc. 2019. We love our users!</h3>
    </div>
  );
}

export default Footer;
