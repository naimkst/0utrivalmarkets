import Image from "next/image";
import React from "react";
import projectIdea from "../../public/assets/images/project-idea.png";
import projectDot from "../../public/assets/images/project-dot.png";
import secrionTop from "../../public/assets/images/section-shape.png";
import Link from "next/link";

export default function ProjectIdea() {
  return (
    <>
      <div className="bg-[#fafafa] relative py-[60px] md:px-0 px-5">
        <div className="absolute left-0 top-0">
          {/* <Image src={secrionTop}/> */}
        </div>
        <div className="container max-w-[1307px] m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
            <div className="relative">
              <h2 className="text-[42px] leading-[56px] font-[600] text-[#090D48] mb-2">
                Have an idea of a project?
              </h2>
              <p className="text-[22px] text-[#303030] leading-[27px] my-7">
                Feel free to drop us a question here.. kindly add some details
                so that we get the best understanding of what your goal may be.
              </p>
              <div className="relative z-10 md:mb-0 mb-10">
                <Link href="/">
                  <button className="buttonBg font-bold text-[24px] text-white py-[25px] px-[45px] rounded-[7px] mt-8">
                    Lets get in touch
                  </button>
                </Link>
              </div>
              <div className="absolute -left-[80px] -bottom-[130px] z-0">
                <Image src={projectDot} />
              </div>
            </div>
            <div data-aos="slide-left" data-aos-offset="200">
              <Image className="imgHover" src={projectIdea} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
