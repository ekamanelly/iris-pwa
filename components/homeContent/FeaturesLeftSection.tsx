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
  return (
    <Accordion >
       <AccordionHeader
        LeadingImage={<Image src={fourCircleImage} layout="responsive" />}
        Title={<p className="font-extrabold font-[1rem] leading-[1.2rem]">Lorem</p>}
        TrailingImage={<Image src={arrowImage} layout="responsive" />}
      />
      <div className="max-w-[100%] pb-[3.31rem]  pt-[1.44rem] pl-[1.81rem] md:pr-[5.75rem] pr-[1.56rem]">
        <div className="h-[109px] mb-[2.63rem]">
          <p className=" text-[0.88rem] font-normal leading-[1.25rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-[1.25rem]">
          {links.map((feature) => (
            <Button text={feature.text} extraStyle={`${feature.extraStyle} h-[1.5rem]`} key={UUID()}>
              <Image src={feature.src} layout="responsive" />
            </Button>
          ))}
        </div>
      </div>
    </Accordion>
  );
}
