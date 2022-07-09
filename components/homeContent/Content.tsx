import { Fragment } from "react";

export function Content({ children }: any) {
  return (
    <Fragment>
      <div className="h-[0.38rem] bg-gradient-to-r from-[#665AEF] to-[#FC364C]" />
      <div className="content-gradient px-[1.28rem] pb-[4.13rem] pt-[2.63rem] h-[87.94rem]">
        {children}
      </div>
    </Fragment>
  );
}
