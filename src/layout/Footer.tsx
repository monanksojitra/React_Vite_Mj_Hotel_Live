import React from "react";
import fb from "../../public/fb.svg";
import twit from "../../public/twit.svg";
import insta from "../../public/insta.svg";
const Footer = () => {
  return (
    <div className=" bg-[#14274A] h-52 flex items-center justify-between   w-full">
      <div className=" container mx-auto px-10 flex items-center justify-around text-white">
        {" "}
        <div className="w-[17%] space-y-3">
          <ul className="flex flex-col w-fit items-center justify-center">
            <li className="text-xl font-bold">LUXURY</li>
            <li className="text-[10px]">HOTELS</li>
          </ul>
          <p className="text-xs">
            497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903
            luxury_hotels@gmail.com
          </p>
        </div>
        <div>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li className="flex gap-x-4">
              <img src={fb} alt="" className="h-5 aspect-square" />
              <p>Facebook</p>
            </li>
            <li className="flex gap-x-4">
              <img src={twit} alt="" className="h-5 aspect-square" />
              <p>Twitter</p>
            </li>
            <li className="flex gap-x-4">
              <img src={insta} alt="" className="h-5 aspect-square" />
              <p>Instagram</p>
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <p className="text-base tracking-wide">Subscribe to our newsletter</p>
          <div className="flex h-9">
            <input
              type="email"
              name=""
              id=""
              className="bg-[#14274A] border-2 rounded-tl-md rounded-bl-md px-3 outline-none border-[#E0B973]"
            />
            <div className="px-3 bg-[#E0B973] flex items-center text-[#14274A] font-bold uppercase rounded-tr-md rounded-br-md">
              ok
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
