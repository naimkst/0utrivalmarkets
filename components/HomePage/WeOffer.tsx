import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WeOffer01 from "../../public/assets/images/weoffer01.png";
import WeOffer02 from "../../public/assets/images/weoffer02.png";

export default function WeOffer({ weOffer }: any) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(weOffer);
  }, []);
  return (
    <>
      <div className="container max-w-[1307px] m-auto py-[90px] md:px-0 px-10">
        {data?.map((item: any, index: any) => (
          <div key={index}>
            {index == 0 ? (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center justify-between mb-10">
                <div>
                  <h2 className="md:text-[42px] text-[35px] md:leading-[45px] leading-[40px] font-bold text-[#090D48] mb-5">
                    {item?.brandTitle}
                  </h2>
                  <p className="text-[#090D48] leading-[35px] text-[22px]">
                    {item?.brandDescription}
                  </p>
                </div>
                <div
                  className="relative imageFull"
                  data-aos="slide-left"
                  data-aos-offset="200"
                >
                  <Image
                    className="imgHover"
                    loader={() =>
                      `${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.image}`
                    }
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.image}`}
                    layout="fill"
                  />
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center justify-between">
                <div
                  className="relative imageFull"
                  data-aos="slide-right"
                  data-aos-offset="200"
                >
                  <Image
                    className="imgHover"
                    loader={() =>
                      `${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.image}`
                    }
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.image}`}
                    layout="fill"
                  />
                </div>
                <div>
                  <h2 className="md:text-[42px] text-[35px] md:leading-[45px] leading-[40px] font-bold text-[#090D48] mb-5">
                    {item?.brandTitle}
                  </h2>
                  <p className="text-[#090D48] leading-[35px] text-[22px]">
                    {item?.brandDescription}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="mt-20 items-center text-center">
          <Link href="/">
            <a className="buttonBg text-[24px] font-bold leading-[27px] text-white text-center py-[20px] px-[50px] rounded-[7px]">
              Find More
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
