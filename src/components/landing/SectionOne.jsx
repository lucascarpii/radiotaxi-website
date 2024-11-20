export function SectionOne() {
  const features = [
    {
      icon: "calendar-outline",
      title: "Viajes Programados",
      description:
        "Configura viajes únicos o recurrentes, ahorrando tiempo al planificar rutas frecuentes.",
    },
    {
      icon: "car-outline",
      title: "Gestión centralizada de móviles",
      description:
        "Administra la flota fácilmente, actualizando datos como estado, modelo y licencias.",
    },
    {
      icon: "pin-outline",
      title: "Alias y referencias",
      description:
        "Simplifica la entrada de datos asignando alias para direcciones frecuentes.",
    },
    {
      icon: "people-outline",
      title: "Gestión de usuarios con permisos",
      description:
        "Controla accesos al sistema asignando permisos específicos a cada usuario.",
    },
    {
      icon: "stats-chart-outline",
      title: "Estadísticas y reportes",
      description:
        "Consulta gráficos y reportes para analizar ingresos, viajes y disponibilidad.",
    },
    {
      icon: "chatbubbles-outline",
      title: "Soporte en tiempo real",
      description:
        "Incluye un sistema de mensajería interna para resolver problemas rápidamente.",
    },
  ];

  return (
    <section id="features">
      <div
        class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12"
      >
        <div class="mx-auto max-w-xl text-center">
          <div>
            <p
              class="text-4xl tracking-tight font-medium text-black md:text-5xl font-display"
            >
              Una herramienta para optimizar tu trabajo
            </p><p
              class="mt-4 text-lg text-na mx-auto tracking-tight text-gray-500"
            >
              Simplifica la gestión de taxis con características diseñadas para
              ahorrar tiempo y mejorar la eficiencia.
            </p>
          </div>
        </div>
        <div>
          <div class="mx-auto max-w-7xl pt-12">
            <h2 class="sr-only">Features.</h2><div>
              <div
                class="grid gap-12 grid-cols-1 lg:space-y-0 lg:text-center md:grid-cols-3"
              >
                {
                  features.map((feature) => (
                    <div>
                      <div>
                        <div class="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10 lg:mx-auto">
                          <ion-icon
                            aria-label={feature.icon}
                            class="hydrated md h-4 w-4"
                            name="scan-outline"
                            role="img"
                          />
                        </div>
                        <p class="mt-4 text-lg font-semibold leading-6 text-black font-display tracking-tight">
                          {feature.title}
                        </p>
                      </div>
                      <div class="mt-4 text-gray-500 text-sm">
                        {feature.description}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}