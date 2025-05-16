import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Абстрактний фоновий елемент */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-yellow-500/30 via-transparent to-transparent" />
        <div className="grid grid-cols-12 h-full w-full opacity-20">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-yellow-500/30" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transformamos <span className="text-yellow-500">Ideas</span> en Experiencias{" "}
            <span className="text-yellow-500">Urbanas</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Somos BrightCalle Marketing, una agencia especializada en marketing offline y publicidad exterior que
            convierte espacios urbanos en poderosas herramientas de comunicación para marcas que buscan destacar.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl w-full md:w-auto flex items-center">
              <div className="bg-yellow-500 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-black" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Fundada en</p>
                <p className="text-white text-xl font-bold">2025</p>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl w-full md:w-auto flex items-center">
              <div className="bg-yellow-500 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Sede principal</p>
                <p className="text-white text-xl font-bold">Madrid, España</p>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl w-full md:w-auto flex items-center">
              <div className="bg-yellow-500 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-black" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Proyectos completados</p>
                <p className="text-white text-xl font-bold">250+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративний елемент внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  )
}
