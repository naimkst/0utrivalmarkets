import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CreativeMind({ creativeMindData }: any) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(creativeMindData);
  }, []);
  return (
    <>
      {data?.map((info: any, index: any) => (
        <div key={index}>
          {index == 0 ? (
            <div className="bg-[url('/assets/images/bg-full-dot.png')] bg-right bg-no-repeat bg-auto md:py-[90px] px-5 md:px-0">
              <div className="container max-w-[1307px] m-auto">
                <div className="grid grid-cols-5 justify-between items-center">
                  <div className="md:col-span-3 col-span-5">
                    <h2 className="md:text-[45px] text-[30px] text-[#090d48] md:leading-[60px] leading-[38px] font-semibold mb-5">
                      {info?.creativeMindTitle}
                    </h2>
                    <p className="sectionDescriptionBigLine">
                      {info?.creativeMindDescription}
                    </p>
                    <Link href={info?.creativeMindButtonUrl || "/"}>
                      <button className="bg-gradient-to-r from-[#FF9127] to-[#F45356] py-[18px] px-[45px] text-white font-bold text-[24px] rounded-[7px] mt-8 hover:from-[#F45356] hover:to-[#FF9127]">
                        {info?.creativeMindButtonText}
                      </button>
                    </Link>
                  </div>
                  <div
                    className="md:col-span-2 col-span-5 relative imageFull"
                    data-aos="slide-left"
                    data-aos-offset="200"
                  >
                    <Image
                      className="imgHover"
                      loader={() =>
                        `${process.env.NEXT_PUBLIC_IMAGE_URL}/${info?.image}`
                      }
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${info?.image}`}
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="md:py-[90px] px-5 md:px-0 py-10">
              <div className="container max-w-[1307px] m-auto">
                <div className="grid grid-cols-5 gap-6 justify-between items-center">
                  <div
                    className="md:col-span-2 col-span-5 md:order-first order-last  relative imageFull"
                    data-aos="slide-right"
                    data-aos-offset="200"
                  >
                    <Image
                      className="imgHover"
                      loader={() =>
                        `${process.env.NEXT_PUBLIC_IMAGE_URL}/${info?.image}`
                      }
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${info?.image}`}
                      layout="fill"
                    />
                  </div>
                  <div className="md:col-span-3 col-span-5">
                    <h2 className="md:text-[45px] text-[30px] text-[#090d48] md:leading-[60px] leading-[38px] font-semibold mb-5">
                      {info?.creativeMindTitle}
                    </h2>
                    <p className="sectionDescriptionBigLine">
                      {info?.creativeMindDescription}
                    </p>
                    <Link href={info?.creativeMindButtonUrl || "/"}>
                      <button className="bg-gradient-to-r from-[#FF9127] to-[#F45356] py-[18px] px-[45px] text-white font-bold text-[24px] rounded-[7px] mt-8 hover:from-[#F45356] hover:to-[#FF9127]">
                        {info?.creativeMindButtonText}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
