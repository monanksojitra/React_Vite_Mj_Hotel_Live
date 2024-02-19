import React from "react";
const Navbar = () => {
  return (
    <div className="w-full container absolute  flex items-center justify-around   ">
      <div className="h-20 bg-[#E0B973] w-fit px-10 rounded-br-2xl rounded-bl-2xl">
        <ul className="py-5 flex flex-col items-center justify-center text-[#14274A]">
          <li className="text-xl">LUXURY</li>
          <li className="text-xs">HOTELS</li>
        </ul>
      </div>
      <div className="flex text-white font-bold text-lg">
        <ul className="flex items-center justify-between gap-x-16 ">
          <li
            onClick={() => setSelectedHandel(0)}
            className="hover:border-b-2 transform duration-150 ease-in-out cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => setSelectedHandel(1)}
            className="hover:border-b-2 transform duration-150 ease-in-out cursor-pointer"
          >
            Facilities
          </li>
          <li
            onClick={() => setSelectedHandel(2)}
            className="hover:border-b-2 transform duration-150 ease-in-out cursor-pointer"
          >
            Rooms
          </li>
          <li
            onClick={() => setSelectedHandel(3)}
            className="hover:border-b-2 transform duration-150 ease-in-out cursor-pointer"
          >
            Contact-us
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
