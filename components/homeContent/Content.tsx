import { Features } from "./Features";
import Hero from "./Hero";
import { Accordion } from "./Accordion";


export function Content(props:any) {
  return (
    <div className="content-gradient">
      <div className="h-[6px] bg-gradient-to-r from-[#665AEF] to-[#FC364C]"/>
      <Accordion/>
      <Hero />
      <Features />
    </div>
  );
}
