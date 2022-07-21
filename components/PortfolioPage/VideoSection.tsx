import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Player } from "video-react";

export default function VideoSection() {
  return (
    <>
      <div>
        <div className="max-w-[1307px] m-auto py-[90px]">
          <div>
            <h2 className="sectionTitle">Product videography </h2>
            <p className="sectionDescription22-30 my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum <br /> has been the industrys standard dummy
              text ever since the 1500s
            </p>
          </div>

          <div>
            <div>
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination, A11y, Mousewheel]}
                pagination={{ clickable: true }}
                // mousewheel={true}
                // modules={[Navigation]}
                className="mySwiperProduct"
                autoHeight={true}
                freeMode={true}
                breakpoints={{
                  375: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                  },
                  425: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                  },
                }}
                spaceBetween={100}
                slidesPerView={1}
              >
                <SwiperSlide className="py-[40px] md:py-[90px] overflow-x-hidden overflow-y-hidden">
                  <div className="">
                    <div>
                      <div>
                        <h2 className="text-[35px] text-[#090D48] font-bold mb-5">
                          My Secret for Dark & Moody Product Videos
                        </h2>

                        <iframe
                          width="100%"
                          height="500px"
                          src="https://www.youtube.com/embed/xcJtL7QggTI"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                        <h3 className="text-[35px] leading-[35px] font-bold  mt-10">
                          Product Description
                        </h3>
                        <p className="text-[20px] leading-[30px] text-[#303030] mt-4">
                          Amazon Essentials is focused on creating affordable,
                          high-quality, and long-lasting everyday clothing you
                          can rely on. Our line of womens apparel includes
                          cashmere sweaters, fleece and down jackets, and more,
                          including plus-size options. Our consistent sizing
                          takes the guesswork out of shopping, and each piece is
                          put to the test to maintain the highest standards in
                          quality and comfort.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="py-[40px] md:py-[90px] overflow-x-hidden overflow-y-hidden">
                  <div className="">
                    <div>
                      <div>
                        <h2 className="text-[35px] text-[#090D48] font-bold mb-5">
                          My Secret for Dark & Moody Product Videos
                        </h2>

                        <iframe
                          width="100%"
                          height="500px"
                          src="https://www.youtube.com/embed/xcJtL7QggTI"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                        <h3 className="text-[35px] leading-[35px] font-bold  mt-10">
                          Product Description
                        </h3>
                        <p className="text-[20px] leading-[30px] text-[#303030] mt-4">
                          Amazon Essentials is focused on creating affordable,
                          high-quality, and long-lasting everyday clothing you
                          can rely on. Our line of womens apparel includes
                          cashmere sweaters, fleece and down jackets, and more,
                          including plus-size options. Our consistent sizing
                          takes the guesswork out of shopping, and each piece is
                          put to the test to maintain the highest standards in
                          quality and comfort.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="py-[40px] md:py-[90px] overflow-x-hidden overflow-y-hidden">
                  <div className="">
                    <div>
                      <div>
                        <h2 className="text-[35px] text-[#090D48] font-bold mb-5">
                          My Secret for Dark & Moody Product Videos
                        </h2>

                        <iframe
                          width="100%"
                          height="500px"
                          src="https://www.youtube.com/embed/xcJtL7QggTI"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                        <h3 className="text-[35px] leading-[35px] font-bold  mt-10">
                          Product Description
                        </h3>
                        <p className="text-[20px] leading-[30px] text-[#303030] mt-4">
                          Amazon Essentials is focused on creating affordable,
                          high-quality, and long-lasting everyday clothing you
                          can rely on. Our line of womens apparel includes
                          cashmere sweaters, fleece and down jackets, and more,
                          including plus-size options. Our consistent sizing
                          takes the guesswork out of shopping, and each piece is
                          put to the test to maintain the highest standards in
                          quality and comfort.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
