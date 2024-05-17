import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-PowderBlue pt-24 pb-0 relative before:absolute before:content-[''] before:bg-[url('/images/hero_1.jpg')] before:bg-no-repeat before:top-[5.9375rem] before:w-[9.125rem] before:h-[9.125rem] xl:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero_2.png')] after:bg-no-repeat after:top-[28.125rem] after:w-[16.875rem] after:h-[16.875rem] xl:after:inline-block after:hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[1.875rem] items-center">
          <div className="col-span-5">
            <h2>Advanced Healthcare Made Personal</h2>
            <p className="pt-4 pb-12 text-xl text-midnight_text">
              Letraset sheets containing Lorem Ipsum passagesand more recently
              with desktop publishing
            </p>
            <div className="sm:text-start text-center lg:pb-0 pb-8">
                <Link href="javascript:void(0)" className="btn sm:py-[0.9rem] py-[0.5rem] sm:px-[3.6rem] px-8 hover:shadow-[inset_-10.5rem_0_0_0_#102D47,inset_10.5rem_0_0_0_#102D47] dark:hover:shadow-[inset_-10.5rem_0_0_0_#12429A,inset_10.5rem_0_0_0_#12429A]">Book appointment</Link>
            </div>
          </div>
          <div className="col-span-7 xl:-mr-[24.75rem] sm:-mr-[10.75rem] -mr-0 lg:inline-block hidden">
            <Image
              src="/images/hero-banner.png"
              alt="hero-banner"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
