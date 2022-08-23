import Image from "next/image";
import React, { useEffect, useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function HappyClientSection({ counterData }: any) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(counterData);
  }, []);
  return (
    <>
      <div className="md:pb-[150px]">
        <div>
          <div className="">
            <div className="md:h-[299px] bg-gradient-to-r from-[#FF9127] to-[#F45356] md:pt-32 pt-14  px-5 md:px-0 pb-14 md:pb-0">
              <div className="container max-w-[1307px] m-auto">
                <div className="grid md:grid-cols-4 grid-cols-1 items-center justify-between content-center gap-6">
                  {data?.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="isHover bg-[#FAFAFA] content-center text-center py-[60px] h-[280px] rounded-[25px] group hover:bg-gradient-to-t from-[#F75A54] to-[#FF8B2E] hover:cursor-pointer hover:border-2 hover:border-[#090D48] border-2 border-[#FAFAFA]"
                    >
                      <div className="text-center justify-center content-center w-full m-auto inline!">
                        <svg
                          width="100%"
                          height="50"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <image
                            className="svgColor"
                            href={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.image}`}
                            height="50"
                            width="100%"
                          />
                        </svg>
                      </div>

                      <p className="text-[#090D48] leading-[36px] text-[24px] font-bold group-hover:text-[#fff] my-3">
                        {item?.counterTitle}
                      </p>

                      <CountUp
                        end={Number(item?.counterValue)}
                        redraw={true}
                        className="text-[40px] font-bold leading-[55px] text-[#090D48] group-hover:text-[#fff]"
                      >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span
                              className="text-[40px] font-bold leading-[55px] text-[#090D48] group-hover:text-[#fff]"
                              ref={countUpRef}
                            />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
