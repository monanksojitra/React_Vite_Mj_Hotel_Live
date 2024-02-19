import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import home from "../../public/home.svg";
import downarrow from "../../public/downarrow.svg";

function Hero({ img }) {
  return (
    <div
      className="w-full bg-no-repeat relative  bg-cover bg-center h-screen flex  justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Navbar />
      <section className="z-20 my-auto w-full container px-60 leading-none text-white space-y-1">
        <p className="text-[40px] font-thin">WELCOME TO</p>
        <p className="text-[100px] font-bold">LUXURY</p>
        <p className="text-5xl font-semibold">HOTELS</p>
        <p className="text-xl w-[50%]">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
      </section>
      <div className="bg-[#E0B973] h-12 px-5 rounded-xl absolute bottom-32 flex items-center justify-between gap-x-5">
        <img src={home} alt="" className="h-5" />
        <p className="text-base uppercase font-bold text-white">book now</p>
      </div>
      <div className="flex flex-col text-white text-2xl absolute bottom-10 gap-y-2">
        <p>Scroll</p>
        <img src={downarrow} alt="" className="h-7" />
      </div>
    </div>
  );
}

export default Hero;
