import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function SellerSection({
  amazonSeller,
  amazonSellerSection,
}: any) {
  const [data, setData] = useState<any>([]);
  const [sectionData, setSectionData] = useState<any>();

  useEffect(() => {
    setData(amazonSeller);
    setSectionData(amazonSellerSection[0]);
  }, []);
  return (
    <>
      <div className='bg-[url("/assets/images/service-dot.png")] bg-cover md:py-[90px] py-10 md:px-10 px-10'>
        <div className="container max-w-[1307px] m-auto ">
          <div>
            <div>
              <h2 className="text-[#090D48] leading-[76px] text-[50px] font-bold">
                {sectionData?.amazonSectionTitle}
              </h2>
              <p className="sectionDescription">
                {sectionData?.amazonSectionDescription}
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center content-center mt-14">
              {data?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="isHover border-2 border-[#090D48] text-center rounded-[20px] h-[380px] items-center justify-center p-[30px] flex hover:bg-gradient-to-t from-[#F55555] group to-[#FF8C2C] hover:cursor-pointer"
                >
                  <div>
                    <div className="text-center justify-center content-center w-full m-auto inline!">
                      <svg
                        className=""
                        width="100%"
                        height="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <image
                          className="svgColor"
                          fill="#000000"
                          href={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.image}`}
                          height="50"
                          width="100%"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#090D48] leading-[34px] text-[22px] font-bold mt-5 mb-3 group-hover:text-[#fff]">
                      {item?.amazonTitle}
                    </h3>
                    <p className="text-[#303030] text-[22px] leading-[30px] font-normal group-hover:text-[#fff] group-hover:hidden">
                      {item?.amazonDescription}
                    </p>
                    <div className="items-center justify-center flex invisible group-hover:visible mt-3">
                      <Link href={item?.amazonUrl}>
                        <a className="mr-2 text-[#fff] text-[20px] font-semibold leading-[30px]">
                          See More{" "}
                        </a>
                      </Link>
                      <BsArrowRight color="#fff" size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center justify-center mt-20">
            <Link href={sectionData?.amazonSectionMoreUrl || "/"}>
              <a className="buttonBg py-[25px] px-[80px] text-center items-center text-white text-[24px] font-bold rounded-[7px]">
                See all services
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
