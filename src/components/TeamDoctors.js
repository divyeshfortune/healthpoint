import React from "react";
import {portfolioinfo} from '../api/data';
import Link from "next/link";
import Image from "next/image";

const TeamDoctors = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h2 className="pb-4">Team of Doctors</h2>
          <p className="text-xl text-SlateBlue font-normal">
            Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing
          </p>
        </div>
        <div
          className="flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-0 max-w-[120rem] w-full justify-center m-auto pt-[5rem]"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {portfolioinfo.map((item, index) => (
            <Link
              key={index}
              href={`/portfolio-details/${item.slug}`}
              className={`w-[18rem] group ${
                index % 2 !== 0 ? "margin_top" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="transition-all duration-500 group-hover:scale-[1.1] group-hover:cursor-pointer"
              />
              <h4 className="pb-[0.3125rem] pt-[2.1875rem] group-hover:text-primary group-hover:cursor-pointer">
                {item.title}
              </h4>
              <p className="text-secondary font-normal text-18 group-hover:text-primary group-hover:cursor-pointer">
                {item.info}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamDoctors;
