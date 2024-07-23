import React from "react";

function Main() {
  return (
    <div className="flex justify-around mt-[100px] my-10 items-center">
      <div className=" ">
        <h1 className=" text-[64px] max-w-[500px]">
          Huge collection of <span className=" text-[#3489cb]">best books</span>
        </h1>
        <h2 className=" text-[36px]">The Online Book Store</h2>
        <h2 className="text-[36px]">Read more, spend less, share the love</h2>
        <button className=" bg-[#3489cb] py-2 px-6 text-white">Register</button>
      </div>
      <div>
        <img src="main.png" alt="" />
      </div>
    </div>
  );
}

export default Main;
