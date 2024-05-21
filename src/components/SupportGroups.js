import React from "react";
import Image from "next/image";
import Link from "next/link";

const SupportGroups = () => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[1.875rem]">
          <div className="col-span-7 relative">
            <Image
              src="/images/support-groups.jpg"
              alt="Support-groups"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            ></Image>
            <div className="absolute bottom-0 bg-white flex items-center gap-[1.125rem] sm:pt-5 pt-[0.5rem] sm:pb-6 pb-[0.75rem] sm:pr-12 pr-[1.5rem] sm:pl-9 pl-[1.25rem] sm:w-auto w-full">
                <div>
                    <i className="bg-[url('/icon/call.svg')] bg-no-repeat bg-contain sm:w-[2.5625rem] w-[1.5625rem] sm:h-[2.5625rem] h-[1.5625rem] inline-block"></i>
                </div>
                <div>
                    <p className="text-base font-bold text-midnight_text">Emergency Service</p>
                    <h4 className="sm:text-24 text-base">+(690) 2560 0020</h4>
                </div>
            </div>
          </div>
          <div className="md:col-span-5 col-span-7 lg:pl-[4.5625rem] pl-0">
            <h2>Support Groups for Depression & Anxiety</h2>
            <p className="pt-[1.875rem] pb-[3.1875rem] text-17 font-normal text-SlateBlue">
              Letraset sheets containing Lorem Ipsum passages and more recently
              with desktop publishing Various versions have evolved over the
              years, sometimes by accident, sometimes chunks as necessary
              making.
            </p>
            <div>
              <Link href="javascript:void(0)" className="btn_trans">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportGroups;
