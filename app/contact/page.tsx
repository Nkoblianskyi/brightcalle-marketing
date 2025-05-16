import BackgroundWrapper from "@/components/BackgroundWrapper"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"

export const metadata = {
  title: "Contacto - BrightCalle Marketing",
  description: "Ponte en contacto con nosotros para consultas sobre nuestros servicios de marketing offline en Madrid.",
}

export default function ContactPage() {
  return (
    <BackgroundWrapper imagePath="/images/contact-background.jpg" overlayOpacity={0.8}>
      <div className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta sobre nuestros
              servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  )
}
