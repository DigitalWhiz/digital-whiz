"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { testimonial } from "../../assets/data/infodata";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Title, TitleLogo, TitleSm } from "./ui/typography/TitleLogo";
import Link from "next/link";

interface Settings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  nextArrow?: React.ReactElement;
  prevArrow?: React.ReactElement;
  responsive?: {
    breakpoint: number;
    settings: {
      slidesToShow?: number;
      slidesToScroll?: number;
      infinite?: boolean;
      dots?: boolean;
      [key: string]: any;
    };
  }[];
}

interface ArrowProps {
  onClick?: () => void;
}

function SampleNextArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="slick-arrow next-arrow absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
      onClick={onClick}>
      <RiArrowRightSLine size={25} />
    </div>
  );
}

function SamplePrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="slick-arrow prev-arrow absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
      onClick={onClick}>
      <RiArrowLeftSLine size={25} />
    </div>
  );
}

interface TestimonialData {
  id: number;
  cover: string;
  name: string;
  post: string;
  desc: string;
}

const Testimonial: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="testimonial py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative">
        <div className="heading-title mb-8 text-center">
          <TitleLogo
            title=""
            caption="LO QUE DICEN LOS CLIENTES SOBRE NUESTRO TRABAJO"
            className="text-9xl text-shadow-lg"
          />
          {/* <TitleSm title='WHAT CLIENTS SAY ABOUT OUR WORK' /> */}
        </div>
        <div className="cards">
          <Slider {...settings}>
            {testimonial.map((user: TestimonialData) => (
              <div key={user.id} className="p-4">
                <div className="card bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="image relative">
                    <div className="img w-full h-64 relative">
                      <Image
                        src={user.cover}
                        alt={user.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="img-text text-center absolute bottom-0 left-0 bg-black bg-opacity-70 p-4 text-white w-full">
                      <h3 className="text-lg text-center font-semibold">
                        {user.name}
                      </h3>
                      <span className="text-sm">{user.post}</span>
                    </div>
                  </div>
                  <div className="details p-4">
                    <p className="text-gray-700">{user.desc}</p>
                    <Link
                      href="https://wa.me/message/XWKCRXJ2NSCII1"
                      className="flex items-center mt-4 text-blue-500 hover:underline">
                      Contactanos <HiOutlineArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
