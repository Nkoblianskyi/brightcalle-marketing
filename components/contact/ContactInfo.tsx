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

        <div className="mt-8">
          <h3 className="font-bold mb-4">Encuéntranos</h3>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0608860614!2d-3.6883238!3d40.4256269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sCalle%20de%20Serrano%2C%2055%2C%2028006%20Madrid!5e0!3m2!1sen!2ses!4v1652956153412!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de BrightCalle Marketing"
              className="absolute inset-0"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
