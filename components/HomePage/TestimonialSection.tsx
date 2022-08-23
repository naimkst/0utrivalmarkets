import Image from "next/image";
import React, { useEffect, useState } from "react";
import Testimonial from "../../public/assets/images/testimonial.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import request from "../lib/request";
import Loading from "../Loading";
// import "swiper/css/navigation";

export default function TestimonialSection({
  testimonailSectionData,
  testimonialData,
}: any) {
  const [data, setData] = useState<any>();
  const [testimonail, setTestimonial] = useState<any>([]);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  useEffect(() => {
    setTestimonial(testimonialData);
    setData(testimonailSectionData[0]);
  }, []);
  return (
    <>
      <div className="pb-[50px] md:py-[90px] px-5 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div>
            <p className="slugTitle">{data?.testimonialSlug}</p>
            <h2 className="sectionTitle">{data?.testimonialTitle}</h2>
            <p className="sectionDescription mt-4">
              {data?.testimonialShortDesc}
            </p>
          </div>

          <div className="content-center overflow-x-hidden overflow-y-hidden">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper testimonial"
              autoHeight={true}
              freeMode={true}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              spaceBetween={50}
              slidesPerView={3}
            >
              {testimonail?.map((data: any, index: any) => (
                <SwiperSlide key={index} className="py-[40px] md:py-[90px]">
                  <div className="bg-[#FAFAFA] rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer ">
                    <div className="imageFull"></div>
                    <Image
                      loader={() =>
                        `${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}`
                      }
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}`}
                      layout="intrinsic"
                      width={80}
                      height={80}
                      className="rounded-[7px] object-cover"
                    />

                    <p className="leading-[25px] text-[18px] text-[#303030] font-[500] my-5">
                      {data?.testimonialDescription}
                    </p>
                    <p className="text-[#303030] font-semibold text-[18px] leading-[31px]">
                      {data?.testimonialName}
                    </p>
                    <p className="text-[#303030] font-semibold text-[16px] leading-[31px]">
                      {data?.testimonialDesignation}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
