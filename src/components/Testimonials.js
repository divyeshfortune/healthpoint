import React from "react";
import Link from "next/link";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-PowderBlue pb-0">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[1.875rem]">
          <div className="col-span-5">
            <div className="max-w-[23.625rem] pb-[4.0625rem] pb-[2.0625rem] border-b border-solid border-stroke">
              <h2>Customers Testimonials</h2>
            </div>
            <div className="md:pt-[4.0625rem] pt-0">
              <span className="sm:text-[6.0625rem] text-[3.0625rem] leading-[7.9375rem] font-bold text-primary">
                1950+
              </span>
              <p className="text-[1.4375rem] leading-[1.875rem] font-medium text-primary">
                clients & 4.9 Rating based on 5
              </p>
              <Link
                href="javascript:void(0)"
                className="btn_trans md:px-16 px-6 md:mt-16 mt-8 hover:shadow-[inset_-10.5rem_0_0_0_#12429A,inset_10.5rem_0_0_0_#12429A]"
              >
                More Testimonials
              </Link>
            </div>
          </div>
          <div className="col-span-7">
            <div className="flex md:flex-row flex-col items-start md:gap-11 gap-6">
              <div>
                <i className="bg-[url('/icon/quotation.svg')] bg-contain bg-no-repeat w-[3.6875rem] h-[3.6875rem] inline-block"></i>
              </div>
              <div>
                <p className="sm:text-[1.625rem] text-18 sm:leading-[2.75rem] leading-7 font-normal text-SlateBlue max-w-[34.75rem]">Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Various versions have evolved over the years, sometimes</p>
              </div>
            </div>
            <div className="md:pl-[6.5rem] pl-0 pt-12 pb-20">
                <span className="text-[1.4375rem] font-medium leading-[1.75rem] text-midnight_text">Stephanie Sue</span>
                <p className="text-xl font-medium text-SlateBlue">Designation</p>
            </div>
            <div className="max-w-[36.875rem] md:ml-[6.25rem] ml-0 -mb-[6.5rem]">
            <Image
              src="/images/slide-1.jpg"
              alt="slider"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
