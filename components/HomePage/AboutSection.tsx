import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import About from "../../public/assets/images/about.png";
import Dot from "../../public/assets/images/Dot.png";
import request from "../lib/request";
import Loading from "../Loading";
export default function AboutSection() {
  const [data, setData] = useState<any>();

  const { isLoading, isFetching }: any = useQuery(
    ["resPhilosophy"],
    async () => {
      const { data } = await request.get(`/home/philosophy-section/1`);
      setData(data);
      return data;
    }
  );
  if (isLoading || isFetching) return <Loading />;

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div className="py-[90px] px-5 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid-row grid-cols-2 gap-4 justify-between items-center md:grid md:grid-cols-2">
            <div
              className="bounce-in imageFull"
              data-aos="slide-right"
              data-aos-offset="200"
            >
              <Image
                className="bounce-in imgHover"
                loader={() =>
                  `${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}`
                }
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}`}
                layout="fill"
              />
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
                  {data?.philosophySlug}
                </p>
                <h1
                  className="text-[30px] md:text-[45px] leading-[40px] md:leading-[50px] font-semibold text-[#090D48] mb-5"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="100"
                >
                  {data?.philosophyTitle}
                </h1>
                <p
                  className="text-[22px] text-[#303030] leading-[28px] font-[500] mb-7"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="100"
                >
                  {data?.philosophyShotDesc}
                </p>
                <h5
                  className="text-[25px] md:text-[35px] leading-[35px] md:leading-[45px] text-[#090D48] font-semibold mb-5"
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  {data?.philosophyListTitle}
                </h5>
                <ul>
                  <li
                    className="text-[#303030] text-[20px] leading-[40px] font-medium"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-sine"
                  >
                    {data?.philosophyLists}
                  </li>
                </ul>
                <Link
                  href={
                    data?.philosophyButtonUrl ? data?.philosophyButtonUrl : "/"
                  }
                >
                  <button
                    className="bounce buttonBg py-5 px-10 text-[24px] font-bold text-white rounded-[7px] mt-10"
                    data-aos="zoom-in"
                    data-aos-duration="100"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-sine"
                  >
                    {data?.philosophyButtonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
