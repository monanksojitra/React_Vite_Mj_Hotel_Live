import { herolist } from "../components/Home";
import plus from "/plus.svg";
import ExtraComponent from "../components/ExtraComponent";

const Rooms = () => {
  return (
    <div>
      <div className="p-10 flex flex-col space-y-4 items-center justify-center text-[#14274A]">
        <p className="text-3xl font-extrabold">ROOMS AND RATES</p>
        <p className="text-lg font-semibold w-[80%] text-center">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.
        </p>
      </div>
      <div className="space-y-10">
        {herolist.map((item) => (
          <div className="w-[80%] relative mx-auto h-[700px] overflow-hidden rounded-xl">
            <img
              src={item}
              alt=""
              className="object-contain w-full rounded-xl"
            />
            <div className="absolute bottom-0 w-full">
              <div className=" bg-[#14274A] flex items-center justify-center h-16 z-20  w-full ">
                <p className="text-white font-bold text-2xl font-sans tracking-wider">
                  SINGLE ROOM
                </p>
              </div>
              <div className="bg-white h-20 border-2 flex items-center justify-between px-20 border-t-0 border-[#14274A]/70 rounded-br-xl rounded-bl-xl">
                <div className="flex gap-x-4">
                  <div className="bg-[#E0B973] h-6 aspect-square rounded-full flex items-center cursor-pointer justify-center">
                    <img src={plus} alt="" className="h-4" />
                  </div>
                  <p className="text-[#14274A] text-base font-bold">
                    VIEW ROOM DETAILS
                  </p>
                </div>
                <div className="bg-[#E0B973] w-fit rounded-md text-white h-10 flex items-center cursor-pointer justify-center px-7">
                  <p className="font-semibold">$147 Avg/night</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ExtraComponent />
    </div>
  );
};

export default Rooms;
