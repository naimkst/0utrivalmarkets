import Image from "next/image";
import React from "react";
import About from "../../public/assets/images/about.png";
import Dot from "../../public/assets/images/Dot.png";
export default function AboutSection() {
  return (
    <>
      <div className="py-[90px] px-5 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid-row grid-cols-2 gap-4 justify-between items-center md:grid md:grid-cols-2">
            <div
              className="bounce-in"
              data-aos="slide-right"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={About} width={700} />
            </div>
            <div>
              <div className="relative">
                <div className="absolute -left-16 -top-7">
                  <Image src={Dot} />
                </div>
                <p
                  className="text-[18px] font-bold text-[#090D48] leading-[60px]"
                  data-aos="fade-down"
                  data-aos-duration="100"
                  data-aos-delay="200"
                >
                  Our philosophy:
                </p>
                <h1
                  className="text-[30px] md:text-[45px] leading-[40px] md:leading-[50px] font-semibold text-[#090D48] mb-5"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="100"
                >
                  We go big or we go home.. <br />
                  Again we outrival..
                </h1>
                <p
                  className="text-[22px] text-[#303030] leading-[28px] font-[500] mb-7"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="100"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority.
                </p>
                <h5
                  className="text-[25px] md:text-[35px] leading-[35px] md:leading-[45px] text-[#090D48] font-semibold mb-5"
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  We specialize in e-commerce marketing particularly to small
                  businesses at Amazon sellers.
                </h5>
                <ul>
                  <li
                    className="text-[#303030] text-[20px] leading-[40px] font-medium"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-sine"
                  >
                    How is your online presence? Does it need a boost?{" "}
                  </li>
                  <li
                    className="text-[#303030] text-[20px] leading-[40px] font-medium"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-sine"
                  >
                    Perhaps you are getting views but no conversions?
                  </li>
                  <li
                    className="text-[#303030] text-[20px] leading-[40px] font-medium"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-sine"
                  >
                    Are your products not showcased ?
                  </li>
                  <li
                    className="text-[#303030] text-[20px] leading-[40px] font-medium"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-sine"
                  >
                    Building a new brand and your just stuck with the name.. and
                    that is all
                  </li>
                  <li
                    className="text-[#303030] text-[20px] leading-[40px] font-medium"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-sine"
                  >
                    Does your brand have what it takes to skyrocket sales in
                    2022?
                  </li>
                  <li
                    className="text-[#303030] text-[20px] leading-[40px] font-medium"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-sine"
                  >
                    If you are unsure one of the above questions.. hey you are
                    at the right spot..
                  </li>
                </ul>
                <button
                  className="bounce buttonBg py-5 px-10 text-[24px] font-bold text-white rounded-[7px] mt-10"
                  data-aos="zoom-in"
                  data-aos-duration="100"
                  data-aos-delay="500"
                  data-aos-easing="ease-in-sine"
                >
                  Reach out to us here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
