import { TmnLogo } from "../TmnLogo";

export function CTA() {
  return (

    <section className="bg-zinc-100 2xl:max-w-7xl mx-auto">
      <div className="relative">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            className="object-cover w-full h-64 sm:h-80 lg:absolute object-left lg:h-full"
            src="/bundle2.png"
            alt=""
          />
        </div>
        <div
          className="pt-16 pb-24 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
        >
          <div className="px-8 lg:px-12">
            <div className="max-w-xl mx-auto lg:mx-0 lg:pr-12">
              <div className="flex flex-wrap">
                <div className="flex items-center text-sm font-medium text-black">
                  <TmnLogo w="25" fcolor="fill-accent-500" />
                  <span className="ml-1">Tamnora</span>
                </div>
              </div>
              <p
                className="mt-12 text-3xl font-black tracking-tight text-black uppercase font-display"
              >
                Base Radio Taxi
              </p>
              <p
                className="max-w-2xl mt-4 text-base font-medium tracking-tight text-black"
              >
                Descubre cómo nuestra plataforma puede
                ayudarte a monitorear móviles, planificar viajes y analizar el
                rendimiento de tu negocio, todo en tiempo real.
                <span className="lg:block">— La herramienta definitiva para gestionar tu flota de taxis.</span>
              </p>
              <p
                className="mt-8 text-2xl tracking-tight text-black fon4t-medium font-display lg:pl-4 lg:border-l-4 border-accent-600"
              >
                Aprovecha la prueba gratis por<span className="text-accent-600"> 30 días </span> y
                <span className="text-black opacity-70 md:block"
                >comienza a transformar tu negocio.
                </span>
              </p>
              <p
                className="max-w-2xl mt-8 text-base font-medium tracking-tight text-black"
              >
                Accede a todas las funcionalidades de
                <span className="text-accent-600"> forma gratuita</span> y sin compromiso. ¡Descubre cómo podemos ayudarte!
              </p>

              <div className="mt-12">
                <a
                  href="https://lexingtonthemes.com"
                  className="inline-flex items-center justify-center w-full gap-4 px-6 py-3 text-sm font-medium text-white transition rounded-xl bg-accent-600 group active:text-gray-900/60 active:transition-none outline-offset-2 hover:bg-white hover:text-black lg:w-auto"
                >Adquirir el plan gratuito<span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}