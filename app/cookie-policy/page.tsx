import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Cookies - BrightCalle Marketing",
    description: "Información sobre cómo BrightCalle Marketing utiliza cookies en su sitio web.",
}

export default function CookiePolicyPage() {
    return (
        <div className="py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>

                    <div className="prose prose-lg max-w-none">
                        <p>Última actualización: 16 de mayo de 2025</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. ¿Qué son las cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, teléfono
                            móvil) cuando visita un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web
                            funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Tipos de cookies que utilizamos</h2>
                        <p>En BrightCalle Marketing utilizamos los siguientes tipos de cookies:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>
                                <strong>Cookies esenciales:</strong> Son necesarias para el funcionamiento básico del sitio web. Estas
                                cookies permiten navegar por el sitio y utilizar sus funciones.
                            </li>
                            <li>
                                <strong>Cookies de preferencias:</strong> Estas cookies permiten que nuestro sitio web recuerde
                                información que cambia la forma en que el sitio se comporta o se ve, como su idioma preferido o la
                                región en la que se encuentra.
                            </li>
                            <li>
                                <strong>Cookies estadísticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro
                                sitio web, recopilando y reportando información de forma anónima.
                            </li>
                            <li>
                                <strong>Cookies de marketing:</strong> Se utilizan para rastrear a los visitantes en los sitios web. La
                                intención es mostrar anuncios que sean relevantes y atractivos para el usuario individual.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookies de terceros</h2>
                        <p>
                            Además de nuestras propias cookies, también podemos utilizar cookies de terceros para reportar
                            estadísticas de uso, entregar anuncios y así sucesivamente. Estas cookies pueden incluir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Google Analytics</li>
                            <li>Google Ads</li>
                            <li>Facebook Pixel</li>
                            <li>LinkedIn Insight Tag</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Control de cookies</h2>
                        <p>
                            Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su
                            dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si
                            hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio
                            y que algunos servicios y funcionalidades no funcionen.
                        </p>
                        <p className="mt-4">
                            Para obtener más información sobre cómo gestionar las cookies en su navegador, visite los siguientes
                            enlaces:
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">5. Cambios en nuestra política de cookies</h2>
                        <p>
                            Cualquier cambio que podamos hacer en nuestra política de cookies en el futuro se publicará en esta
                            página. Por favor, compruebe con frecuencia para ver cualquier actualización o cambio en nuestra política
                            de cookies.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">6. Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre nuestra política de cookies, no dude en ponerse en contacto con nosotros:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>
                                Email:{" "}
                                <p  className="text-yellow-600 hover:underline">
                                    info@brightcallemarketing.com
                                </p>
                            </li>
                            <li>
                                Teléfono:{" "}
                                <p className="text-yellow-600 hover:underline">
                                    +34 692 183 305
                                </p>
                            </li>
                            <li>Dirección: Calle de Serrano, 55, 28006 Madrid, España</li>
                        </ul>

                        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                            <p className="mb-4">
                                Para más información sobre cómo protegemos sus datos personales, consulte nuestra{" "}
                                <Link href="/privacy-policy" className="text-yellow-600 hover:underline">
                                    Política de Privacidad
                                </Link>
                                .
                            </p>
                            <p>
                                Al continuar utilizando nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
