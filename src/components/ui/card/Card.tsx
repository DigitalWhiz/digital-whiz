'use client';

import Link from "next/link";
import { TitleSm } from "../typography/TitleLogo";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";

interface CardProps {
  data: {
    id: string;
    cover: string;
    title: string;
    category?: string;
    date?: string;
    desc?: ({ text: string; } | undefined)[];
  };
  caption?: string;
  show?: boolean;
  path?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ data, caption, show = false, path = "" }) => {
  return (
    <div className={`flex flex-col items-center mx-auto max-w-[300px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px]`}>
      <div className='relative w-full h-[240px] sm:h-[240px] md:h-[240px] lg:h-[350px]'>
        <Image
          src={data.cover}
          alt={data.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-tl-[30px] rounded-br-[30px] card-shadow transition-transform transform hover:scale-105"
        />
      </div>
      <div className='text-center mt-4 px-4'>
        {path ? (
          <Link href={`${path}/${data.id}`} className='block mb-2 text-lg md:text-xl font-semibold text-gray-800 hover:text-gray-400'>
            <TitleSm title={data.title} className="text-base md:text-2xl" />
          </Link>
        ) : (
          <TitleSm title={data.title} className="text-base md:text-base text-gray-800 hover:text-gray-400" />
        )}
        <div className='flex justify-center text-gray-400 text-sm md:text-sm'>
          {data.category && <span className='mr-2'>{data.category}</span>}
          {data.date && <span>/ {data.date}</span>}
        </div>
        {show && data.desc && (
          <ul className='mt-2 text-gray-400 hover:text-white text-xs md:text-sm'>
            {data.desc.map((text, i) => (
              <li key={i}>- {text?.text}</li>
            ))}
          </ul>
        )}
        {caption && path && (
          <Link href={`${path}/${data.id}`} className='flex items-center justify-center text-primary hover:text-gray-400 mt-4'>
            {caption} <HiOutlineArrowRight className='ml-2' />
          </Link>
        )}
      </div>
    </div>
  );
};
