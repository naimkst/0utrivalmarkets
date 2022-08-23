import Image from "next/image";
import React, { useEffect, useState } from "react";
import projectIdea from "../../public/assets/images/project-idea.png";
import projectDot from "../../public/assets/images/project-dot.png";
import Link from "next/link";

export default function ProjectIdea({ projectData }: any) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(projectData[0]);
  }, []);
  return (
    <>
      <div className="bg-[#fafafa] relative py-[60px] md:px-0 px-5">
        <div className="absolute left-0 top-0">
          {/* <Image src={secrionTop}/> */}
        </div>
        <div className="container max-w-[1307px] m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
            <div className="relative">
              <h2 className="text-[42px] leading-[56px] font-[600] text-[#090D48] mb-2">
                {data?.projectTitle}
              </h2>
              <p className="text-[22px] text-[#303030] leading-[27px] my-7">
                {data?.projectDescription}
              </p>
              <div className="relative z-10 md:mb-0 mb-10">
                <Link href={data?.projectUrLink || "/"}>
                  <button className="buttonBg font-bold text-[24px] text-white py-[25px] px-[45px] rounded-[7px] mt-8">
                    {data?.projectUrlText}
                  </button>
                </Link>
              </div>
              <div className="absolute -left-[80px] -bottom-[130px] z-0">
                <Image src={projectDot} />
              </div>
            </div>
            <div
              data-aos="slide-left"
              data-aos-offset="200"
              className="imageFull"
            >
              <Image
                className="imgHover"
                loader={() =>
                  `${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}`
                }
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}`}
                layout="fill"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
