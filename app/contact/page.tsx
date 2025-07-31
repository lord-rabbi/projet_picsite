"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Message envoyé avec succès !")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleWhatsApp = () => {
    const message = `Bonjour, je souhaite discuter d'un projet avec picApic.`
    const whatsappUrl = `https://wa.me/243996577810?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Section Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">{t("contact.title")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Infos de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Restons en contact</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Nous sommes là pour répondre à toutes vos questions et discuter de vos projets.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400">contactpicapic@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Téléphone / WhatsApp</h3>
                    <p className="text-gray-400">+243 996 577 810</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Adresse</h3>
                    <p className="text-gray-400">RDC, Kinshasa</p>
                  </div>
                </div>
              </div>

              <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("contact.whatsapp")}
              </Button>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">{t("contact.name")}</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">{t("contact.email")}</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">{t("contact.subject")}</label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">{t("contact.message")}</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t("contact.send")}
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
