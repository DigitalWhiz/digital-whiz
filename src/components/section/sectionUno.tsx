import Image from "next/image";
import { Title, TitleLogo } from "../ui/typography/TitleLogo";

export default function SectionUno() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center mt-32 py-24 md:py-0">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full lg:justify-end">
          <div className="block lg:hidden relative w-full h-full">
            <Image
              src="/img/DiseñoResponsive.png"
              alt="fondo mobile"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl shadow-xl object-center"
            />
          </div>
          <div className="hidden lg:block relative w-full h-full">
            <Image
              src="/img/sectionUno.png"
              alt="fondo desktop"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl shadow-xl object-right"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 sm:left-4 p-8 sm:top-4 sm:p-4 lg:max-w-lg lg:mt-20">
          <TitleLogo
            title="Marketing Integral"
            caption="Agencia de Marketing Digital"
            className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl my-2 md:my-16 lg:my-20"
            isBlock={true}
          />
          <Title
            title="Trabajamos con los mejores profesionales"
            className="text-shadow-lg hidden lg:block text-2xl lg:text-3xl mt-10"
          />
        </div>
      </div>
    </section>
  );
}
