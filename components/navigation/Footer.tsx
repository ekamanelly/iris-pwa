

export function Footer({children}:any) {
    return ( 
        <div className="h-[12.75rem] w-full flex justify-center items-center bg-black">
            <div className="w-[12.19rem] h-[1.44rem]">
            {children}
            </div>
        </div>
     );
}

export default Footer;