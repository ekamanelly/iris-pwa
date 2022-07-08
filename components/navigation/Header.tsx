
export function Header({ children }: any) {
  const logo = children[0];
  const searchField = children[1];
  const navMenu = children[2];
  return (
    <div className="h-[96px] w-full bg-black flex justify-between items-center pl-[40px] pr-[38px] ">
      <div className="w-[195px] h-[23px] lg:mr-[233px] md:mr-[70px] mr-[20px]">{logo}</div>
      <div className="w-[657px] h-[45px] lg:mr-[41px] md:mr-[21px] mr-[20px] rounded-lg overflow-hidden">{searchField}</div>
      <div className="md:hidden block text-white">menu</div>
      <div className="hidden md:block text-white">{navMenu}</div>
    </div>
  );
}
