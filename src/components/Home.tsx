import React, { useEffect, useReducer, useState } from "react";
import Hero from "./Hero";
import Footer from "../layout/Footer";
import HomeData from "../Pages/HomeData";
import ContactUs from "../Pages/ContactUs";
import Facilities from "../Pages/Facilities";
import Rooms from "../Pages/Rooms";

const Home = () => {
  const herolist = [
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",

    "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp",
    "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/125/2021/08/11060441/deluxe_harbour_web.jpg",
  ];
  const [selectedHandel, setSelectedHandel] = useState(0);
  const [selectComponent, setSelectComponent] = useState(
    herolist[selectedHandel]
  );

  return (
    <div>
      <Hero img={selectComponent} />
      {(function () {
        switch (selectedHandel) {
          case 1:
            return <Facilities />;
          case 2:
            return <Rooms />;
          case 3:
            return <ContactUs />;
          default:
            return <HomeData />;
        }
      })()}

      <Footer />
    </div>
  );
};

export default Home;
