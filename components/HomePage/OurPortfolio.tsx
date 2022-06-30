import Image from "next/image";
import React from "react";
import Portfolio from '../../public/assets/images/portfolio.png';

export default function OurPortfolio() {
  return (
    <>
      <div className="relative py-[90px]">
        
        <div className="container max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center justify-center">
            <div className="relative">
              <p className="text-[30px] leading-[40px] text-[#090D48] font-[600]">Our Portfolio</p>
              <h2 className="text-[42px] leading-[56px] font-[600] text-[#090D48] my-3">
                Have an idea of a project?
              </h2>
              <p className="text-[22px] text-[#303030] leading-[27px] my-3">
                Feel free to drop us a question here.. kindly add some details
                so that we get the best understanding of what your goal may be.
              </p>
              <div className="mt-14 relative z-10">
                <a
                  className="buttonBg font-bold text-[24px] text-white py-[20px] px-[50px] rounded-[7px] mt-10"
                  href="/"
                >
                 See all
                </a>
              </div>
              
            </div>
            <div>
              <Image src={Portfolio} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
