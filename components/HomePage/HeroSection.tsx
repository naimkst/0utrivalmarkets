import React from "react";
import AOS from "aos";
import Image from "next/image";
import heroImage from "../../public/assets/images/hero-image.png";
import heroArrow from "../../public/assets/images/hero-arrow.png";
import bulb from "../../public/assets/images/bulb.png";
import { AiFillStar } from "react-icons/ai";

export default function HeroSection() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="heroSectionBg pt-[160px] -mt-[146px] px-4 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid grid-cols-1 gap-4 items-center justify-between md:grid-cols-2">
            <div>
              <div data-aos="slide-right relative">
                <div className="absolute right-40 bottom-20 hidden md:block" data-aos="flip-left"
                  data-aos-duration="4000">
                  <Image src={heroArrow} />
                </div>
                <h1 className="text-[42px] md:text-[65px] leading-[50px] md:leading-[75px] text-white font-extrabold mt-7" data-aos="slide-right">
                  We are an <br /> e-commerce <br />
                  marketing agency
                </h1>
                <div
                  className="absolute -left-36 bottom-20 hidden md:block"
                  data-aos="zoom-in-up"
                  data-aos-duration="4000"
                >
                  <Image src={bulb} />
                </div>
              </div>
            </div>
            <div className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <Image className="z-10" src={heroImage} />
              <div className="bg-white inline-block py-4 px-6 rounded-[12px] absolute -left-24 top-[55%] z-0 hidden md:block">
                <p className="text-[14px] font-bold">1000,000 Happy Clients</p>
                <div>
                  <div className="flex items-center justify-start mt-2">
                    <AiFillStar color="#FEBB43" />
                    <p className="text-[12px] mx-2 text-[#000000] font-bold">4.9</p>
                    <p className="text-[12px] text-[#8A898E]">(15K Reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
