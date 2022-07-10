import { Fragment } from "react";

export function Content({ children }: any) {
  return (
    <Fragment>
      <div className="h-[0.38rem] bg-gradient-to-r from-[#665AEF] to-[#FC364C]" />
      <div className="content-gradient px-[1.28rem]  pt-[2.63rem] min-h-[81.69rem] mb:pb-0 pb-5">
        {children}
      </div>
    </Fragment>
  );
}
