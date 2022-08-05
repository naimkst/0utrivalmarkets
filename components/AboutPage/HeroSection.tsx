import React from "react";
import AOS from "aos";
import Image from "next/image";
import heroImage from "../../public/assets/images/about/hero-section.png";
import Hero01 from "../../public/assets/images/about/01.png";
import Hero02 from "../../public/assets/images/about/02.png";
import Hero03 from "../../public/assets/images/about/03.png";
import Hero04 from "../../public/assets/images/about/04.png";
import Hero05 from "../../public/assets/images/about/05.png";
import Hero06 from "../../public/assets/images/about/06.png";
import { AiFillStar } from "react-icons/ai";

export default function HeroSection() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="serviceBg md:pt-[160px] pt-[200px] -mt-[146px] px-4 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div className="mb-0 pb-0">
            <div>
              <div data-aos="slide-right relative" className="text-center">
                <div data-aos="slide-right">
                  <h1 className="bounce text-[42px] md:text-[60px] leading-[50px] md:leading-[65px] text-white font-extrabold">
                    Know about us
                  </h1>
                  <p className="text-[24px] leading-[30px] text-white font-medium mt-5 mb-10 text-center">
                    Our goal is top at the heart of creativity services <br />{" "}
                    industry as a digital creator. In has a after comment
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center m-0 p-0 flex items-end justify-center">
              <div
                className=" m-0 p-0  flex items-end"
                data-aos="slide-left"
                data-aos-offset="200"
                data-aos-duration="2000"
              >
                <Image
                  className="z-10 bounce-in m-0 p-0 imgHover"
                  src={Hero01}
                />
              </div>
              <div
                className=" m-0 p-0 flex items-end"
                data-aos="zoom-in"
                data-aos-offset="200"
              >
                <Image
                  className="z-10 bounce-in m-0 p-0 imgHover"
                  src={Hero02}
                />
              </div>

              <div
                className=" m-0 p-0  flex items-end"
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-duration="3000"
              >
                <Image
                  className="z-10 bounce-in m-0 p-0 imgHover"
                  src={Hero03}
                />
              </div>

              <div
                className=" m-0 p-0  flex items-end"
                data-aos="zoom-in-down"
                data-aos-offset="200"
                data-aos-duration="3000"
              >
                <Image
                  className="z-10 bounce-in m-0 p-0 imgHover"
                  src={Hero04}
                />
              </div>

              <div
                className=" m-0 p-0  flex items-end"
                data-aos="zoom-in-left"
                data-aos-offset="200"
                data-aos-duration="3000"
              >
                <Image
                  className="z-10 bounce-in m-0 p-0 imgHover"
                  src={Hero05}
                />
              </div>

              <div
                className=" m-0 p-0  flex items-end"
                data-aos="zoom-out-left"
                data-aos-offset="200"
                data-aos-duration="3000"
              >
                <Image
                  className="z-10 bounce-in m-0 p-0 imgHover"
                  src={Hero06}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
