import Image from "next/image";
import Link from "next/link";
import React from "react";
import Portfolio from "../../public/assets/images/portfolio.png";

export default function OurPortfolio() {
  return (
    <>
      <div className="relative md:py-[90px] py-10 px-5 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
            <div className="relative">
              <p className="text-[30px] leading-[40px] text-[#090D48] font-[600]">
                Our Portfolio
              </p>
              <h2 className="text-[42px] leading-[56px] font-[600] text-[#090D48] my-3">
                Have an idea of a project?
              </h2>
              <p className="text-[22px] text-[#303030] leading-[27px] my-3">
                Feel free to drop us a question here.. kindly add some details
                so that we get the best understanding of what your goal may be.
              </p>
              <div className="mt-14 relative z-10 mb-16 md:mb-0">
                <Link href="/">
                  <a className="buttonBg font-bold text-[24px] text-white py-[20px] px-[50px] rounded-[7px] mt-10">
                    See all
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="imgHover" src={Portfolio} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
