import Image from "next/image";
import Link from "next/link";
import React from "react";
import Blog01 from "../../public/assets/images/blog01.png";
import Blog02 from "../../public/assets/images/blog02.png";
export default function BlogSection() {
  return (
    <>
      <div className="pt-[100px] pb-[140px] bg-[url('/assets/images/blog-bg.svg')] bg-no-repeat bg-auto">
        <div className="m-auto max-w-[1307px] container">
          <div>
            <div>
              <p className="text-[18px] leading-[28px] font-[600] text-white">
                Our Blog
              </p>
              <h2 className="text-[42px] leading-[52px] font-bold text-white py-5">
                Some of our recent <br />
                blog posts
              </h2>
              <p className="text-[22px] leading-[32px] text-white">
                Subscribe to get our latest tips on how to totally conqueror
                your <br /> market, and moreover to outrival it!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="bg-[#FAFAFA] rounded-[7px] p-8 grid grid-cols-2 items-center justify-start gap-3">
                <div
                  className="relative"
                  data-aos="slide-right"
                  data-aos-offset="200"
                >
                  <Image className="imgHover" src={Blog01} />
                </div>
                <div>
                  <p className="text-[16px] leading-[118%] text-[#5F5F5F]">
                    05 Aplil 2021
                  </p>
                  <h3 className="text-[26px] leading-[30px] font-bold text-[#090D48] my-2">
                    Duis vel tincidunt lectus maurisenim.
                  </h3>
                  <p className="text-[#303030] text-[18px] leading-[26px] mb-4">
                    Donec fringlla est ametdis quam quam dictum vitae enim nulla
                    falis Donec quam fringilla Donec fringilla quam.
                  </p>
                  <Link href="/">
                    <a className="text-[#EC615B] hover:text-[#303030] text-[18px] font-bold">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="bg-[#FAFAFA] rounded-[7px] p-8 grid grid-cols-2 items-center justify-start gap-3">
                <div
                  className="relative"
                  data-aos="slide-left"
                  data-aos-offset="200"
                >
                  <Image className="imgHover" src={Blog02} />
                </div>
                <div>
                  <p className="text-[16px] leading-[118%] text-[#5F5F5F]">
                    05 Aplil 2021
                  </p>
                  <h3 className="text-[26px] leading-[30px] font-bold text-[#090D48] my-2">
                    Duis vel tincidunt lectus maurisenim.
                  </h3>
                  <p className="text-[#303030] text-[18px] leading-[26px] mb-4">
                    Donec fringlla est ametdis quam quam dictum vitae enim nulla
                    falis Donec quam fringilla Donec fringilla quam.
                  </p>
                  <Link href="/">
                    <a className="text-[#EC615B] hover:text-[#303030] text-[18px] font-bold">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link href="/">
              <a className="bg-white py-[20px] px-[70px] text-[24px] text-[#FF8B2D] font-bold rounded-[7px] hover:bg-[#090D48] hover:text-white">
                See More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
