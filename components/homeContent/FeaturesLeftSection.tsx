import Image from "next/image";
import { Button } from "../form";
import { Accordion } from "./Accordion";
import arrowImage from "../../assets/image/arrow.png";
import fourCircleImage from "../../assets/image/fourCircle.png";
import { AccordionHeader } from "./AccordionHeader";
import { useState } from "react";
import {v4 as UUID} from 'uuid'

interface IFeaturesLeftSection {
  links:any[]
}

export function FeaturesLeftSection({links}:IFeaturesLeftSection) {
  const [open, setOpen] = useState(false);
  return (
    <Accordion >
       <AccordionHeader
        LeadingImage={<Image src={fourCircleImage} layout="responsive" />}
        Title={<p className="font-extrabold text-base">Lorem</p>}
        TrailingImage={<Image src={arrowImage} layout="responsive" />}
      />
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
        <div className="grid grid-cols-2   gap-y-[20px] h-[68px]">
          {links.map((feature) => (
            <Button text={feature.text} extraStyle={feature.extraStyle} key={UUID()}>
              <Image src={feature.src} layout="responsive" />
            </Button>
          ))}
        </div>
      </div>
    </Accordion>
  );
}
