import { Button } from "../form";
import chartImage from "../../assets/image/chart.png";
import fourCircle from "../../assets/image/fourCircle.png";
import tag from "../../assets/image/tag.png";
import Image from "next/image";

const buttonImages = [chartImage, fourCircle, tag];
export function Hero(props: any) {
  return (
    <div className="flex justify-center items-center flex-col text-white mb-[75px] ">
      <div className="w-[592px] flex justify-center items-center flex-col">
        <h2 className="font-extrabold text-[45px] leading-[61px]">
          Lorem ipsum
        </h2>
        <p className=" font-normal text-[16px] leading-5">
          Created by: <span className="text-iris-red">Lorem ipsum </span>
        </p>
        <p className="leading-[22px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
        <div className="w-full flex justify-between mt-[60px]">
          {buttonImages.map((image) => (
            <div className="w-[184px] h-[50px] ">
              <Button
                text="Lorem ipsum"
                extraStyle="justify-center bg-iris-black "
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
