import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import "swiper/css";
import Testimonial from "../../public/assets/images/mind-left.png";
import Image from "next/image";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductSlider from "./ProductSlider";
import Link from "next/link";
import ProductDescription from "./ProductDescription";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function ProductSectionSlider() {
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setShow(!show);
    console.log('click');
  }
  return (
    <>
      <div className="">
        <div className="max-w-[1307px] m-auto pb-24">
          <div className="relative">
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
                  <div className="bg-[#DBDBDB] py-[60px] px-[60px]">
                    <div>
                      <div>
                        <h2 className="text-[38px] text-[#090D48] font-bold">
                          Amazon Listings{" "}
                        </h2>
                        <p className="text-[20px] leading-[30px] text-[#303030]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum <br /> has been the
                          industrys standard dummy text ever since the 1500s
                        </p>
                      </div>

                      <div className="mt-10">
                        <div className="grid grid-cols-2 gap-4 items-center">
                          <div>
                            <ProductSlider />
                          </div>
                          <div>
                            <h2 className="text-[35px] font-bold text-[#090D48]">
                              McGuire-Nicholas 6-Piece Heavy Duty Suspension Rig
                              With Suspenders{" "}
                            </h2>
                            <div className="mt-5 mb-5">
                              <ul>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>

                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="flex items-center ">
                                <p className="text-[24px] text-[#303030] font-semibold mr-3">
                                  Color:{" "}
                                </p>
                                <div className="flex items-center gap-4">
                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#000000] hover:cursor-pointer"></div>
                                  </Link>

                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#E8E8E8] hover:cursor-pointer"></div>
                                  </Link>

                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#FF3D3D] hover:cursor-pointer"></div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div 
                      className="mt-10"
                      >
                        <ProductDescription />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="py-[40px] md:py-[90px] overflow-x-hidden overflow-y-hidden">
                  <div className="bg-[#DBDBDB] py-[60px] px-[60px]">
                    <div>
                      <div>
                        <h2 className="text-[38px] text-[#090D48] font-bold">
                          Amazon Listings{" "}
                        </h2>
                        <p className="text-[20px] leading-[30px] text-[#303030]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum <br /> has been the
                          industrys standard dummy text ever since the 1500s
                        </p>
                      </div>

                      <div className="mt-10">
                        <div className="grid grid-cols-2 gap-4 items-center">
                          <div>
                            <ProductSlider />
                          </div>
                          <div>
                            <h2 className="text-[35px] font-bold text-[#090D48]">
                              McGuire-Nicholas 6-Piece Heavy Duty Suspension Rig
                              With Suspenders{" "}
                            </h2>
                            <div className="mt-5 mb-5">
                              <ul>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>

                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="flex items-center ">
                                <p className="text-[24px] text-[#303030] font-semibold mr-3">
                                  Color:{" "}
                                </p>
                                <div className="flex items-center gap-4">
                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#000000] hover:cursor-pointer"></div>
                                  </Link>

                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#E8E8E8] hover:cursor-pointer"></div>
                                  </Link>

                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#FF3D3D] hover:cursor-pointer"></div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div 
                      className="mt-10"
                      >
                        <ProductDescription />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="py-[40px] md:py-[90px] overflow-x-hidden overflow-y-hidden">
                  <div className="bg-[#DBDBDB] py-[60px] px-[60px]">
                    <div>
                      <div>
                        <h2 className="text-[38px] text-[#090D48] font-bold">
                          Amazon Listings{" "}
                        </h2>
                        <p className="text-[20px] leading-[30px] text-[#303030]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum <br /> has been the
                          industrys standard dummy text ever since the 1500s
                        </p>
                      </div>

                      <div className="mt-10">
                        <div className="grid grid-cols-2 gap-4 items-center">
                          <div>
                            <ProductSlider />
                          </div>
                          <div>
                            <h2 className="text-[35px] font-bold text-[#090D48]">
                              McGuire-Nicholas 6-Piece Heavy Duty Suspension Rig
                              With Suspenders{" "}
                            </h2>
                            <div className="mt-5 mb-5">
                              <ul>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>

                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="flex items-center mb-3">
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.32 14.88L2.18667 13.28C2.04444 13.1733 1.97333 13.0489 1.97333 12.9067C1.97333 12.7644 2.02667 12.64 2.13333 12.5333L5.70667 8.42667L0.373333 7.25333C0.16 7.21778 0.0355556 7.14667 0 7.04C0 6.89778 0.0177778 6.75556 0.0533334 6.61333L0.906667 4.16C0.977778 3.98222 1.06667 3.87556 1.17333 3.84C1.31556 3.76889 1.45778 3.76889 1.6 3.84L6.50667 5.92L6.02667 0.533333C5.99111 0.355555 6.02667 0.231111 6.13333 0.160001C6.24 0.0533337 6.36444 0 6.50667 0H9.12C9.26222 0 9.38667 0.0533337 9.49333 0.160001C9.6 0.231111 9.63556 0.355555 9.6 0.533333L9.12 5.97334L14.08 3.84C14.2222 3.76889 14.3644 3.76889 14.5067 3.84C14.6489 3.87556 14.7378 3.98222 14.7733 4.16L15.6267 6.61333C15.6978 6.82667 15.6978 6.98667 15.6267 7.09333C15.5911 7.16445 15.4844 7.21778 15.3067 7.25333L9.92 8.48L13.4933 12.5333C13.6356 12.6756 13.6889 12.8178 13.6533 12.96C13.6178 13.0667 13.5289 13.1733 13.3867 13.28L11.2533 14.8267C10.9689 15.04 10.7378 14.9867 10.56 14.6667L7.78667 10.0267L5.01333 14.72C4.90667 14.8622 4.8 14.9511 4.69333 14.9867C4.58667 15.0222 4.46222 14.9867 4.32 14.88Z"
                                        fill="#303030"
                                      />
                                    </svg>
                                    <span className="text-[22px] leading-[36px] font-semibold ml-3">
                                      Adjuestabe construction belt system{" "}
                                    </span>
                                  </p>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <div className="flex items-center ">
                                <p className="text-[24px] text-[#303030] font-semibold mr-3">
                                  Color:{" "}
                                </p>
                                <div className="flex items-center gap-4">
                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#000000] hover:cursor-pointer"></div>
                                  </Link>

                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#E8E8E8] hover:cursor-pointer"></div>
                                  </Link>

                                  <Link href="#">
                                    <div className="h-[46px] w-[46px] rounded-full bg-[#FF3D3D] hover:cursor-pointer"></div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div 
                      className="mt-10"
                      >
                        <ProductDescription />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
              </Swiper>
            </div>

            {/* <div className="bottom-28 items-center content-center z-50 w-full hover:cursor-pointer" onClick={()=> handleClick()}>
              <p className="flex items-center justify-center text-[24px] font-medium content-center">
                See full listing{" "}
                <span className="ml-2">
                   <IoIosArrowUp />
                  <IoIosArrowDown />
                </span>
              </p>
            </div>  */}
          </div>
        </div>
      </div>
    </>
  );
}
