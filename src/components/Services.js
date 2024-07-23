import React from "react";

function Services() {
  return (
    <div className="flex space-x-6  justify-evenly px-10 my-32">
      <div className=" w-[250px] border py-10 text-center">
        <h1 className=" my-2">New Books</h1>{" "}
        <h2 className=" my-3 mb-10">
          Get Latest book at cheapest rate there in market
        </h2>
        <button className=" bg-[#BA131C] py-2 px-6 text-white">
          New Books
        </button>
      </div>
      <div className=" w-[250px] border py-10 text-center">
        <h1 className=" my-2">Old Books</h1>{" "}
        <h2 className=" my-3 mb-10">
          Buy and Sell Old books at discount upto 50%
        </h2>
        <button className=" bg-[#BA131C] py-2 px-6 text-white">
          Old Books
        </button>
      </div>
      <div className=" w-[250px] border py-10 text-center">
        <h1 className=" my-2">Rental</h1>{" "}
        <h2 className=" my-3 mb-10">
          Rent old books and enjoy the reading without storing them
        </h2>
        <button className=" bg-[#BA131C] py-2 px-6 text-white">Rental</button>
      </div>
      <div className=" w-[250px] border py-10 text-center">
        <h1 className=" my-2">E-Books</h1>{" "}
        <h2 className=" my-3 mb-10">Get into the New World of E-Books</h2>
        <button className=" bg-[#BA131C] py-2 px-6 text-white">E-Books</button>
      </div>
    </div>
  );
}

export default Services;
