
export function Features({ children }: any) {
  return (
    <div className="xl:px-[6.19rem] lg:px[5.21rem] md:px-[1rem] px-1  text-white">
      <div className="grid md:grid-cols-2   md:gap-x-[1.19rem]  gap-y-[1.5]">
      {children}
      </div>
    </div>
  );
}
