
export function Features({ children }: any) {
  return (
    <div className="xl:pl-[113px] xl:pr-[135px] lg:pl-[63px] lg:pr-[85px] md:pl-[13px] md:pr-[13px] px-1  text-white">
      <div className="grid md:grid-cols-2 lg:gap-x-[28px] lg:gap-y-[28px] md:gap-x-[8px] md:gap-y-[8px] gap-y-[28px]">
      {children}
      </div>
    </div>
  );
}
