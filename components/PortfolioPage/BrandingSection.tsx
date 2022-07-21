import React, { useEffect, useState } from "react";
import Image from "next/image";
import "react-image-lightbox/style.css";
// @ts-ignore
import ImgsViewer from "react-images-viewer";

export default function Branding() {
  const [IMG, setImages] = useState<any>([]);
  const [currentImage, setCurrentImage] = useState<number>(3);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<any>(0);
  const [toggler, setToggler] = useState(false);

  const handleClick = () => {
    setCurrentImage(currentImage + 3);
  };

  const onClickPrev = () => {
    setPhotoIndex(photoIndex - 1);
  };
  const onClickNext = () => {
    setPhotoIndex(photoIndex + 1);
  };

  useEffect(() => {
    setImages(
      Array.from(Array(currentImage).keys()).map((id) => ({
        src: `https://picsum.photos/1000?random=${id}`,
      }))
    );
  }, [currentImage]);
  return (
    <>
      <div>
        <div className="max-w-[1307px] m-auto py-[90px]">
          <div>
            <h2 className="sectionTitle">Branding</h2>
            <p className="sectionDescription22-30 my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum <br /> has been the industrys standard dummy
              text ever since the 1500s
            </p>
          </div>

          <div className="mt-14">
            <div className="grid grid-cols-3 gap-8">
              {IMG?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="relative w-full h-full rounded-[5px] hover:cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  <Image
                    src={item.src}
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

          <ImgsViewer
            imgs={IMG}
            currImg={photoIndex}
            isOpen={isOpen}
            showThumbnails={true}
            onClickPrev={() => onClickPrev()}
            onClickNext={() => onClickNext()}
            onClose={() => setIsOpen(false)}
            onClickThumbnail={(index: any) => setPhotoIndex(index)}
          />

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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
