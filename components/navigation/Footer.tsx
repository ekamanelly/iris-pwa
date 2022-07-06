

export function Footer({children}:any) {
    return ( 
        <div className="h-[205px] w-full flex justify-center items-center bg-black">
            <div className="w-[195px] h-[23px]">
            {children}
            </div>
        </div>
     );
}

export default Footer;