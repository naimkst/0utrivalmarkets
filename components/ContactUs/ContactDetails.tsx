import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiAlarmClock } from "react-icons/gi";

export default function ContactDetails() {
  return (
    <>
      <div className="py-[90px]">
        <div className="max-w-[1307px] m-auto">
          <div className="grid grid-cols-3 gap-4 items-center content-center justify-between">
            <div className="text-center">
              <div>
                <p className="flex items-center justify-center text-[20px] font-bold text-center">
                  <span className="mr-3">
                    <FaLocationArrow size={40} />
                  </span>{" "}
                  Main Office
                </p>
              </div>
              <p className="text-[18px]">
                Email: <span>info@ayova.com</span>
              </p>
            </div>

            <div className="text-center">
              <div>
                <p className="flex items-center justify-center text-[20px] font-bold text-center">
                  <span className="mr-3">
                    <RiCustomerService2Fill size={40} />
                  </span>{" "}
                  Customer Service
                </p>
              </div>
              <p className="text-[18px]">
                Phon: <span>510-505-6055</span>
              </p>
            </div>

            <div className="text-center">
              <div>
                <p className="flex items-center justify-center text-[20px] font-bold">
                  <span className="mr-3">
                    <GiAlarmClock size={40} />
                  </span>{" "}
                  Opening Hours
                </p>
              </div>
              <p className="text-[18px]">Mon – Fri 9am / 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
