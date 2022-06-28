import Image from "next/image";
import React from "react";
import logo from "../../public/assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const mobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="container max-w-[1307px] m-auto">
        <div className="flex items-center justify-between pt-[8px] px-4">
          <div className="hidden md:block">
            <Image src={logo} width={173} height={131} />
          </div>
          <div className="md:hidden">
            <Image src={logo} width={85} height={60} />
          </div>
          <div className="hidden md:block">
            <ul className="flex justify-between items-center gap-16 md:gap-10">
              <li>
                <a
                  className="text-[24px] font-semibold hover:text-[#FF8B2D]"
                  href=""
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-[24px] font-semibold hover:text-[#FF8B2D]"
                  href=""
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-[24px] font-semibold hover:text-[#FF8B2D]"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-[24px] font-semibold hover:text-[#FF8B2D]"
                  href=""
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <button className="buttonBg text-white py-[20px] px-[46px] rounded-[7px] text-[24px] font-bold bg-[linear-gradient(276.17deg, #F45356 0%, #FF9127 104.34%)] hidden md:block">
              Contact Us
            </button>
            <div onClick={() => mobileMenu()} className="md:hidden">
              <HiMenuAlt3 size={40} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="relative">
          <div className="md:hidden bg-black z-50 absolute w-full p-7">
            <ul className="w-full">
              <li>
                <a
                  className="text-[24px] leading-[40px] text-white font-semibold"
                  href=""
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-[24px] leading-[40px] text-white font-semibold"
                  href=""
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-[24px] leading-[40px] text-white font-semibold"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-[24px] leading-[40px] text-white font-semibold"
                  href=""
                >
                  Blog
                </a>
              </li>

              <button className="buttonBg text-white py-[10px] px-[30px] rounded-[7px] text-[16px] mt-5 font-bold">
                Contact Us
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
