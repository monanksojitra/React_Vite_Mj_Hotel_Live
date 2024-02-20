import home from "../../public/home.svg";
import downarrow from "../../public/downarrow.svg";

function Hero({ img }: { img: string }) {
  return (
    <div
      className="w-full bg-no-repeat relative  bg-cover bg-center h-screen flex  justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <section className="z-20 my-auto w-full container px-60 leading-none text-white space-y-1">
        <p className="text-[40px] font-thin">WELCOME TO</p>
        <p className="text-[100px] font-bold">LUXURY</p>
        <p className="text-5xl font-semibold">HOTELS</p>
        <p className="text-xl w-[50%]">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
      </section>
      <div className="absolute bottom-1 space-y-2 cursor-pointer">
        <div className="bg-[#E0B973] h-12 px-5 rounded-xl flex items-center justify-between gap-x-5">
          <img src={home} alt="" className="h-5" />
          <p className="text-base uppercase font-bold text-white">book now</p>
        </div>
        <a
          href="#footer"
          className="flex flex-col items-center text-white text-2xl cursor-pointer  gap-y-2"
        >
          <p>Scroll</p>
          <img src={downarrow} alt="" className="h-7" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
