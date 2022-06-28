import Image from "next/image";
import React from "react";
import footerLogo from "../../public/assets/images/footer-logo.png";
import {
  AiOutlineBehance,
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <div className="bg-[#090D48] py-[65px] items-center">
        <div className="container max-w-[1307px] m-auto grid grid-cols-1 gap-4 justify-between md:grid-cols-4">
          <div>
            <div className="flex justify-center content-center md:content-start">
              <Image className="m-auto content-center" src={footerLogo} />
            </div>
            <div>
              <ul className="flex justify-center items-center gap-[20px] my-[25px] md:items-start">
                <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full">
                  <AiOutlineBehance color="#2674D1" />
                </li>
                <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full">
                  <AiOutlineDribbble color="#DE778C" />
                </li>
                <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full">
                  <AiOutlineTwitter color="#5F98DD" />
                </li>
                <li className="bg-[#fff] w-[32px] h-[32px] items-center justify-center flex rounded-full">
                  <AiOutlineInstagram color="#FF8B2D" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="h2Title text-center md:text-left">Our Company</h2>
            <ul className="text-center md:text-left">
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="h2Title text-center md:text-left">Service</h2>
            <ul className="content-center text-center md:text-left">
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  Amazon account{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  Management
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  A+/ EBC content
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  Product content writing
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[20px] leading-[35px] hover:text-[#FF8B2D] "
                  href=""
                >
                  Product photography
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="h2Title text-center md:text-left">Our Address</h2>
            <div className="flex-row text-center md:text-left">
              <div>
                <p className="text-white text-[20px] leading-[30px] hover:text-[#FF8B2D]">
                  5055 North 03th Avenue,Penscola,
                  <br /> FL 32503, New York
                </p>
              </div>
              <div className="mt-[20px] items-center justify-center flex text-center md:text-left md:justify-start">
                <BsTelephone color="#fff" className="text-[25px] mr-4" />
                <a
                  className="text-white text-[20px] leading-[30px] hover:text-[#FF8B2D]"
                  href="tel:+1 965 047 658 23"
                >
                  +1 965 047 658 23
                </a>
              </div>

              <div className="mt-[20px] items-center justify-center flex md:text-left md:justify-start">
                <BiEnvelope color="#fff" className="text-[25px] mr-4" />
                <a
                  className="text-white text-[20px] leading-[30px] hover:text-[#FF8B2D]"
                  href="tel:+1 965 047 658 23"
                >
                  +1 965 047 658 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FD8332] py-[25px]">
        <p className="text-center text-white text-[16px]">2022 | All Right Reserved By <span className="font-bold">Outrival.</span></p>
      </div>
    </>
  );
}
