import { motion } from "motion/react"

export function Hero() {
  return (
    <section>
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-14">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }} >

          <motion.p
            className="text-4xl tracking-tight font-semibold text-black md:text-5xl font-display mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }} >
            Una solución inteligente para la gestión de taxis
          </motion.p>

          <motion.p
            className="text-gray-500 lg:text-xl max-w-2xl mt-4 mx-auto text-base"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }} >
            Gestiona paradas, viajes y móviles desde un panel intuitivo, con un mapa
            interactivo que muestra todas las paradas de la ciudad. Simplifica tus
            operaciones diarias y aumenta tu eficiencia.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-3 mt-10 flex-col sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <a
            className="items-center justify-center border-gray-200 h-10 font-medium rounded-lg focus-visible:outline-black focus:outline-none inline-flex duration-200 text-black lg:w-auto px-6 py-3 text-center w-full border"
            href="https://github.com/michael-andreuzza/astrosaas"
          >
            Ver planes
          </a>
          <a
            className="items-center justify-center h-10 font-medium rounded-lg focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black lg:w-auto px-6 py-3 text-center text-white w-full"
            href="https://lexingtonthemes.com"
          >
            Comenzar Ahora &nbsp; &rarr;
          </a>
        </motion.div>

        <dl className="lg:gap-x-8 lg:grid-cols-3 max-w-4xl mt-12 mx-auto sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 space-y-6 text-center text-sm items-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="text-gray-500">
            <strong className="text-gray-700">Mapa interactivo</strong> ━ Visualiza y administra todas las paradas de taxis en tiempo real.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="text-gray-500">
            <strong className="text-gray-700">Viajes en proceso</strong> ━ Monitorea viajes y los móviles asignados a cada parada.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="text-gray-500">
            <strong className="text-gray-700">Historial completo</strong> ━ Revisa viajes completados y obtén estadísticas clave.
          </motion.div>
        </dl>

        <motion.div
          className="relative w-full mx-auto max-w-7xl items-center py-12 pb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-gray-100 p-8 rounded-3xl">
            <img
              alt="#_"
              className="relative w-full border border-gray-200 lg:rounded-2xl object-cover rounded shadow-2xl"
              src="/rt-dashboard-light.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}