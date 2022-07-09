import { Button } from "../form";
import chartImage from "../../assets/image/chart.png";
import fourCircle from "../../assets/image/fourCircle.png";
import tag from "../../assets/image/tag.png";
import Image from "next/image";
import {v4 as UUID} from 'uuid'

const buttonImages = [
  { image:chartImage, extraStyle: "justify-center bg-iris-gray " },
  { image:fourCircle, extraStyle: "justify-center bg-iris-black " },
  { image:tag, extraStyle: "justify-center bg-iris-gray " },
];
export function Hero(props: any) {
  return (
    <div className="flex justify-center items-center flex-col text-white pb-[4.63rem] pt-[5.06rem] ">
      <div className=" flex justify-center items-center flex-col">
        <h2 className="font-extrabold text-[2.81rem] leading-[1.25] h-[3.81rem]">
          Lorem ipsum
        </h2>
        <p className=" font-normal text-[1rem] leading-[1.25] h-[2.5rem]">
          Created by: <span className="text-iris-red whitespace-nowrap">Lorem ipsum </span>
        </p>
        <p className="text-[1rem] leading-[1.25] text-center h-[2rem]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
        <div className="w-[37rem] hidden sm:flex justify-between pt-[3.75rem]">
          {buttonImages.map(({image, extraStyle}) => (
            <div className="w-[11.5rem] h-[3.13rem] " key={UUID()}>
              <Button
                text="Lorem ipsum"
                extraStyle={extraStyle}
              >
                <Image src={image} layout="responsive" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
