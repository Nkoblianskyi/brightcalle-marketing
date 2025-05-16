import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Privacidad - BrightCalle Marketing",
    description: "Información sobre cómo BrightCalle Marketing recopila, utiliza y protege sus datos personales.",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

                    <div className="prose prose-lg max-w-none">
                        <p>Última actualización: 16 de mayo de 2025</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introducción</h2>
                        <p>
                            En BrightCalle Marketing ("nosotros", "nuestro", "la empresa") respetamos su privacidad y nos
                            comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo
                            cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de
                            privacidad y cómo la ley le protege.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Datos que recopilamos sobre usted</h2>
                        <p>
                            Datos personales, o información personal, significa cualquier información sobre un individuo a partir de
                            la cual esa persona puede ser identificada. No incluye datos donde la identidad ha sido eliminada (datos
                            anónimos).
                        </p>
                        <p className="mt-4">
                            Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que
                            hemos agrupado de la siguiente manera:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>
                                <strong>Datos de identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador
                                similar.
                            </li>
                            <li>
                                <strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de
                                correo electrónico y números de teléfono.
                            </li>
                            <li>
                                <strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de
                                sesión, tipo y versión de navegador, configuración de zona horaria y ubicación, tipos y versiones de
                                complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que
                                utiliza para acceder a este sitio web.
                            </li>
                            <li>
                                <strong>Datos de perfil:</strong> incluye su nombre de usuario y contraseña, compras o pedidos
                                realizados por usted, sus intereses, preferencias, comentarios y respuestas a encuestas.
                            </li>
                            <li>
                                <strong>Datos de uso:</strong> incluye información sobre cómo utiliza nuestro sitio web, productos y
                                servicios.
                            </li>
                            <li>
                                <strong>Datos de marketing y comunicaciones:</strong> incluye sus preferencias para recibir marketing de
                                nuestra parte y de nuestros terceros, y sus preferencias de comunicación.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Cómo recopilamos sus datos personales</h2>
                        <p>Utilizamos diferentes métodos para recopilar datos de y sobre usted, incluyendo:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>
                                <strong>Interacciones directas:</strong> Puede proporcionarnos sus datos de identidad, contacto y
                                financieros al completar formularios o al comunicarse con nosotros por correo postal, teléfono, correo
                                electrónico o de otra manera.
                            </li>
                            <li>
                                <strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúa con nuestro sitio
                                web, podemos recopilar automáticamente datos técnicos sobre su equipo, acciones de navegación y
                                patrones. Recopilamos estos datos personales mediante cookies y otras tecnologías similares.
                            </li>
                            <li>
                                <strong>Terceros o fuentes disponibles públicamente:</strong> Podemos recibir datos personales sobre
                                usted de varios terceros y fuentes públicas.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Cómo utilizamos sus datos personales</h2>
                        <p>
                            Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus
                            datos personales en las siguientes circunstancias:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>
                                Donde necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.
                            </li>
                            <li>
                                Donde sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos
                                fundamentales no anulen esos intereses.
                            </li>
                            <li>Donde necesitemos cumplir con una obligación legal o regulatoria.</li>
                        </ul>
                        <p className="mt-4">
                            Generalmente, no nos basamos en el consentimiento como base legal para procesar sus datos personales,
                            excepto en relación con el envío de comunicaciones de marketing directo de terceros a usted a través de
                            correo electrónico o mensaje de texto.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">5. Divulgación de sus datos personales</h2>
                        <p>
                            Podemos compartir sus datos personales con las partes establecidas a continuación para los fines
                            establecidos en la sección 4 anterior:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
                            <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.</li>
                            <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
                            <li>
                                Terceros a quienes podemos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros
                                activos.
                            </li>
                        </ul>
                        <p className="mt-4">
                            Requerimos a todos los terceros que respeten la seguridad de sus datos personales y los traten de acuerdo
                            con la ley. No permitimos a nuestros proveedores de servicios terceros utilizar sus datos personales para
                            sus propios fines y solo les permitimos procesar sus datos personales para fines específicos y de acuerdo
                            con nuestras instrucciones.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">6. Seguridad de datos</h2>
                        <p>
                            Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan,
                            utilicen o accedan de forma no autorizada, se modifiquen o divulguen accidentalmente. Además, limitamos el
                            acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una
                            necesidad comercial de conocer. Solo procesarán sus datos personales según nuestras instrucciones y están
                            sujetos a un deber de confidencialidad.
                        </p>
                        <p className="mt-4">
                            Hemos implementado procedimientos para tratar cualquier sospecha de violación de datos personales y le
                            notificaremos a usted y a cualquier regulador aplicable de una violación donde estamos legalmente
                            obligados a hacerlo.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">7. Retención de datos</h2>
                        <p>
                            Solo conservaremos sus datos personales durante el tiempo que sea necesario para cumplir con los fines
                            para los que los recopilamos, incluyendo para satisfacer cualquier requisito legal, contable o de
                            informes.
                        </p>
                        <p className="mt-4">
                            Para determinar el período de retención apropiado para los datos personales, consideramos la cantidad,
                            naturaleza y sensibilidad de los datos personales, el riesgo potencial de daño por uso o divulgación no
                            autorizados de sus datos personales, los fines para los que procesamos sus datos personales y si podemos
                            lograr esos fines a través de otros medios, y los requisitos legales aplicables.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">8. Sus derechos legales</h2>
                        <p>
                            Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos en relación con
                            sus datos personales:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Solicitar acceso a sus datos personales.</li>
                            <li>Solicitar la corrección de sus datos personales.</li>
                            <li>Solicitar la eliminación de sus datos personales.</li>
                            <li>Oponerse al procesamiento de sus datos personales.</li>
                            <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
                            <li>Solicitar la transferencia de sus datos personales.</li>
                            <li>Derecho a retirar el consentimiento.</li>
                        </ul>
                        <p className="mt-4">Si desea ejercer cualquiera de los derechos establecidos anteriormente, contáctenos.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">9. Cambios a esta política de privacidad</h2>
                        <p>
                            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Proporcionaremos
                            una nueva política de privacidad cuando hagamos actualizaciones sustanciales.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">10. Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos
                            en:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>
                                Email:{" "}
                                <a href="mailto:info@brightcallemarketing.com" className="text-yellow-600 hover:underline">
                                    info@brightcallemarketing.com
                                </a>
                            </li>
                            <li>
                                Teléfono:{" "}
                                <a href="tel:+34692183305" className="text-yellow-600 hover:underline">
                                    +34 692 183 305
                                </a>
                            </li>
                            <li>Dirección: Calle de Serrano, 55, 28006 Madrid, España</li>
                        </ul>

                        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                            <p className="mb-4">
                                Para más información sobre cómo utilizamos cookies en nuestro sitio web, consulte nuestra{" "}
                                <Link href="/cookie-policy" className="text-yellow-600 hover:underline">
                                    Política de Cookies
                                </Link>
                                .
                            </p>
                            <p>Al utilizar nuestro sitio web, usted acepta los términos de esta Política de Privacidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
