import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Blog01 from "../../public/assets/images/blog/01.png";
import Blog02 from "../../public/assets/images/blog/02.png";

const blogs = [
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
  {
    id: 1,
    title: "Fusce scelerisque ex dignissim semper",
    author: "Jhon Abraham",
    date: "20th Jan 2020",
    image: Blog02,
  },
];

export default function Content() {
  const [blog, setBlog]: any = React.useState([]);
  const [count, setCount]: any = React.useState(5);

  const handleClick = () => { 
    setCount(count + 2);
  }

  React.useEffect(() => { 
    setBlog(blogs);
  }, [])
  return (
    <>
      <div className="py-[90px]">
        <div className="max-w-[1307px] m-auto items-start">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4 text-center">
              <div>
                <Image src={Blog01} />
              </div>
              <div>
                <h2 className="text-[45px] font-medium text-left my-5">
                  Pellentesque volutpat, neque in faucibus placerat mauris.
                </h2>
                <div>
                  <p className="text-[22px] leading-[35px] text-left mt-5">
                    Maecenas ex risus, hendrerit a tempus semper, dictum a diam.
                    Nunc ultricies velit tortor, sed dictum risus semper eget.
                    Praesent sit rhoncus velit. Vivamus posuere arcu at libero
                    auctor iaculis. Integer molestie pulvinar posuere.
                    Vestibulum semper me dapibus faucibus. Morbi feugiat, velit
                    sit amet vulputate aliquet, est nibh vulputate felis, quis
                    viverra augue tellus non magna. Curabitur eu tincidunt leo,
                    at variusl. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Phasellus
                    imperdiet nibh eros. Duis fermentum dapibus lobortis. Ut a
                    ante nisi. Integer venenatis, nisl non luctus rutrum, ipsum
                    tellus dapibus justo, in tempus lorem lacus in erat.{" "}
                  </p>

                  <p className="text-[22px] leading-[35px] text-left mt-5">
                    Maecenas ex risus, hendrerit a tempus semper, dictum a diam.
                    Nunc ultricies velit tortor, sed dictum risus semper eget.
                    Praesent sit rhoncus velit. Vivamus posuere arcu at libero
                    auctor iaculis. Integer molestie pulvinar posuere.
                    Vestibulum semper me dapibus faucibus. Morbi feugiat, velit
                    sit amet vulputate aliquet, est nibh vulputate felis, quis
                    viverra augue tellus non magna. Curabitur eu tincidunt leo,
                    at variusl. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Phasellus
                    imperdiet nibh eros. Duis fermentum dapibus lobortis. Ut a
                    ante nisi. Integer venenatis, nisl non luctus rutrum, ipsum
                    tellus dapibus justo, in tempus lorem lacus in erat.{" "}
                  </p>

                  <p className="text-[22px] leading-[35px] text-left mt-5">
                    Maecenas ex risus, hendrerit a tempus semper, dictum a diam.
                    Nunc ultricies velit tortor, sed dictum risus semper eget.
                    Praesent sit rhoncus velit. Vivamus posuere arcu at libero
                    auctor iaculis. Integer molestie pulvinar posuere.
                    Vestibulum semper me dapibus faucibus. Morbi feugiat, velit
                    sit amet vulputate aliquet, est nibh vulputate felis, quis
                    viverra augue tellus non magna. Curabitur eu tincidunt leo,
                    at variusl. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Phasellus
                    imperdiet nibh eros. Duis fermentum dapibus lobortis. Ut a
                    ante nisi. Integer venenatis, nisl non luctus rutrum, ipsum
                    tellus dapibus justo, in tempus lorem lacus in erat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <h2 className="text-[35px] font-bold">Most Recent</h2>
              </div>
              <div className="mt-8">
                {blog
                  ?.filter((item: any, idx: any) => idx < count)
                  .map((book: any, index: any) => (
                    <Link href={`/blog/${index}`}>
                      <div className="flex items-start hover:cursor-pointer mb-8">
                        <div className="mr-4">
                          <Image src={Blog02} />
                        </div>
                        <div>
                          <h4 className="text-[22px] font-bold leading-[28px] text-[#1D2238]">
                            Fusce scelerisque ex dignissim semper
                          </h4>
                          <p className="text-[#1D2238] text-[16px]">
                            - Jhon Abraham
                          </p>
                          <span className="text-[13px] text-[#1D2238]">
                            25 Aug 2022
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}

                <div className="mt-10" onClick={() => handleClick()}>
                  <p className="flex items-center justify-center content-center text-center text-[20px] leading-[28px] font-bold hover:cursor-pointer">
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
          </div>
        </div>
      </div>
    </>
  );
}
