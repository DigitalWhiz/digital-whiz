
'use client';

import { Textarea } from "@nextui-org/react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "¿Qué servicios ofrecen en Digital Whiz?",
        answer: "En Digital Whiz, ofrecemos una variedad de servicios para potenciar su presencia en línea: Desarrollo Web, Redes Sociales, Publicidad en Línea (ADS), Identidad de Marca, Email Marketing, y E-commerce."
      },
      {
        question: "¿Cómo puedo contactar a Digital Whiz?",
        answer: "Puede contactarnos a través de nuestro sitio web, enviándonos un correo electrónico a agenciadigitalwhiz@gmail.com, o enviándonos un Whatsapp al +543571345450."
      },
      {
        question: "¿Ofrecen servicios personalizados?",
        answer: "Sí, ofrecemos servicios personalizados para adaptarnos a las necesidades específicas de cada cliente. Cada cliente es ÚNICO en Digital Whiz."
      },
      {
        question: "¿Cuales son los planes de Digital Whiz?",
        answer: "Nos enfocamos en las necesidades de cada cliente, por eso nos diferenciamos del resto, creemos conveniente armar cada plan a cada cliente en particular"
      },
      // Agrega más preguntas y respuestas aquí
];

const PreguntasFrecuentes: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-opacity-70 bg-fixed"
      style={{
        backgroundImage: "url('/img/DW-transp1.png')", 
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-70 text-[#BDC7D8]">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-center mb-12">
            Encuentra respuestas a las preguntas más comunes de nuestros clientes. 
          </p>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <DisclosureButton
                      className="group flex w-full items-center justify-between px-4 py-2 text-lg font-medium text-left bg-purple-900 rounded-lg hover:bg-purple-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    >
                      <span>{faq.question}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-white group-hover:text-gray-400`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-300">
                      <Textarea
                        readOnly
                        fullWidth
                        value={faq.answer}
                        className="bg-purple-900 bg-opacity-40 text-gray-300 backdrop-blur-md border border-purple-900 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105"
                      />
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;