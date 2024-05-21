import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="md:bg-[linear-gradient(90deg,#2f73f2_60%,#46C4FF_40%)] bg-[linear-gradient(90deg,#2f73f2_100%,#46C4FF_40%)]">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[1.875rem]">
          <div className="sm:col-span-5 col-span-7">
            <h2 className="text-white sm:pb-[2.625rem] pb-0">
              Get Quick Free Professional Consultation
            </h2>
            <div className="flex items-center gap-[1.5625rem] py-8 border-b border-solid border-storke_2">
              <div>
                <i className="bg-[url('/icon/clock.svg')] bg-no-repeat bg-contain w-[2.9375rem] h-[2.9375rem] inline-block"></i>
              </div>
              <div>
                <p className="text-white sm:text-xl text-base font-bold">
                  Mon-Fri :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    9:00 am - 10:00 pm
                  </span>
                </p>
                <p className="text-white sm:text-xl text-base font-bold">
                  Sat-Sun :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    9:00 am - 8:00 pm
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[1.5625rem] py-8 border-b border-solid border-storke_2">
              <div>
                <i className="bg-[url('/icon/contact.svg')] bg-no-repeat bg-contain w-[3.0625rem] h-[3.0625rem] inline-block"></i>
              </div>
              <div>
                <p className="text-white sm:text-xl text-base font-bold">
                  Phone :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    +(690) 2560 0020
                  </span>
                </p>
                <p className="text-white sm:text-xl text-base font-bold">
                  Email :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    booking@healthpoint.com
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[1.5625rem] py-8">
              <div>
                <i className="bg-[url('/icon/location.svg')] bg-no-repeat bg-contain w-[3.0625rem] h-[3.0625rem] inline-block"></i>
              </div>
              <div className="max-w-[13.5rem]">
                <p className="text-white sm:text-xl text-base font-bold">
                  Address :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    Healthpoint 4263 Wilkinson Street Tennessee
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-[3.75rem]">
              <Link
                href="javascript:void(0)"
                className="btn bg-PictonBlue relative pl-16 overflow-y-hidden"
              >
                <i className="bg-[url('/icon/map.svg')] bg-no-repeat w-[3.25rem] h-[3.25rem] inline-block absolute left-0"></i>
                View Location Map
              </Link>
            </div>
          </div>
          <div className="col-span-7 bg-white md:ml-[4.375rem] ml-0">
            <form>
              <div class="grid grid-cols-2 gap-5 sm:pt-[3.75rem] pt-[1.75rem] sm:px-[4.375rem] px-[2.375rem]">
                <div className="sm:col-span-1 col-span-2">
                    <label for="name" className="pb-4 inline-block text-18 font-normal">Name</label>
                    <input
                    type="text"
                    class="border border-stroke px-4 py-2 focus:outline-none !rounded-none"
                    placeholder="Full Name"
                    />
                </div>
                <div className="sm:col-span-1 col-span-2">
                    <label for="email" className="pb-4 inline-block">Email</label>
                    <input
                    type="email"
                    class="border border-stroke px-4 py-2 focus:outline-none !rounded-none"
                    placeholder="Email address"
                    />
                </div>
                <div className="sm:col-span-1 col-span-2">
                    <label for="phone" className="pb-4 inline-block">Phone</label>
                    <input
                    type="number"
                    class="border border-stroke px-4 py-2 focus:outline-none !rounded-none"
                    placeholder="+91"
                    />
                </div>
                <div className="sm:col-span-1 col-span-2">
                    <label for="department" className="pb-4 inline-block">Department</label>
                    <input
                    type="text"
                    class="border border-stroke px-4 py-2 focus:outline-none !rounded-none"
                    placeholder="Ortho"
                    />
                </div>
                <div className="flex flex-col m:col-span-1 col-span-2">
                    <label for="date" className="pb-4 inline-block">Date</label>
                    <input
                    type="date"
                    class="border border-stroke px-4 py-2 focus:outline-none text-placeholder"
                    placeholder="date"
                    />
                </div>
                <div className="flex flex-col m:col-span-1 col-span-2">
                    <label for="time" className="pb-4 inline-block">Time</label>
                    <input
                    type="time"
                    class="border border-stroke px-4 py-2 focus:outline-none text-placeholder"
                    placeholder="time"
                    />
                </div>
                <div className="col-span-2">
                <label for="message" className="pb-4 inline-block">Message</label>
                <textarea
                  cols="10"
                  rows="5"
                  class="border border-stroke px-4 py-2 focus:outline-none !rounded-none"
                  placeholder="Anything else you wanna communicate"
                ></textarea>
                </div>
              </div>
              <div className="px-[4.375rem] pt-8 pb-[4.5625rem]">
                <button className="btn_trans px-12">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
