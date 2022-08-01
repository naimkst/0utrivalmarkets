import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Seller01 from "../../public/assets/images/service/seller01.png";
import Seller02 from "../../public/assets/images/service/seller02.png";
import Seller03 from "../../public/assets/images/service/seller03.png";
import Seller04 from "../../public/assets/images/service/seller04.png";
import Seller05 from "../../public/assets/images/service/seller05.png";
import Seller06 from "../../public/assets/images/service/seller06.png";
import Seller07 from "../../public/assets/images/service/seller07.png";
import Seller08 from "../../public/assets/images/service/seller08.png";
import Seller09 from "../../public/assets/images/service/seller09.png";

export default function AmazonSeller() {
  return (
    <>
      <div className="bg-[#FAFAFA] bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-6 justify-between">
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold">
                  Amazon seller?
                </h2>
                <p className="sectionDescription22-30">
                  Here is a brief breakdown of the services we offer
                  specifically geared towards amazon ecommerce sellers.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="sectionTitle35-35 mb-4">Account management</h2>
                <p className="sectionDescription22-30">
                  With a dedicated team for account management, we can take
                  control of your Amazon account to monitor sales productively.
                  See where your profit lies, and find areas that can use
                  improvement. Let us take care care of the everyday mundane
                  tasks while you strap up to grow your business!
                </p>
              </div>

              <div className="mb-12">
                <h2 className="sectionTitle35-35 mb-4">Services we offer</h2>
                <ul>
                  <li className="sectionDescription22-30 mb-2">
                    Monitor FBA/FBM stock
                  </li>
                  <li className="sectionDescription22-30 mb-2">
                    Profit monitoring
                  </li>
                  <li className="sectionDescription22-30 mb-2">
                    Feedback/Review Request/Removal
                  </li>
                  <li className="sectionDescription22-30 mb-2">
                    Amazon Seller Account errors/ monitoring case log
                  </li>
                  <li className="sectionDescription22-30 mb-2">
                    Uploading inventory
                  </li>
                  <li className="sectionDescription22-30 mb-2">
                    Monitor returns
                  </li>
                  <li className="sectionDescription22-30 mb-2">
                    Monthly breakdown of Amazon payouts
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller01} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-10 justify-between">
            <div
              className="relative"
              data-aos="slide-right"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller02} />
            </div>
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold mb-2">
                  Brand store Page setup
                </h2>
                <p className="sectionDescription22-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-6 justify-between">
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold">
                  A+/ EBC content
                </h2>
                <p className="sectionDescription22-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller03} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-10 justify-between">
            <div
              className="relative"
              data-aos="slide-right"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller04} />
            </div>
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold mb-2">
                  Product content writing
                </h2>
                <p className="sectionDescription22-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-6 justify-between">
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold">
                  Infographic and graphic design
                </h2>
                <p className="sectionDescription22-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller05} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-10 justify-between">
            <div
              className="relative"
              data-aos="slide-right"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller06} />
            </div>
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold mb-2">
                  Product photography
                </h2>
                <p className="sectionDescription22-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-6 justify-between">
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold">
                  Product videography
                </h2>
                <p className="sectionDescription22-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller07} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-10 justify-between">
            <div
              className="relative"
              data-aos="slide-right"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller08} />
            </div>
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold mb-2">
                  PPC and campaign setup
                </h2>
                <p className="sectionDescription22-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] bg-[url('/assets/images/service/dot-bg.png')] bg-cover py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-2 items-center gap-6 justify-between">
            <div>
              <div className="mb-12">
                <h2 className="text-[50px] leading-[76px] font-bold">
                  Brand registry set up
                </h2>
                <p className="sectionDescription22-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller09} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
