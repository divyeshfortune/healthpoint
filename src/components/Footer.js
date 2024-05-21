import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid md:grid-cols-12 sm:grid-cols-4 grid-cols-1 gap-[1.875rem] pt-24 sm:pb-14 pb-10 border-b border-solid border-footer_stroke">
          <div className="col-span-6">
            <Link href="/" className="sm:w-[12.9375rem] w-[10rem] block pb-9">
              <Image
                src="/icon/logo.svg"
                alt="logo"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              />
            </Link>
            <p className="text-17 font-normal text-SlateBlue max-w-[28.3125rem]">
              Letraset sheets containing Lorem Ipsum passages and more recently
              with desktop publishing Various versions have evolved over the
              years, sometimes.
            </p>
          </div>
          
          <div className="sm:col-span-2 col-span-3">
            <h6 className="pb-3">Departments</h6>
            <ul>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Cardiology</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Sports Injury</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Radiology</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Lung Diseases</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Gynecology</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Eye Care</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h6 className="pb-3">Major Links</h6>
            <ul>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Doctors</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Departments</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Appointment</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Working Hours</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">About us</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 col-span-4">
            <h6 className="pb-3">Quick Links</h6>
            <ul>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Health Insurance</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Medical Records</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Online Bill Pay</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Emergency Service</Link>
              </li>
              <li className="text-base text-SlateBlue hover:text-primary pb-1">
                <Link href="javascript:void(0)">Covid 19 info</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:pt-12 pt-5 grid sm:grid-cols-12 grid-cols-1 sm:gap-[1.875rem] gap-2 items-center sm:pb-24 pb-10">
          <div className="flex items-center gap-4 col-span-6">
            <Link href="javascript:void(0)" className="group">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="#2F73F2"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-midnight_text"
              >
                <path
                  d="M32.0779 1.07666H2.88631C1.88676 1.07726 1.07646 1.88796 1.07666 2.88792V32.0795C1.07726 33.0791 1.88796 33.8894 2.88792 33.8892H18.6044V21.2H14.3427V16.2332H18.6044V12.5781C18.6044 8.33931 21.1921 6.03218 24.9733 6.03218C26.7843 6.03218 28.3406 6.16716 28.7943 6.22745V10.6577H26.1869C24.1297 10.6577 23.7314 11.6352 23.7314 13.0699V16.2332H28.6501L28.0092 21.2H23.7314V33.8892H32.0779C33.0781 33.8894 33.889 33.0789 33.8892 32.0787C33.8892 32.0785 33.8892 32.0783 33.8892 32.0779V2.88631C33.8888 1.88676 33.0779 1.07646 32.0779 1.07666Z"
                />
              </svg>
            </Link>
            <Link href="javascript:void(0)" className="group">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="#2F73F2"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-midnight_text"
              >
                <g clip-path="url(#clip0_1_189)">
                  <path
                    d="M30.62 0H2.37998C1.06549 0 0 1.06549 0 2.37998V30.62C0 31.9345 1.06549 33 2.37998 33H30.62C31.9345 33 33 31.9345 33 30.62V2.37998C33 1.06549 31.9345 0 30.62 0V0ZM24.0337 12.8649C24.041 13.0273 24.0445 13.1905 24.0445 13.3544C24.0445 18.3588 20.2353 24.1296 13.269 24.1299H13.2693H13.269C11.1302 24.1299 9.14001 23.503 7.46397 22.4287C7.76031 22.4637 8.06193 22.481 8.36732 22.481C10.1418 22.481 11.7748 21.8758 13.0711 20.8599C11.4132 20.8292 10.0154 19.7342 9.53302 18.2294C9.76389 18.2737 10.0013 18.2979 10.2448 18.2979C10.5905 18.2979 10.9253 18.2513 11.2435 18.1645C9.51061 17.8175 8.20518 16.286 8.20518 14.4521C8.20518 14.435 8.20518 14.4196 8.20569 14.4038C8.71603 14.6875 9.29963 14.8582 9.921 14.8773C8.9041 14.1988 8.23565 13.0389 8.23565 11.7249C8.23565 11.0311 8.42322 10.381 8.7485 9.8213C10.6161 12.1129 13.4073 13.62 16.5549 13.7784C16.4899 13.5009 16.4564 13.2119 16.4564 12.9148C16.4564 10.8241 18.1526 9.12792 20.2441 9.12792C21.3335 9.12792 22.3174 9.58841 23.0085 10.3246C23.8713 10.1544 24.6815 9.83917 25.4134 9.40537C25.1302 10.2893 24.53 11.0311 23.748 11.5001C24.5141 11.4085 25.2442 11.2053 25.9227 10.9037C25.4159 11.6632 24.7732 12.3304 24.0337 12.8649Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_189">
                    <rect width="33" height="33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href="javascript:void(0)" className="group">
              <svg
                width="31"
                height="33"
                viewBox="0 0 31 33"
                fill="#2F73F2"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-midnight_text"
              >
                <g clip-path="url(#clip0_1_191)">
                  <path
                    d="M28.7643 0H2.23574C1.00092 0 0 1.06549 0 2.37998V30.62C0 31.9345 1.00092 33 2.23574 33H28.7643C29.9991 33 31 31.9345 31 30.62V2.37998C31 1.06549 29.9991 0 28.7643 0ZM10.9959 24.9434H7.22092V12.8536H10.9959V24.9434ZM9.10852 11.2028H9.08392C7.81717 11.2028 6.99789 10.2745 6.99789 9.11433C6.99789 7.92799 7.84224 7.02539 9.13359 7.02539C10.4249 7.02539 11.2196 7.92799 11.2442 9.11433C11.2442 10.2745 10.4249 11.2028 9.10852 11.2028ZM24.6076 24.9434H20.8331V18.4756C20.8331 16.8502 20.2865 15.7417 18.9207 15.7417C17.8779 15.7417 17.2568 16.4894 16.9839 17.2113C16.8841 17.4696 16.8597 17.8306 16.8597 18.1919V24.9434H13.085C13.085 24.9434 13.1344 13.9878 13.085 12.8536H16.8597V14.5654C17.3613 13.7416 18.2589 12.5699 20.2617 12.5699C22.7453 12.5699 24.6076 14.2978 24.6076 18.0111V24.9434Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_191">
                    <rect width="31" height="33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="sm:col-span-2 col-span-3">
            <span className="text-18 font-medium text-midnight_text">
              Newsletter
            </span>
          </div>
          <div className="col-span-4">
            <form className="flex items-stretch">
              <input
                type="email"
                placeholder="Email address*"
                className="border border-solid border-placeholder py-[0.630rem] px-4"
              />
              <button className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
