import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactInfo() {
  return (
    <Card className="bg-white/10 backdrop-blur-md text-white border-none shadow-lg">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>

        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Dirección</h3>
              <p>Calle de Serrano, 55</p>
              <p>28006 Madrid, España</p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Teléfono</h3>
              <p>+34 692 183 305</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Email</h3>
              <p>info@brightcallemarketing.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábado y Domingo: Cerrado</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
