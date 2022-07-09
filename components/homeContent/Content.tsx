export function   Content({children}: any) {
  return (
    <div className="content-gradient pb-[66px]">
      <div className="h-[6px] bg-gradient-to-r from-[#665AEF] to-[#FC364C]" />
      {children}
    </div>
  );
}


