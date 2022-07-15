import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PrdImage from "../../public/assets/images/prd-details.png"

export default function ProductDescription() {
  return (
    <>
      <Tabs className="flex justify-between gap-8">
        <TabList>
          <Tab>Details of Project</Tab>
          <Tab>1. Introductionrdict</Tab>
          <Tab>2. Unboxing, 360-degree spin, design</Tab>
          <Tab>3. Display, battery life, connectivity</Tab>
          <Tab>4. Software</Tab>
          <Tab>5. Performance</Tab>
          <Tab>6. Telephony, loudspeaker, notable apps</Tab>
          <Tab>7. Multimedia, audio quality</Tab>
          <Tab>8. Camera features, image and video quality</Tab>
          <Tab>9. Final thoughts, key test findings, alternatives.</Tab>
        </TabList>

        <TabPanel>
          <div className="">
            <p>Aenean venenatis elementum erat vel iaculis. Aliquam porttitor lacinia est, sed vulputate sapien tempor id. Vestibulum ante ipsum pri faucibus orci luctus et ultrices posuere cubilia curae; Fusce quis laoreet mauris. Quisque nisl risus, rhoncus eu efficitur consectetu vulput Pellentesque posuere ullamcorper quam quis scelerisque. Aenean vel dignissim nunc. Aliquam fringilla malesuada ipsum. Integer ut eleifend dui, id rhoncus metus. Ut eu tempus libero. Donec vitae quam convallis, sodales leo ultricies, vestibulum ante. Nunc sit amet nibh ligula. In eu sollicitudin orci.</p>
            <Image src={PrdImage}/>
            <Image src={PrdImage}/>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </>
  );
}
