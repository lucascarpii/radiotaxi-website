import { delay } from "motion";
import { motion } from "motion/react";

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
      delay: 0,
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
      delay: 0.2,
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
      delay: 0.4,
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
      delay: 0.6,
    },
  ];
  return (

    <section aria-labelledby="pricing-section" id="pricing">
      <div className="lg:px-16 max-w-7xl md:px-12 mx-auto px-8 py-24 scroll-mt-12">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1 } },
            }}
            className="text-4xl tracking-tight font-medium text-black md:text-5xl font-display"
          >
            Planes que se adaptan a tus necesidades
          </motion.h2>
        </div>

        <div
          className="grid max-w-2xl grid-cols-1 py-4 mt-24 -mx-4 xl:-mx-12 sm:grid-cols-2 gap-y-10 sm:mx-auto lg:max-w-none lg:grid-cols-4 xl:gap-x-2"
        >
          {
            plans.map((plan) => (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, translateY: 15 },
                  visible: { opacity: 1, translateY: 0, transition: { duration: 0.5, delay: plan.delay } },
                }}
                class={`flex flex-col px-6 rounded-3xl py-6 lg:py-8 ${plan.recommended ? "bg-black text-white sm:px-8" : "bg-gray-50"}`}
              >
                <h3 className="mt-5 text-lg font-display">{plan.name}</h3>
                <p
                  class={`mt-2 whitespace-pre-line min-h-[40px] text-sm ${plan.recommended ? "text-accent-100" : "text-gray-500"}`}
                >
                  {plan.description}
                </p>
                <p className="order-first text-5xl font-light tracking-tight font-display">
                  {plan.price}
                  <span className="text-lg">/mes</span>
                </p>
                <ul
                  role="list"
                  class={`flex flex-col order-last mt-10 text-sm ${plan.recommended ? "text-white" : "text-gray-600"} gap-y-3`}
                >
                  {plan.features.map((feature) => (
                    <li className="flex items-center">
                      <ion-icon
                        className="w-4 h-4 md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      />
                      <span className="ml-4">{feature}</span>
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
              </motion.section>
            ))
          }
        </div>
      </div>
    </section>

  )
}