import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Theerat from "@/public/sittha.JPG";
import Link from "next/link";
// import Rectangle from "../public/Rectangle.svg";

const Info = () => {
  return (
    <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
    <div className="mt-10">
      <h1 className="flex justify-center items-center mt-24 text-5xl md:text-5xl lg:text-5xl">
        <span className="font-semibold">PORTFOLIO</span>
      </h1>
    </div>
    <div className="flex justify-center items-center mt-10">
      <Image
        src={Theerat}
        alt="Theeratdolchat Chatchai"
        width="120"
        height="120"
      />
    </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
          <span className="font-semibold">Theeratdolchat Chatchai</span>
        </h2>
        <h3>
          <Link
            href={"https://www.linkedin.com/in/pranjalshikhar"}
            target="_blank"
            className="text-[#717171bb] flex items-center"
          >
            <p>@theeerat_</p>
            <BsArrowUpRight className="stroke-1 h-3" />
          </Link>
        </h3>
      </div>
    
  </div>
  );
};

export default Info;