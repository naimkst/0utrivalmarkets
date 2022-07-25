import Image from "next/image";
import React from "react";
import HayTheres from "../../public/assets/images/about/moreabout.png";

export default function MoreAboutUs() {
  return (
    <>
      <div className="py-[90px]">
        <div className="container max-w-[1307px] m-auto grid grid-cols-2 items-center gap-6 justify-between">
          <div>
            <h2 className="sectionTitle mb-5">Hay There</h2>
            <p className="sectionDescription mb-3">
              Standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              con
            </p>

            <p className="sectionDescription">
              Standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries,
            </p>
          </div>
          <div>
            <Image src={HayTheres} />
          </div>
        </div>
      </div>
    </>
  );
}
