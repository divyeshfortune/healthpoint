import React from "react";
import Image from "next/image";
import Link from "next/link";

const MedicineService = () => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[1.875rem]">
          <div className="col-span-6">
            <Image
              src="/images/medicine-service.jpg"
              alt="Medicine Service"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            ></Image>
          </div>
          <div className="col-span-6 md:pl-12 pl-0">
            <h2 className="pb-16">The Heart and Science Of Medicine Service</h2>
            <p className="pb-14 text-17 font-normal text-SlateBlue">
              Letraset sheets containing Lorem Ipsum passages and more recently
              with desktop publishing Various versions have evolved over the
              years, sometimes by accident, sometimes chunks as necessary making
              desktop publishing Various versions have evolved over the years,
              sometimes by accident.
            </p>
            <div>
              <Link href="javascript:void(0)" className="btn_trans">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineService;
