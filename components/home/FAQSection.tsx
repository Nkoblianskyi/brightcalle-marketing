"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// Mock data - would come from faq.json
const faqs = [
  {
    id: 1,
    question: "¿Qué tipos de publicidad exterior ofrecen?",
    answer:
      "Ofrecemos una amplia gama de soluciones de publicidad exterior, incluyendo vallas publicitarias, mupis, marquesinas, lonas de gran formato, publicidad en transporte público (autobuses, metro, taxis), mobiliario urbano y mucho más. Adaptamos nuestras propuestas a las necesidades específicas de cada cliente y campaña.",
  },
  {
    id: 2,
    question: "¿Cómo determinan las mejores ubicaciones para mi campaña?",
    answer:
      "Realizamos un análisis detallado de tu público objetivo, objetivos de marketing y presupuesto. Utilizamos datos demográficos, flujos de tráfico y estudios de audiencia para identificar las ubicaciones que maximizarán el impacto de tu campaña y alcanzarán eficazmente a tu audiencia ideal.",
  },
  {
    id: 3,
    question: "¿Cuánto tiempo se necesita para implementar una campaña de publicidad exterior?",
    answer:
      "El tiempo de implementación varía según el tipo y escala de la campaña. Generalmente, desde la aprobación del diseño hasta la instalación completa, puede llevar entre 2 y 4 semanas. Para campañas más complejas o de gran escala, recomendamos planificar con al menos 6-8 semanas de antelación.",
  },
  {
    id: 4,
    question: "¿Ofrecen servicios de diseño o necesito proporcionar mis propios materiales?",
    answer:
      "Ofrecemos servicios completos de diseño creativo como parte de nuestras soluciones. Nuestro equipo de diseñadores puede crear conceptos visuales impactantes adaptados específicamente a cada formato publicitario. Sin embargo, también podemos trabajar con materiales proporcionados por el cliente si ya cuentas con tu propio equipo creativo.",
  },
  {
    id: 5,
    question: "¿Cómo se mide el éxito de una campaña de publicidad exterior?",
    answer:
      "Utilizamos diversas métricas para evaluar el éxito, incluyendo estimaciones de impresiones (OTS - Opportunity To See), estudios de reconocimiento de marca, análisis de tráfico web o tiendas físicas durante la campaña, y cuando es posible, tecnologías como códigos QR o URLs específicas para medir la respuesta directa. Proporcionamos informes detallados al finalizar cada campaña.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros servicios de marketing offline.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="mb-4">
              <button
                className={`w-full text-left p-6 flex justify-between items-center rounded-lg ${
                  openIndex === index ? "bg-yellow-500 text-black" : "bg-white hover:bg-yellow-50"
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-white border-t border-gray-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
