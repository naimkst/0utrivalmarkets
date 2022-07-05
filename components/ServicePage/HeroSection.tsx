import React from "react";
import AOS from "aos";
import Image from "next/image";
import heroImage from "../../public/assets/images/service/hero.png";
import { AiFillStar } from "react-icons/ai";

export default function HeroSection() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="serviceBg pt-[160px] -mt-[146px] px-4 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid grid-cols-1 gap-4 items-center justify-between md:grid-cols-2">
            <div>
              <div data-aos="slide-right relative">
                <div data-aos="slide-right">
                  <h1 className="bounce text-[42px] md:text-[60px] leading-[50px] md:leading-[65px] text-white font-extrabold">
                  We offer a wide variety of solutions for e-commerce sellers
                  </h1>
                  <p className="text-[24px] leading-[30px] text-white font-medium mt-5">Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment</p>
                </div>
              </div>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="z-10 bounce-in" src={heroImage} />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
