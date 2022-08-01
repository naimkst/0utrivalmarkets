import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className=" bg-[#FAFAFA]">
        <div className="max-w-[1307px] m-auto py-[90px]">
          <div className="w-[80%] m-auto ">
            <div>
              <h2 className="text-[36px] font-bold ">Get In Touch</h2>
              <p className="sectionDescription22-30">
                Dis sed tortor, viverra egestas auctor nulla blandit nec nunc.
                Id donec rhoncus, non ipsum blandit. Tempor aliquam turpis
                pellentesque habitant fringilla sapien pulvinar orci. Quis
                elementum pharetra.
              </p>
            </div>
            <div className="mt-10">
              <form action="">
                <div className="my-10">
                  <label
                    htmlFor=""
                    className="w-full flex font-bold text-[20px] mb-3 bg-[#FAFAFA]"
                  >
                    Name
                  </label>
                  <input
                    className="w-full h-12 border-b-[1px] border-[#303030] bg-[#FAFAFA] focus:outline-none"
                    type="text"
                    placeholder="Write your name.."
                  />
                </div>

                <div className="my-10">
                  <label
                    htmlFor=""
                    className="w-full flex font-bold text-[20px] mb-3"
                  >
                    Email
                  </label>
                  <input
                    className="w-full h-12 border-b-[1px] border-[#303030] focus:outline-none bg-[#FAFAFA]"
                    type="email"
                    placeholder="Write your email.."
                  />
                </div>

                <div className="my-10">
                  <label
                    htmlFor=""
                    className="w-full flex font-bold text-[20px] mb-3"
                  >
                    Subject
                  </label>
                  <select
                    className="w-full h-12 border-b-[1px] border-[#303030] focus:outline-none bg-[#FAFAFA]"
                    placeholder="Write your subject.."
                  >
                    <option selected>Choose a Subject</option>
                    <option value="US">Subject One</option>
                    <option value="CA">Subject Two</option>
                    <option value="FR">Subject Three</option>
                    <option value="DE">Subject Four</option>
                  </select>
                </div>

                <div className="my-10">
                  <label
                    htmlFor=""
                    className="w-full flex font-bold text-[20px] mb-3"
                  >
                    Tell Us More
                  </label>
                  <textarea
                    className="w-full border-[1px] rounded-[5px] border-[#303030] focus:outline-none bg-[#FAFAFA]"
                    name=""
                    id=""
                    cols={10}
                    rows={10}
                  ></textarea>
                </div>

                <div className="">
                  <button className="bg-gradient-to-t from-[#E8505B] to-[#FC6E36] py-3 px-20 text-white font-bold text-[24px] rounded-[3px]">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
