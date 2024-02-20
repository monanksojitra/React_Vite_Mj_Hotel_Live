import arrow from "/left-arrow.svg";
const ExtraComponent = () => {
  return (
    <div className="p-10 flex flex-col space-y-2 items-center justify-center text-[#14274A]">
      <p className="text-3xl font-bold">Testimonials</p>
      <p className="text-lg font-medium">
        "Calm, Serene, Retro – What a way to relax and enjoy"
      </p>
      <p className="text-sm"> Mr. and Mrs. Baxter, UK</p>
      <div className="flex items-center justify-center gap-x-3">
        <div className="bg-[#E0B973] rounded-md h-6 aspect-square flex items-center justify-center cursor-pointer">
          <img src={arrow} alt="" className="h-3.5" />
        </div>
        <div className="bg-[#E0B973] rounded-md h-6 aspect-square flex items-center justify-center cursor-pointer">
          <img src={arrow} alt="" className="h-3.5 rotate-180 " />
        </div>
      </div>
    </div>
  );
};

export default ExtraComponent;
