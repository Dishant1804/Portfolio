import Image from "next/image";
import heartIcon from '../Utils/heart-solid.svg'
import Link from "next/link";

const Footer = () =>{
  return <div className="flex flex-row w-full mt-[27px] gap-[5px] text-[#fff] justify-center items-center h-[80px] text-[18px]">
    Made with <Image src={heartIcon} alt="" height={18} width={18} /> by <div className="hover:underline hover:duration-300 "><Link href={'https://github.com/Dishant1804/'} target="_blank" >Dishant</Link></div>
  </div>
}

export default Footer;