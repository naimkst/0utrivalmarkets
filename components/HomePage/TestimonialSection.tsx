import Image from "next/image";
import React from "react";
import Testimonial from "../../public/assets/images/testimonial.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";

export default function TestimonialSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div className="pb-[50px] md:py-[90px] px-5 md:px-0">
        <div className="container max-w-[1307px] m-auto">
          <div>
            <p className="slugTitle">Testimonial:</p>
            <h2 className="sectionTitle">What our clients say about us…</h2>
            <p className="sectionDescription mt-4">
              There are many variations of passages of Lorem Ipsum <br />{" "}
              available, but the majority.
            </p>
          </div>

          <div className="content-center overflow-x-hidden overflow-y-hidden">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
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
              <SwiperSlide className="py-[40px] md:py-[90px]">
                <div className="bg-[#FAFAFA] rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer ">
                  <Image
                    src={Testimonial}
                    width={100}
                    height={100}
                    className="rounded-[7px] object-cover"
                  />
                  <p className="leading-[30px] text-[22px] text-[#303030] font-[500] my-5">
                    Integer ac venenatis leo. Pellenutesque tincidunt lacus
                    sagittis ut magna tincidunt, at luctus est aliquam. Integer
                    ac venenatis leo.{" "}
                  </p>
                  <p className="text-[#303030] font-semibold text-[18px] leading-[31px]">
                    Alexander Brown
                  </p>
                  <p className="text-[#303030] font-semibold text-[16px] leading-[31px]">
                    CEO Of Angle
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="py-[40px] md:py-[90px]">
                <div className="bg-[#FAFAFA] rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer ">
                  <Image
                    src={Testimonial}
                    width={100}
                    height={100}
                    className="rounded-[7px] object-cover"
                  />
                  <p className="leading-[30px] text-[22px] text-[#303030] font-[500] my-5">
                    Integer ac venenatis leo. Pellenutesque tincidunt lacus
                    sagittis ut magna tincidunt, at luctus est aliquam. Integer
                    ac venenatis leo.{" "}
                  </p>
                  <p className="text-[#303030] font-semibold text-[18px] leading-[31px]">
                    Alexander Brown
                  </p>
                  <p className="text-[#303030] font-semibold text-[16px] leading-[31px]">
                    CEO Of Angle
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="py-[40px] md:py-[90px]">
                <div className="bg-[#FAFAFA] rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer ">
                  <Image
                    src={Testimonial}
                    width={100}
                    height={100}
                    className="rounded-[7px] object-cover"
                  />
                  <p className="leading-[30px] text-[22px] text-[#303030] font-[500] my-5">
                    Integer ac venenatis leo. Pellenutesque tincidunt lacus
                    sagittis ut magna tincidunt, at luctus est aliquam. Integer
                    ac venenatis leo.{" "}
                  </p>
                  <p className="text-[#303030] font-semibold text-[18px] leading-[31px]">
                    Alexander Brown
                  </p>
                  <p className="text-[#303030] font-semibold text-[16px] leading-[31px]">
                    CEO Of Angle
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-[40px] md:py-[90px]">
                <div className="bg-[#FAFAFA] rounded-[10px] px-8 py-10 content-center text-center testimonialHover group hover:cursor-pointer ">
                  <Image
                    src={Testimonial}
                    width={100}
                    height={100}
                    className="rounded-[7px] object-cover"
                  />
                  <p className="leading-[30px] text-[22px] text-[#303030] font-[500] my-5">
                    Integer ac venenatis leo. Pellenutesque tincidunt lacus
                    sagittis ut magna tincidunt, at luctus est aliquam. Integer
                    ac venenatis leo.{" "}
                  </p>
                  <p className="text-[#303030] font-semibold text-[18px] leading-[31px]">
                    Alexander Brown
                  </p>
                  <p className="text-[#303030] font-semibold text-[16px] leading-[31px]">
                    CEO Of Angle
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
