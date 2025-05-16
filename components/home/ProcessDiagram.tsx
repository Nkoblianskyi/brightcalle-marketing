import { CheckCircle } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Consulta Inicial",
    description: "Analizamos tus objetivos, audiencia y presupuesto para entender completamente tus necesidades.",
  },
  {
    id: 2,
    title: "Estrategia",
    description: "Desarrollamos una estrategia personalizada seleccionando los mejores formatos y ubicaciones.",
  },
  {
    id: 3,
    title: "Diseño Creativo",
    description: "Creamos conceptos visuales impactantes adaptados a cada formato publicitario.",
  },
  {
    id: 4,
    title: "Producción",
    description: "Gestionamos la producción de todos los materiales con los más altos estándares de calidad.",
  },
  {
    id: 5,
    title: "Implementación",
    description: "Coordinamos la instalación y puesta en marcha de todos los elementos de la campaña.",
  },
  {
    id: 6,
    title: "Seguimiento",
    description: "Monitorizamos el rendimiento y proporcionamos informes detallados sobre los resultados.",
  },
]

export default function ProcessDiagram() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Un enfoque estructurado para garantizar el éxito de cada proyecto, desde la concepción hasta la
            implementación.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500 hidden md:block -translate-x-1/2" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  {/* Circle on the timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-black font-bold">{step.id}</span>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-sm md:mr-12 md:ml-0 ml-0 mr-0">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-4 md:hidden">
                        <span className="text-black font-bold">{step.id}</span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>

                  <div className="md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Beneficios de Nuestro Enfoque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Campañas personalizadas a tus objetivos",
              "Optimización de presupuesto publicitario",
              "Máximo impacto visual",
              "Coordinación integral de todos los elementos",
              "Medición de resultados",
              "Soporte continuo durante toda la campaña",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
