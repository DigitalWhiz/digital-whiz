'use client'

import React from "react"
import { Title, TitleLogo, TitleSm } from "./ui/typography/TitleLogo"
import Link from "next/link"

const Banner = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-secondary">
      <div className="absolute inset-0 rounded-tl-[50px] rounded-br-[50px] bg-secondary opacity-30 -z-10"></div>
      <div className=" bg-gradient p-8 rounded-tl-[50px] rounded-br-[50px] shadow-lg max-w-4xl w-full mx-4 md:mx-6 lg:mx-8">
        <div className="text-center mb-6">
          <Title title='Es momento de avanzar y alcanzar el ÉXITO' className="text-shadow-lg" />
          {/* <Title title='We are looking forward to start a new project' /> */}
          <br />
          <TitleLogo title='¡Llevemos tu negocio al siguiente nivel!' />
          {/* <TitleLogo title='Let’s take your business to the next level!' /> */}
        </div>
        <div className="text-center">
          <Link href="https://wa.me/message/XWKCRXJ2NSCII1" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#c05aff] text-white py-2 px-6 rounded-full font-bold shadow-lg hover:bg-[#a64cda] transition">
            Contactarme
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Banner
