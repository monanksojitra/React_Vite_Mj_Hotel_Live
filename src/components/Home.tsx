import { useEffect, useState } from "react";
import Hero from "./Hero";
import Footer from "../layout/Footer";

import HomeData from "../Pages/HomeData";
import ContactUs from "../Pages/ContactUs";
import Facilities from "../Pages/Facilities";
import Rooms from "../Pages/Rooms";
import Navbar from "../layout/Navbar";

export const herolist = [
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",

  "https://www.businessinsider.in/photo/68664363/heres-why-hotel-room-rates-in-india-may-double-in-the-next-3-to-4-years.jpg?imgsize=225157",
  "https://www.bestwesternplusmeridian.com/Content/images/Queen-Room.jpg",
];
const Home = () => {
  const [selectedHandel, setSelectedHandel] = useState(0);
  const [selectComponent, setSelectComponent] = useState(herolist[0]);
  useEffect(() => {
    setSelectComponent(herolist[selectedHandel]);
  }, [selectedHandel]);
  return (
    <div>
      <Hero img={selectComponent} />
      <Navbar setSelectedHandel={setSelectedHandel} />
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
