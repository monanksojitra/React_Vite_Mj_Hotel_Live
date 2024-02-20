import { herolist } from "../components/Home";
import ExtraComponent from "../components/ExtraComponent";

const HomeData = () => {
  const img = herolist[0];
  return (
    <div className="flex w-full flex-col items-center justify-center container px-20 text-[#14274A]">
      <div className="flex p-10 text-2xl font-medium ">
        <p>All our room types are including complementary breakfast</p>
      </div>
      {herolist.map((i) => (
        <div key={i} className="flex w-full items-center justify-between mt-10">
          <div className="space-y-5 border-l-2 px-7 mx-10 border-[#14274A]/50">
            <p className="text-3xl font-semibold">Luxury redefined</p>
            <p className="text-base w-[60%]">
              Our rooms are designed to transport you into an environment made
              for leisure. Take your mind off the day-to-day of home life and
              find a private paradise for yourself.
            </p>
            <div className=" text-lg  rounded-md bg-[#E0B973] text-white w-fit cursor-pointer">
              <p className="px-4 py-1">EXPLORE</p>
            </div>
          </div>

          <img src={img} alt="" className="h-[300px] aspect-auto px-5 " />
        </div>
      ))}
      <ExtraComponent />
    </div>
  );
};

export default HomeData;
