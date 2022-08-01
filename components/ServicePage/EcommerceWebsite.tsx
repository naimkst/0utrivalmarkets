import Image from "next/image";
import Link from "next/link";
import React from "react";
import Seller011 from "../../public/assets/images/service/seller11.png";

export default function EcommerceWebsite() {
  return (
    <>
      <div className="py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 gap-6 justify-between items-center">
            <div
              className="relative"
              data-aos="slide-right"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller011} />
            </div>
            <div>
              <h2 className="font-bold text-[50px] leading-[55px] text-[#090D48] mb-3">
                Ecommerce Website
              </h2>
              <h5 className="!font-semibold sectionTitle35-35 mb-3 ">
                Are you ready to take your store online? <br />
                Let us build your next website
              </h5>
              <p className="text-[22px] leading-[35px] text-[#303030]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets con
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/">
              <button className="buttonBg font-bold text-[24px] text-white py-[15px] px-[45px] rounded-[7px] mt-8">
                See our recent projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
