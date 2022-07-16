import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductPhotography() {
  const [images, setImages] = useState<any>();
  const [currentImage, setCurrentImage] = useState<number>(3);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<any>(1);

  const handleClick = () => {
    setCurrentImage(currentImage + 3);
  };

  useEffect(() => {
    setImages(
      Array.from(Array(currentImage).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`,
      }))
    );
  }, [currentImage]);
  return (
    <>
      <div>
        <div className="max-w-[1307px] m-auto py-[90px]">
          <div>
            <h2 className="sectionTitle">Product photography </h2>
            <p className="sectionDescription22-30 my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum <br /> has been the industry's standard
              dummy text ever since the 1500s
            </p>
          </div>

          <div className="mt-14">
            <div className="grid grid-cols-3 gap-8">
              {images?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="relative w-full h-full rounded-[5px]"
                  onClick={() => setIsOpen(true)}
                >
                  <Image
                    src={item.url}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                    className="rounded-[5px]"
                  />

                </div>
              ))}
            </div>
          </div>

          <div className="mt-10" onClick={() => handleClick()}>
            <p className="flex items-center justify-center content-center text-center text-[24px] leading-[28px] font-bold hover:cursor-pointer">
              See More{" "}
              <span>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 13.125L17.5 21.875L26.25 13.125"
                    stroke="#090D48"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
