import Image from "next/image";
import Link from "next/link";
import React from "react";
import WeOffer01 from "../../public/assets/images/weoffer01.png";
import WeOffer02 from "../../public/assets/images/weoffer02.png";

export default function WeOffer() {
  return (
    <>
      <div className="container max-w-[1307px] m-auto py-[90px]">
        <div className="grid grid-cols-2 gap-10 items-center justify-between mb-10">
          <div>
            <h2 className="text-[42px] leading-[45px] font-bold text-[#090D48] mb-5">
              We also offer a wide variety of marketing solutions for ecommerce
              sellers
            </h2>
            <p className="text-[#090D48] leading-[35px] text-[22px]">
              We specialize in building e-commerce websites on platforms like
              Shopify, or WordPress (with woocommerce) Having an optimized
              website is key to increasing your online presence in 2022. A
              website with a good user-friendly flow Will help you achieve great
              conversions on your website Outrival markets has all it takes to
              achieve just this!
            </p>
          </div>
          <div>
            <Image src={WeOffer01} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 items-center justify-between">
          <div>
            <Image src={WeOffer02} />
          </div>
          <div>
            <h2 className="text-[42px] leading-[45px] font-bold text-[#090D48] mb-5">
              Building a brand?
            </h2>
            <p className="text-[#090D48] leading-[35px] text-[22px]">
              Let us design some eye popping branding content that will tell a
              story from miles away! Think logos, brochures, business cards,
              presentations, catalogs, product mockups, packaging.
            </p>
          </div>
        </div>

        <div className="mt-20 items-center text-center">
          <Link className="buttonBg text-[24px] font-bold leading-[27px] text-white text-center py-[20px] px-[50px] rounded-[7px]" href="/">Find More</Link>
        </div>
      </div>
    </>
  );
}
