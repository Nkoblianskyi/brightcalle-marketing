"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }

    if (!formState.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formState.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
    }

    if (!formState.consent) {
      newErrors.consent = "Debes aceptar la política de privacidad"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
      })
    }, 3000)
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
            <p className="text-gray-700 mb-6">Gracias por contactar con nosotros. Te responderemos lo antes posible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} />
              </div>

              <div>
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formState.consent}
                  onCheckedChange={handleCheckboxChange}
                  className={errors.consent ? "border-red-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="consent"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Acepto la{" "}
                    <Link href="/privacy-policy" className="text-yellow-600 hover:underline">
                      Política de Privacidad
                    </Link>{" "}
                    y la{" "}
                    <Link href="/cookie-policy" className="text-yellow-600 hover:underline">
                      Política de Cookies
                    </Link>
                  </label>
                  {errors.consent && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.consent}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
