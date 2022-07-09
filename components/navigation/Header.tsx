
export function Header({ children }: any) {
  const logo = children[0];
  const searchField = children[1];
  const navMenu = children[2];
  return (
    <div className="h-[6rem] bg-black flex justify-between items-center pl-[2.5rem] pr-[2.38rem] ">
      <div className="w-[12.19rem] h-[1.44rem] mr-[13.95rem]">{logo}</div>
      <div className="hidden sm:block w-[41.06rem] h-[2.81rem] mr-[2.56rem] rounded-lg overflow-hidden">{searchField}</div>
      <div className="md:hidden block text-white">menu</div>
      <div className="hidden md:block text-white">{navMenu}</div>
    </div>
  );
}
