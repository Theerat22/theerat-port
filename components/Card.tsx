import Link from 'next/link';
import { FaGavel } from 'react-icons/fa';
import { FaTree, FaEarthAsia, FaStar } from "react-icons/fa6";
import { GiCookingPot } from "react-icons/gi";
import { BiMath } from "react-icons/bi";
import { CiMusicNote1 } from "react-icons/ci";
export default function IconGrid() {
  const items = [
    { icon: <FaTree size={60} />, title: 'ภูมิศาสตร์', href: '/geo' },
    { icon: <FaEarthAsia size={60} />, title: 'ภูมิศาสตร์เศรษฐกิจโลก', href: '/geo-eco' },
    { icon: <BiMath  size={60} />, title: 'คณิตศาสตร์', href: '/math' },
    { icon: <GiCookingPot size={60} />, title: 'สร้างสรรค์งานฝีมือ', href: '/cooking' },
    { icon: <FaStar size={60} />, title: 'ดาราศาสตร์', href: '/astro' },
    { icon: <CiMusicNote1 size={60} />, title: 'ดนตรีสากล', href: '/music' },

  ];

  return (
    <div className="min-h-screen flex flex-col items-center mt-10 lg:mt-17">
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="flex flex-col items-center transform hover:scale-110 transition duration-300">
            
              <div className="p-4 border rounded-full">
                {item.icon}
              </div>
              <p className="mt-4 text-lg">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
