import Image from "next/image";
import React from "react";
import projectIdea from "../../public/assets/images/project-idea.png";
import projectDot from "../../public/assets/images/project-dot.png";
import secrionTop from "../../public/assets/images/section-shape.png";
import Seller010 from "../../public/assets/images/service/seller10.png";
import Link from "next/link";

export default function AskQuestion() {
  return (
    <>
      <div className="bg-[#fafafa] relative py-[60px] md:px-0 px-5">
        <div className="absolute left-0 top-0">
          {/* <Image src={secrionTop}/> */}
        </div>
        <div className="container max-w-[1307px] m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
            <div className="relative">
              <p className="text-[22px] text-[#303030] leading-[27px] my-7">
                Not sure how all this works??
              </p>
              <h2 className="text-[42px] leading-[56px] font-[600] text-[#090D48] mb-2">
                Ask us your questions here!
              </h2>
              <div className="relative z-10">
                <Link href="/">
                  <button className="buttonBg font-bold text-[24px] text-white py-[15px] px-[45px] rounded-[7px] mt-8">
                    CONTACT US
                  </button>
                </Link>
              </div>
              <div className="absolute -left-[80px] -bottom-[130px] z-0">
                <Image src={projectDot} />
              </div>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller010} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
