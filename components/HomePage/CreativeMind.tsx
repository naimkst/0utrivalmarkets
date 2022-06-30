import Image from "next/image";
import React from "react";
import Breliant from "../../public/assets/images/Breliant.png";
import mindLeft from "../../public/assets/images/mind-left.png";

export default function CreativeMind() {
  return (
    <>
      <div className="bg-[url('/assets/images/bg-full-dot.png')] bg-right bg-no-repeat bg-auto py-[90px]">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid grid-cols-5 justify-between items-center">
            <div className="col-span-3">
              <h2 className="text-[45px] text-[#090d48] leading-[60px] font-semibold mb-5">
                Here at outrival markets we are a team of creative minds, who
                will turn your idea into a brilliant reality...
              </h2>
              <p className="sectionDescriptionBigLine">
                Don't procrastinate! <br /> Feel free to reach out to us with
                your questions comments concerns <br /> and anxieties (oh no, we
                are not therapists, but if it's anything <br />
                marketing... We can surely help out!
              </p>
              <button className="bg-gradient-to-r from-[#FF9127] to-[#F45356] py-[18px] px-[45px] text-white font-bold text-[24px] rounded-[7px] mt-8 hover:from-[#F45356] hover:to-[#FF9127]">
                Send us a message
              </button>
            </div>
            <div className="col-span-2">
              <Image src={Breliant} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-[90px]">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid grid-cols-5 gap-6 justify-between items-center">
            <div className="col-span-2">
              <Image src={mindLeft} />
            </div>
            <div className="col-span-3">
              <h2 className="text-[45px] text-[#090d48] leading-[60px] font-semibold mb-5">
                As Amazon sellers we sometimes get stuck in the nitty gritty
                blocking our minds out of expansion....
              </h2>
              <p className="sectionDescriptionBigLine">
                Hey, if you'd like continue on like that no worries... If you
                agree that that is not the correct approach... Then why not
                leave the nitty gritty to us?!
              </p>
              <button className="bg-gradient-to-r from-[#FF9127] to-[#F45356] py-[18px] px-[45px] text-white font-bold text-[24px] rounded-[7px] mt-8 hover:from-[#F45356] hover:to-[#FF9127]">
                Send us a message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
