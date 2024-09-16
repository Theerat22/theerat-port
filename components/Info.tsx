import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from '@headlessui/react';
import Sittha from "@/public/sittha.JPG";
import Link from "next/link";

const Info = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-16">
      <div className="justify-center mt-20">
        <h1 className="text-5xl text-center md:text-6xl font-semibold mb-4 ">
          PORTFOLIO
        </h1>
      </div>
      <div className="flex justify-center mt-7">
        <Image
          src={Sittha}
          alt="Sittha"
          width={180}
          height={180}
          className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full border"
        />
      </div>

      <div className="w-full mt-7 lg:w-2/3 space-y-3">
        <h2 className="text-4xl font-bold">Theeratdolchat Chatchai</h2>
        <h3 className="text-2xl mt-1 font-normal">(Sittha)</h3>
        <Link
          href="https://www.instagram.com/theeerat_?igsh=MTJ2emRuZ2R1N2lvNA%3D%3D&utm_source=qr"
          target="_blank"
          className="inline-flex items-center mt-2 text-gray-600 hover:text-gray-800"
        >
          <span>@theeerat_</span>
          <BsArrowUpRight className="ml-2 h-4" />
        </Link>
      </div>


      <div className="mt-20" id="personal">
        <h1 className="text-2xl font-bold mb-2">Personal Information</h1>
        <p className="text-lg mb-1">ชื่อ : ธีรัตม์ดลฉัตร ฉัตรชัย</p>
        <p className="text-lg mb-1">แผนการเรียน : English - Chinese</p>
        <p className="text-lg mb-1">วันเกิด : 25 กันยายน 2550</p>
        <p className="text-lg mb-1">สัญชาติ : ไทย</p>
        <p className="text-lg">งานอดิเรก : เขียนโปรแกรม ฟังเพลง เล่นกีตาร์</p>
      </div>


      <div className="flex flex-col sm:flex-row justify-center mt-20 gap-4">
        <Button className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-4 text-lg font-bold text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600">
          Portfolio
        </Button>
        <Button className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-4 text-lg font-bold text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600">
          Activities
        </Button>
      </div>
    </div>
  );
};

export default Info;
