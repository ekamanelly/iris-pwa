import Image from "next/image";
import { Button } from "../form";
import discordImage from "../../assets/image/discord.svg";
import igImage from "../../assets/image/ig.png";
import twitterImage from "../../assets/image/twitter.png";
import siteImage from "../../assets/image/site.png";
import { FeaturesBoard } from "./FeatureBoard";
const featureLinks = [
  {
    text: "Lorem ipsum.com",
    extraStyle: "text-iris-red",
    src: siteImage,
  },
  {
    text: "@Lorem ipsum",
    extraStyle: "text-iris-red",
    src: discordImage,
  }, {
    text: "@Lorem ipsum.com",
    extraStyle: "text-iris-red",
    src: igImage,
  }, {
    text: "@Lorem ipsum.com",
    extraStyle: "text-white",
    src: twitterImage,
  },
];
export function FeaturesLeftSection() {
  return (
    <FeaturesBoard>
      <div className="max-w-[471px] pb-[53px]  mt-[23px]">
        <div className="lg:mb-[42px] sm:mb-[40px] lg:h-[109px] sm:h-[149px] h-[156px] mb-[25px]">
          <p className=" text-[14px] font-normal leading-[22px]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1   gap-y-[20px] h-[68px]">
          {featureLinks.map((feature) => (
            <Button text={feature.text} extraStyle={feature.extraStyle}>
              <Image src={feature.src} layout="responsive" />
            </Button>
          ))}
        </div>
      </div>
    </FeaturesBoard>
  );
}
