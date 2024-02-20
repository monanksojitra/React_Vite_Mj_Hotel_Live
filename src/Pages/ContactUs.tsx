import { useForm } from "react-hook-form";
import rightarrow from "/arrow-right.svg";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="container px-20 py-10">
      <div className="p-10 flex flex-col space-y-3 items-start justify-center text-[#14274A]">
        <p className="text-3xl font-extrabold">WE ARE HERE FOR YOU</p>
        <p className="text-lg font-semibold">
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, complaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className=" space-y-2 px-10 text-[#14274A]">
          <p className="text-lg font-semibold">
            497 Evergreen Rd. Roseville, CA 95673
          </p>
          <p className="text-base font-extrabold flex gap-x-2 items-center ">
            View map <img src={rightarrow} className="h-6" alt="" />
          </p>
          <p className="text-sm font-semibold">
            Phone: +44 345 678 903 <br /> Email: luxury_hotels@gmail.com
          </p>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-[#14274A] font-semibold space-y-2"
          >
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className={`border-2 border-[#14274A]/50 outline-none px-2 h-10 ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={`border-2 border-[#14274A]/50 outline-none px-2 h-10 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                rows={8}
                className={`border-2 w-full border-[#14274A]/50 outline-none p-2 ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && (
                <span className="text-red-500">Message is required</span>
              )}
            </div>
            <div className="flex justify-end py-8">
              <button
                type="submit"
                className="bg-[#E0B973] h-10 px-5 rounded-md text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
