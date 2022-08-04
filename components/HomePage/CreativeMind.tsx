import Image from "next/image";
import Link from "next/link";
import React from "react";
import Breliant from "../../public/assets/images/Breliant.png";
import mindLeft from "../../public/assets/images/mind-left.png";

export default function CreativeMind() {
  return (
    <>
      <div className="bg-[url('/assets/images/bg-full-dot.png')] bg-right bg-no-repeat bg-auto md:py-[90px] px-5 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid grid-cols-5 justify-between items-center">
            <div className="md:col-span-3 col-span-5">
              <h2 className="md:text-[45px] text-[30px] text-[#090d48] md:leading-[60px] leading-[38px] font-semibold mb-5">
                Here at outrival markets we are a team of creative minds, who
                will turn your idea into a brilliant reality...
              </h2>
              <p className="sectionDescriptionBigLine">
                Dont procrastinate! <br /> Feel free to reach out to us with
                your questions comments concerns <br /> and anxieties (oh no, we
                are not therapists, but if its anything <br />
                marketing... We can surely help out!
              </p>
              <button className="bg-gradient-to-r from-[#FF9127] to-[#F45356] py-[18px] px-[45px] text-white font-bold text-[24px] rounded-[7px] mt-8 hover:from-[#F45356] hover:to-[#FF9127]">
                Send us a message
              </button>
            </div>
            <div
              className="md:col-span-2 col-span-5 relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="imgHover" src={Breliant} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-[90px] px-5 md:px-0 py-10">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid grid-cols-5 gap-6 justify-between items-center">
            <div
              className="md:col-span-2 col-span-5 md:order-first order-last  relative"
              data-aos="slide-right"
              data-aos-offset="200"
            >
              <Image className="imgHover" src={mindLeft} />
            </div>
            <div className="md:col-span-3 col-span-5">
              <h2 className="md:text-[45px] text-[30px] text-[#090d48] md:leading-[60px] leading-[38px] font-semibold mb-5">
                As Amazon sellers we sometimes get stuck in the nitty gritty
                blocking our minds out of expansion....
              </h2>
              <p className="sectionDescriptionBigLine">
                Hey, if youd like continue on like that no worries... If you
                agree that that is not the correct approach... Then why not
                leave the nitty gritty to us?!
              </p>
              <Link href="/">
                <button className="bg-gradient-to-r from-[#FF9127] to-[#F45356] py-[18px] px-[45px] text-white font-bold text-[24px] rounded-[7px] mt-8 hover:from-[#F45356] hover:to-[#FF9127]">
                  Send us a message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
