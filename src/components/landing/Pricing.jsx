export function Pricing() {
  const plans = [
    {
      name: "Plan Gratuito - Prueba",
      description: "Ideal para probar la plataforma. \n (Valido Hasta 30 dias)",
      price: "$0",
      features: [
        "Acceso a viajes en proceso y historial.",
        "Mapa de paradas limitado.",
        "Hasta 5 viajes programados.",
        "2 paradas y 2 taxis.",
        "Soporte por correo.",
      ],
      link: "/register",
      buttonLabel: "Comenzar",
      recommended: false,
    },
    {
      name: "Plan Básico",
      description: "Para pequeñas flotas de taxis.",
      price: "$20",
      features: [
        "Todo lo del Plan Gratuito.",
        "Gestión de viajes pactados.",
        "Monitoreo de taxis en paradas.",
        "Hasta 10 paradas y 10 taxis.",
        "Soporte estándar.",
      ],
      link: "/register",
      buttonLabel: "Comenzar",
      recommended: false,
    },
    {
      name: "Plan Profesional",
      description: "Para flotas medianas que requieren más control.",
      price: "$40",
      features: [
        "Todo lo del Plan Básico.",
        "Hasta 20 usuarios.",
        "Viajes programados ilimitados.",
        "Gestión de hasta 20 alias.",
        "Soporte prioritario.",
      ],
      link: "/register",
      buttonLabel: "Comenzar",
      recommended: true,
    },
    {
      name: "Plan Enterprise",
      description: "Para grandes empresas de transporte.",
      price: "$150",
      features: [
        "Todo lo del Plan Profesional.",
        "Gestión ilimitada de paradas, taxis y viajes.",
        "Análisis de datos avanzado.",
        "Soporte 24/7 y personalización.",
      ],
      link: "/register",
      buttonLabel: "Comenzar",
      recommended: false,
    },
  ];
  return (

    <section aria-labelledby="pricing-section" id="pricing">
      <div class="lg:px-16 max-w-7xl md:px-12 mx-auto px-8 py-24 scroll-mt-12">
        <div class="text-center max-w-3xl mx-auto">
          <h2
            class="text-4xl tracking-tight font-medium text-black md:text-5xl font-display"
          >
            Planes que se adaptan a tus necesidades
          </h2>
        </div>

        <div
          class="grid max-w-2xl grid-cols-1 py-4 mt-24 -mx-4 xl:-mx-12 sm:grid-cols-2 gap-y-10 sm:mx-auto lg:max-w-none lg:grid-cols-4 xl:gap-x-2"
        >
          {
            plans.map((plan) => (
              <section
                class={`flex flex-col px-6 rounded-3xl py-6 lg:py-8 ${plan.recommended ? "bg-black text-white sm:px-8" : "bg-gray-50"}`}
              >
                <h3 class="mt-5 text-lg font-display">{plan.name}</h3>
                <p
                  class={`mt-2 whitespace-pre-line min-h-[40px] text-sm ${plan.recommended ? "text-accent-100" : "text-gray-500"}`}
                >
                  {plan.description}
                </p>
                <p class="order-first text-5xl font-light tracking-tight font-display">
                  {plan.price}
                  <span class="text-lg">/mes</span>
                </p>
                <ul
                  role="list"
                  class={`flex flex-col order-last mt-10 text-sm ${plan.recommended ? "text-white" : "text-gray-600"} gap-y-3`}
                >
                  {plan.features.map((feature) => (
                    <li class="flex items-center">
                      <ion-icon
                        class="w-4 h-4 md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      />
                      <span class="ml-4">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  aria-label={`${plan.name} tier`}
                  class={`inline-flex items-center justify-center w-full px-6 py-3 h-12 mt-8 text-center text-black transition duration-200 ease-in-out transform bg-white ${plan.recommended ? "border-2 hover:bg-black border-white hover:text-white" : "border hover:bg-gray-200 border-gray-200"} rounded-xl focus:outline-none `}
                >
                  {plan.buttonLabel}
                </a>
              </section>
            ))
          }
        </div>
        {/* <div class="mx-auto pt-12 lg:py-16">
          <div class="grid grid-cols-2 gap-0.5 lg:mt-8 md:grid-cols-6 mt-6">
            <div class="flex justify-center col-span-1 px-8">
              <img alt="logo" src="/Figma.svg" />
            </div><div class="flex justify-center col-span-1 px-8">
              <img alt="logo" src="/Canva.svg" />
            </div><div class="flex justify-center col-span-1 px-8">
              <img alt="logo" src="/Stripe.svg" />
            </div><div class="flex justify-center col-span-1 px-8">
              <img alt="logo" src="/Gitlab.svg" />
            </div><div class="flex justify-center col-span-1 px-8">
              <img alt="logo" src="/Linear.svg" />
            </div><div class="flex justify-center col-span-1 px-8">
              <img alt="logo" src="/Gumroad.svg" />
            </div>
          </div>
        </div> */}
      </div>
    </section>

  )
}