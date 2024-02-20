import { herolist } from "../components/Home";
import ExtraComponent from "../components/ExtraComponent";

const Facilities = () => {
  return (
    <div>
      <div className="p-10 flex flex-col space-y-4 items-center justify-center text-[#14274A]">
        <p className="text-3xl font-extrabold">FACILITIES</p>
        <p className="text-lg font-semibold w-[80%] text-center">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite uniquw. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </p>
      </div>
      <div className="space-y-10">
        {herolist.map((item) => (
          <div className="w-[80%] relative mx-auto h-[600px] overflow-hidden">
            <img src={item} alt="" className="object-contain" />
            <div className="absolute bottom-0 w-fit px-10 py-2 text-2xl right-0 left-0 mx-auto bg-white">
              <p className="text-[#14274A] font-bold">THE GYM</p>
            </div>
          </div>
        ))}
      </div>
      <ExtraComponent />
    </div>
  );
};

export default Facilities;
