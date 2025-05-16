import { TrendingUp, Users, Globe } from "lucide-react"

// Mock data - would come from insights.json
const insights = [
  {
    id: 1,
    title: "68%",
    description:
      "de los consumidores recuerdan haber visto publicidad exterior en la última semana, superando a otros medios tradicionales.",
    icon: "trending-up",
  },
  {
    id: 2,
    title: "4.5x",
    description:
      "mayor es la probabilidad de que los consumidores busquen online una marca después de ver su publicidad exterior.",
    icon: "users",
  },
  {
    id: 3,
    title: "38%",
    description:
      "de aumento en la efectividad de las campañas cuando se combina publicidad exterior con estrategias digitales.",
    icon: "globe",
  },
]

export default function Insights() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "trending-up":
        return <TrendingUp className="h-12 w-12 text-yellow-500" />
      case "users":
        return <Users className="h-12 w-12 text-yellow-500" />
      case "globe":
        return <Globe className="h-12 w-12 text-yellow-500" />
      default:
        return <TrendingUp className="h-12 w-12 text-yellow-500" />
    }
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Datos del Sector</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            La publicidad exterior sigue siendo una de las formas más efectivas de conectar con tu audiencia en el mundo
            real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <div key={insight.id} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-6">{getIcon(insight.icon)}</div>
              <h3 className="text-4xl font-bold text-yellow-500 mb-4">{insight.title}</h3>
              <p className="text-gray-700">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
