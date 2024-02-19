import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import home from "../../public/home.svg";
import downarrow from "../../public/downarrow.svg";

function Home() {
  const herolist = [
    "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
    "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp",
    "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/125/2021/08/11060441/deluxe_harbour_web.jpg",
  ];
  const [carouselImg, setCarouselImg] = useState(
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  return (
    <div
      className="w-full bg-no-repeat relative  bg-cover bg-center h-screen flex  justify-center"
      style={{ backgroundImage: `url(${carouselImg})` }}
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

export default Home;
