import { Button } from "./form";
import chartImage from "../assets/image/chart.png";

export function Hero(props: any) {
  return (
    <div className="flex justify-center items-center flex-col text-white mb-[75px] ">
      <div className="w-[592px] flex justify-center items-center flex-col">
        <h2 className="font-extrabold text-[45px]">
          Lorem ipsum
        </h2>
        <p className=" font-normal text-[16px]">
          Created by: <span className=" text-[#FC364C]">Lorem ipsum </span>
        </p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
      <div className="w-full flex justify-between mt-[60px]">
        <div className="w-[184px] h-[50px] "><Button text='Lorem ipsum' icon={chartImage}  /></div>
        <div className="w-[184px] h-[50px] "><Button text='Lorem ipsum' icon={chartImage} /></div>
        <div className="w-[184px] h-[50px] "><Button text='Lorem ipsum' icon={chartImage} /></div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
