import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PrdImage from "../../public/assets/images/prd-details.png";

export default function ProductDescription() {
  return (
    <>
      <Tabs className="grid md:grid-cols-4 grid-cols-1 md:gap-8 gap-0">
        <TabList>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            Details of Project
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            1. Introductionrdict
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            2. Unboxing, 360-degree spin, design
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            3. Display, battery life, connectivity
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            4. Software
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            5. Performance
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            6. Telephony, loudspeaker, notable apps
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            7. Multimedia, audio quality
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            8. Camera features, image and video quality
          </Tab>
          <Tab className="text-[18px] bg-[#F4F4F4] hover:cursor-pointer">
            9. Final thoughts, key test findings, alternatives.
          </Tab>
        </TabList>

        <div className="col-span-3">
          <TabPanel>
            <div className="">
              <p className="text-[22px] leading-[36px] !text-[#090D48]">
                Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
                lacinia est, sed vulputate sapien tempor id. Vestibulum ante
                ipsum pri faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce quis laoreet mauris. Quisque nisl risus, rhoncus eu
                efficitur consectetu vulput Pellentesque posuere ullamcorper
                quam quis scelerisque. Aenean vel dignissim nunc. Aliquam
                fringilla malesuada ipsum. Integer ut eleifend dui, id rhoncus
                metus. Ut eu tempus libero. Donec vitae quam convallis, sodales
                leo ultricies, vestibulum ante. Nunc sit amet nibh ligula. In eu
                sollicitudin orci.
              </p>
              <div className="my-5">
                <Image src={PrdImage} />
              </div>

              <div className="mb-5">
                <Image src={PrdImage} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapis et ultrices posuere cubilia
              curae; Fusce quis laoreet mauris. Quisque nisl risus, rhoncus eu
              efficitur consectetu vulput Pellentesque posuere ullamcorper quam
              quis scelerisque. Aenean vel dignissim nunc. Aliquam fringilla
              malesuada ipsum. Integer ut eleifend dui, id rhoncus metus. Ut eu
              tempus libero. Donec vitae quam convallis, sodales leo ultricies,
              vestibulum ante. Nunc sit amet nibh ligula. In eu sollicitudin
              orci.
            </p>
          </TabPanel>

          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapien tempor id. Vestibulum ante ipsum
              pri faucibus orci luces posuere cubilia curae; Fusce quis laoreet
              mauris. Quisque nisl risus, rhoncus eu efficitur consectetu vulput
              Pellentesque posuere ullamcorper quam quis scelerisque. Aenean vel
              dignissim nunc. Aliquam fringilla malesuada ipsum. Integer ut
              eleifend dui, id rhoncus metus. Ut eu tempus libero. Donec vitae
              quam convallis, sodales leo ultricies, vestibulum ante. Nunc sit
              amet nibh ligula. In eu sollicitudin orci.
            </p>
          </TabPanel>

          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapien teestibulum ante ipsum pri
              faucibus orci luctus et ultrices posuere cubilia curae; Fusce quis
              laoreet mauris. Quisque nisl risus, rhoncus eu efficitur
              consectetu vulput Pellentesque posuere ullamcorper quam quis
              scelerisque. Aenean vel dignissim nunc. Aliquam fringilla
              malesuada ipsum. Integer ut eleifend dui, id rhoncus metus. Ut eu
              tempus libero. Donec vitae quam convallis, sodales leo ultricies,
              vestibulum ante. Nunc sit amet nibh ligula. In eu sollicitudin
              orci.
            </p>
          </TabPanel>

          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapien tempor id. Vestibulum ante ipsum
              pri faucibus orci luctus et ultrices posuere cubilia curae; Fusce
              quis laoreet mauris. Quisque nisl risus, rhoncus eu efficitur
              consectetu vulput rper quam quis scelerisque. Aenean vel dignissim
              nunc. Aliquam fringilla malesuada ipsum. Integer ut eleifend dui,
              id rhoncus metus. Ut eu tempus libero. Donec vitae quam convallis,
              sodales leo ultricies, vestibulum ante. Nunc sit amet nibh ligula.
              In eu sollicitudin orci.
            </p>
          </TabPanel>

          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapien tempor id. Vestibulum ante ipsum
              pri faucibus orci luctus et ultrices posuere cubilia curae; Fusce
              quis laoreet mauris. Quisque nisl risus, rhoncus eu efficitur
              consectetu vulput Pellentesque posuere ullamcorper quam quis
              scelerisque. Aenean vel dignissi convallis, sodales leo ultricies,
              vestibulum ante. Nunc sit amet nibh ligula. In eu sollicitudin
              orci.
            </p>
          </TabPanel>

          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapien tempor id. Vestibulum ante ipsum
              pri faucibus orci luctus et ultrices posuere cubilia curae; Fusce
              quis laoreet mauris. Quisque nisl risus, rhoncus eu efficitur
              consectetu vulput Pellentesque posuere ullamcorper quam quis
              scelerisque. Aenean vel dignissi convallis, sodales leo ultricies,
              vestibulum ante. Nunc sit amet nibh ligula. In eu sollicitudin
              orci.
            </p>
          </TabPanel>

          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapien tempor id. Vestibulum ante ipsum
              pri faucibus orci luctus et ultrices posuere cubilia curae; Fusce
              quis laoreet mauris. Quisque nisl risus, rhoncus eu efficitur
              consectetu vulput Pellentesque posuere ullamcorper quam quis
              scelerisque. Aenean vel dignissi convallis, sodales leo ultricies,
              vestibulum ante. Nunc sit amet nibh ligula. In eu sollicitudin
              orci.
            </p>
          </TabPanel>

          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapien tempor id. Vestibulum ante ipsum
              pri faucibus orci luctus et ultrices posuere cubilia curae; Fusce
              quis laoreet mauris. Quisque nisl risus, rhoncus eu efficitur
              consectetu vulput Pellentesque posuere ullamcorper quam quis
              scelerisque. Aenean vel dignissi convallis, sodales leo ultricies,
              vestibulum ante. Nunc sit amet nibh ligula. In eu sollicitudin
              orci.
            </p>
          </TabPanel>

          <TabPanel>
            <p className="text-[22px] leading-[36px] !text-[#090D48]">
              Aenean venenatis elementum erat vel iaculis. Aliquam porttitor
              lacinia est, sed vulputate sapien tempor id. Vestibulum ante ipsum
              pri faucibus orci luctus et ultrices posuere cubilia curae; Fusce
              quis laoreet mauris. Quisque nisl risus, rhoncus eu efficitur
              consectetu vulput Pellentesque posuere ullamcorper quam quis
              scelerisque. Aenean vel dignissi convallis, sodales leo ultricies,
              vestibulum ante. Nunc sit amet nibh ligula. In eu sollicitudin
              orci.
            </p>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
}
