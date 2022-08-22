import React, { useState } from "react";
import AOS from "aos";
import Image from "next/image";
import heroImage from "../../public/assets/images/hero-image.png";
import heroArrow from "../../public/assets/images/hero-arrow.png";
import bulb from "../../public/assets/images/bulb.png";
import { AiFillStar } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading";
import request from "../lib/request";

export default function HeroSection({}: any) {
  const [data, setData] = useState<any>();

  const { isLoading, isFetching }: any = useQuery(
    ["resTestimonail"],
    async () => {
      const { data } = await request.get(`/home/hero-section/1`);
      setData(data);
      return data;
    }
  );
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  if (isLoading || isFetching) return <Loading />;
  return (
    <>
      <div className="heroSectionBg pt-[160px] -mt-[146px] px-4 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div className="grid grid-cols-1 gap-4 items-center justify-between md:grid-cols-2">
            <div>
              <div data-aos="slide-right relative">
                <div
                  className="absolute right-40 bottom-20 hidden md:block"
                  data-aos="flip-left"
                  data-aos-duration="4000"
                >
                  <Image src={heroArrow} />
                </div>
                <div data-aos="slide-right">
                  <h1 className="bounce text-[42px] md:text-[65px] leading-[50px] md:leading-[75px] text-white font-extrabold mt-7">
                    {data?.herTitle}
                  </h1>
                </div>

                <div
                  className="absolute -left-36 bottom-20 hidden md:block"
                  data-aos="zoom-in-up"
                  data-aos-duration="4000"
                >
                  <Image src={bulb} />
                </div>
              </div>
            </div>
            <div
              className="relative h-full w-full imageFull"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image
                className="z-10 bounce-in imgHover"
                loader={() =>
                  `${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}`
                }
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}`}
                layout="fill"
              />
              <div className="bg-white inline-block py-4 px-6 rounded-[12px] absolute -left-24 top-[55%] z-0 hidden md:block">
                <p className="text-[14px] font-bold">{data?.heroHappyClient}</p>
                <div>
                  <div className="flex items-center justify-start mt-2">
                    <AiFillStar color="#FEBB43" />
                    <p className="text-[12px] mx-2 text-[#000000] font-bold">
                      {data?.heroRating}
                    </p>
                    <p className="text-[12px] text-[#8A898E]">
                      ({data?.heroReview})
                    </p>
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
