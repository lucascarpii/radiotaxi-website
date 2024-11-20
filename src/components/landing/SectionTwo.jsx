export function SectionTwo() {
  const securityFeatures = [
    {
      icon: "cloud-upload-outline",
      title: "Respaldo en la nube",
      description:
        "Asegura y protege tus datos con copias de seguridad en la nube, siempre disponibles cuando las necesites.",
    },
    {
      icon: "shield-checkmark-outline",
      title: "Roles de usuario",
      description:
        "Configura permisos personalizados para cada miembro del equipo y garantiza un acceso controlado.",
    },
    {
      icon: "layers-outline",
      title: "Infraestructura escalable",
      description:
        "Diseñado para operar desde pequeños equipos hasta grandes organizaciones sin comprometer el rendimiento.",
    },
  ];
  return (
    <section>
      <div
        class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12"
      >
        <div
          class="grid grid-cols-1 gap-4 mt-6 items-center list-none lg:grid-cols-2 lg:gap-24"
        >
          <div class="text-center lg:text-left">
            <div>
              <p
                class="text-4xl tracking-tight font-medium text-black md:text-5xl font-display"
              >
                Seguridad multicapa
              </p>
              <p class="text-base mt-4 text-gray-500">
                Con un enfoque integral en la protección de datos, nuestra solución
                garantiza la seguridad de tu información a través de múltiples
                capas, incluyendo copias de seguridad, roles de usuario
                personalizables y una infraestructura escalable.
              </p>
            </div>
          </div>
          <div
            class="lg:mt-0 mt-12 h-full hidden lg:block rounded-3xl overflow-hidden border border-gray-200"
          >
            <div class="bg-gray-100 p-8 overflow-hidden">
              <img
                alt="Lexingtøn thumbnail"
                class="border border-gray-200 lg:rounded-xl object-cover rounded shadow-2xl"
                src="table-light.png"
              />
            </div>
          </div>
        </div>
        <div class="mt-24 w-full gap-12 grid grid-cols-1 lg:gap-24 lg:grid-cols-3">
          {
            securityFeatures.map((feature) => (
              <div>
                <div class="gap-3 lg:inline-flex lg:items-center">
                  <div class="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10">
                    <ion-icon
                      aria-label={feature.icon}
                      class="hydrated md h-5 w-5"
                      name={feature.icon}
                      role="img"
                    />
                  </div>
                  <p class="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                    {feature.title}
                  </p>
                </div>
                <p class="text-gray-500 text-sm mt-4">{feature.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section >

  )
}