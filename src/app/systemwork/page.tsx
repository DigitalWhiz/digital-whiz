import Image from "next/image";
import Link from "next/link";
import { TitleLogo } from "../../components/ui/typography/TitleLogo";

export default function SistemaTrabajo() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-1">
        <Image
          src="/img/DW-transp1.png"
          alt="Sistema de Trabajo"
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full md:w-[80%] md:h-[80%] sm:w-[60%] sm:h-[60%]"
        />
      </div>

      <div className="relative container mx-auto px-4 py-48">
        <TitleLogo title="Sistema de Trabajo" />
        <TitleLogo title="" caption="Descubre Nuestro Proceso" />

        {/* SISTEMA DE TRABAJO */}
        <section
          id="systemwork"
          className="my-12 bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            ¿Cómo Trabajamos en Digital Whiz?
          </h2>
          <p className="mb-4">
            En Digital Whiz, nos comprometemos a ofrecer soluciones de marketing
            digital personalizadas y de alta calidad, diseñadas para cumplir con
            las necesidades y objetivos específicos de cada cliente. Nuestro
            enfoque estructurado y detallado asegura que cada proyecto se maneje
            con la máxima seriedad y profesionalismo. Aquí te contamos cómo
            trabajamos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Consultoría Inicial:</strong> Iniciamos con una reunión
              detallada para comprender a fondo las necesidades y objetivos de
              nuestro cliente. Evaluamos su mercado, competencia y la situación
              actual de su presencia digital. Esta etapa es crucial para definir
              una estrategia efectiva.
            </li>
            <li>
              <strong>Propuesta de Valor:</strong> Basándonos en la información
              recopilada, desarrollamos una propuesta de valor que incluye un
              plan estratégico adaptado a los requerimientos del cliente. Esto
              abarca la planificación de campañas, estrategias de contenido, y
              tácticas específicas para alcanzar sus metas.
            </li>
            <li>
              <strong>Ejecución:</strong> Implementamos el plan estratégico
              utilizando herramientas y técnicas avanzadas de marketing digital.
              Desde la creación de contenido atractivo hasta la gestión de
              campañas publicitarias, nos aseguramos de que cada acción esté
              alineada con los objetivos propuestos.
            </li>
            <li>
              <strong>Monitoreo y Optimización:</strong> Realizamos un
              seguimiento continuo de los resultados obtenidos a través de
              análisis detallados y métricas clave. Utilizamos esta información
              para realizar ajustes y optimizar las campañas, garantizando que
              se maximice el retorno de inversión.
            </li>
            <li>
              <strong>Entrega de Resultados:</strong> Al finalizar cada
              proyecto, presentamos informes detallados que resumen las acciones
              realizadas y los resultados alcanzados. Nuestro objetivo es
              proporcionar transparencia total y demostrar cómo nuestras
              estrategias han impactado positivamente en el éxito de la empresa.
            </li>
            <li>
              <strong>Soporte Continuo:</strong> Además, ofrecemos soporte
              continuo para resolver cualquier duda o necesidad adicional que
              pueda surgir. Estamos comprometidos con nuestros clientes y
              dispuestos a asistirlos en cualquier aspecto relacionado con
              nuestras soluciones.
            </li>
          </ul>
          <p className="mt-4">
            En Digital Whiz, nos enorgullece ofrecer un servicio de alta calidad
            y mantener una comunicación abierta y transparente con nuestros
            clientes. Puedes confiar plenamente en nuestra experiencia y
            dedicación para llevar tu presencia digital al siguiente nivel.
          </p>
        </section>

        {/* TERMINOS Y CONDICIONES */}
        <section
          id="TerminosCondiciones"
          className="my-12 bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Términos y Condiciones
          </h2>
          <p className="mb-4">
            Al utilizar los servicios de Digital Whiz, aceptas cumplir con los
            siguientes términos y condiciones. Estos términos establecen los
            derechos y responsabilidades tanto de los usuarios como de la
            empresa. Te pedimos que los leas detenidamente. Si no estás de
            acuerdo con alguna parte de estos términos, te recomendamos que no
            utilices nuestros servicios.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            1. Aceptación de los Términos
          </h3>
          <p className="mb-4">
            Al acceder a nuestro sitio web o utilizar nuestros servicios,
            aceptas que estás sujeto a estos términos y condiciones, así como a
            nuestra política de privacidad. Nos reservamos el derecho de
            modificar estos términos en cualquier momento, y cualquier cambio
            será efectivo inmediatamente después de su publicación en nuestro
            sitio web.
          </p>
          <h3 className="text-xl font-semibold mb-2">2. Servicios Ofrecidos</h3>
          <p className="mb-4">
            Digital Whiz ofrece una variedad de servicios de marketing digital,
            incluyendo pero no limitado a consultoría, desarrollo web, gestión
            de redes sociales y diseño gráfico. Los detalles específicos de cada
            servicio, incluyendo tarifas y plazos, se acordarán con cada cliente
            de forma individual.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            3. Responsabilidades del Usuario
          </h3>
          <p className="mb-4">
            Como usuario, eres responsable de proporcionar información precisa y
            completa cuando utilices nuestros servicios. Debes cumplir con todas
            las leyes y regulaciones aplicables al usar nuestros servicios y no
            debes utilizar nuestros servicios para fines ilegales o no
            autorizados.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            4. Propiedad Intelectual
          </h3>
          <p className="mb-4">
            Todos los derechos de propiedad intelectual relacionados con los
            servicios proporcionados por Digital Whiz, incluyendo pero no
            limitado a diseños, textos, gráficos y software, son propiedad de
            Digital Whiz o de sus licenciantes. No se te otorgan derechos sobre
            dichos materiales, excepto para el uso limitado y conforme a estos
            términos.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            5. Limitación de Responsabilidad
          </h3>
          <p className="mb-4">
            Digital Whiz no será responsable de ningún daño directo, indirecto,
            incidental o consecuente que surja de tu uso de nuestros servicios,
            incluso si se nos ha informado de la posibilidad de tales daños.
            Nuestra responsabilidad total en relación con cualquier reclamación
            será limitada a la cantidad que hayas pagado por el servicio en
            cuestión.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            6. Modificaciones y Cancelaciones
          </h3>
          <p className="mb-4">
            Nos reservamos el derecho de modificar o cancelar cualquier servicio
            en cualquier momento. Si decidimos cancelar un servicio que ya has
            pagado, te reembolsaremos la cantidad pagada por ese servicio, menos
            cualquier costo incurrido hasta el momento de la cancelación.
          </p>
          <h3 className="text-xl font-semibold mb-2">7. Contacto</h3>
          <p className="mb-4">
            Si tienes alguna pregunta sobre estos términos y condiciones o sobre
            los servicios que ofrecemos, no dudes en ponerte en contacto con
            nosotros. Estamos aquí para ayudarte y resolver cualquier duda que
            puedas tener.
          </p>
          <p className="mb-4">
            Revisa estos términos y condiciones periódicamente para estar al
            tanto de cualquier cambio. El uso continuado de nuestros servicios
            después de la publicación de modificaciones constituirá tu
            aceptación de dichos cambios.
          </p>
        </section>

        {/* POLITICA DE PRIVACIDAD */}
        <section
          id="PrivacyPolicy"
          className="my-12 bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Política de Privacidad
          </h2>
          <p className="mb-4">
            En Digital Whiz, nos tomamos muy en serio la protección de tu
            privacidad. Entendemos que la información personal es valiosa y nos
            comprometemos a protegerla con el máximo cuidado. A continuación, te
            explicamos cómo recopilamos, utilizamos y protegemos tu información:
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Recopilación de Información
          </h3>
          <p className="mb-4">
            Recopilamos información personal solo cuando es necesaria para
            ofrecerte nuestros servicios y mejorar tu experiencia con nosotros.
            Esto incluye, pero no se limita a, datos de contacto, información de
            facturación y datos sobre tu uso de nuestros servicios.
          </p>
          <h3 className="text-xl font-semibold mb-2">Uso de la Información</h3>
          <p className="mb-4">
            Utilizamos tu información personal y/o empresarial para proporcionar
            servicios, gestionar tus solicitudes y comunicarnos contigo sobre
            actualizaciones y promociones relevantes. También podemos usarla
            para mejorar nuestros servicios y ofrecerte una experiencia
            personalizada.
          </p>
          <h3 className="text-xl font-semibold mb-2">Protección de Datos</h3>
          <p className="mb-4">
            Implementamos medidas de seguridad avanzadas para proteger tu
            información contra el acceso no autorizado, la alteración y la
            divulgación. Nuestro equipo trabaja continuamente para garantizar
            que tu información se mantenga segura y confidencial.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Compartición de Información
          </h3>
          <p className="mb-4">
            No compartimos tu información personal con terceros sin tu
            consentimiento, excepto cuando sea necesario para cumplir con
            obligaciones legales o para ofrecerte los servicios solicitados. En
            caso de que se requiera compartir datos con terceros, lo haremos de
            acuerdo con nuestra política de privacidad y con las medidas de
            protección adecuadas.
          </p>
          <h3 className="text-xl font-semibold mb-2">Tus Derechos</h3>
          <p className="mb-4">
            Tienes derecho a acceder, corregir o eliminar tu información
            personal en cualquier momento. Si deseas ejercer estos derechos o
            tienes alguna pregunta sobre nuestra política de privacidad, no
            dudes en contactarnos.
          </p>
          <p className="mb-4">
            Estamos comprometidos con la transparencia y la confianza. Tu
            privacidad es una prioridad para nosotros, y estamos aquí para
            protegerla.
          </p>
          {/* <Link
            href="/politica-privacidad"
            className="text-blue-500 hover:text-blue-700">
            Leer más sobre nuestra Política de Privacidad
          </Link> */}
        </section>

        {/* COBERTURA DE SERVICIOS */}
        <section
          id="Coverage"
          className="my-12 bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Cobertura de Servicios
          </h2>
          <p className="mb-4">
            En Digital Whiz, nos enorgullece ofrecer nuestros servicios a
            clientes en toda Argentina y alrededor del mundo. Nuestra amplia
            cobertura geográfica nos permite brindar soluciones digitales
            personalizadas sin importar dónde te encuentres. Estamos equipados
            para abordar proyectos tanto locales como internacionales,
            adaptándonos a las necesidades específicas de cada mercado.
          </p>
          <h3 className="text-xl font-semibold mb-2">¿Cómo lo Hacemos?</h3>
          <p className="mb-4">
            Utilizamos herramientas y tecnologías avanzadas para garantizar una
            comunicación efectiva y una gestión eficiente de los proyectos, sin
            importar la distancia. Nuestro equipo trabaja de manera remota y en
            estrecha colaboración con los clientes, asegurando que todos los
            objetivos se cumplan con la máxima calidad y puntualidad.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Ventajas de Nuestra Cobertura Global
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Flexibilidad:</strong> Podemos adaptar nuestras
              estrategias y servicios a diferentes regiones y mercados, teniendo
              en cuenta las particularidades locales.
            </li>
            <li>
              <strong>Experiencia Internacional:</strong> Nuestra experiencia
              trabajando con clientes de diversos países nos permite ofrecer
              perspectivas valiosas y soluciones innovadoras.
            </li>
            <li>
              <strong>Soporte Personalizado:</strong> Brindamos atención
              personalizada y soporte continuo para garantizar que todos los
              aspectos de tu proyecto sean atendidos adecuadamente.
            </li>
            <li>
              <strong>Acceso a Recursos Globales:</strong> Utilizamos una red de
              recursos y herramientas globales para maximizar la eficacia de
              nuestras estrategias y campañas.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Nuestros Servicios</h3>
          <p className="mb-4">
            Ofrecemos una amplia gama de servicios digitales, incluyendo
            consultoría de marketing, desarrollo web, gestión de redes sociales,
            diseño gráfico, y mucho más. Nos especializamos en crear soluciones
            a medida que se alineen con tus objetivos de negocio y ayuden a
            impulsar tu éxito en el entorno digital.
          </p>
          <p>
            No importa si eres una pequeña empresa local o una corporación
            multinacional, en Digital Whiz estamos listos para ayudarte a
            alcanzar tus metas digitales con eficacia y profesionalismo.
            Contáctanos hoy para saber cómo podemos colaborar contigo y llevar
            tu presencia digital al siguiente nivel.
          </p>
        </section>
      </div>
    </div>
  );
}
