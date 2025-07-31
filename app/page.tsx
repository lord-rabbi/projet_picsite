"use client"

import HeroSection from "@/components/hero-section"
import { motion } from "framer-motion"
import { Code, Smartphone, Palette, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Code,
      title: t("services.web_dev.title"),
      description: t("services.web_dev.description"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: t("services.mobile_dev.title"),
      description: t("services.mobile_dev.description"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: t("services.ui_ux.title"),
      description: t("services.ui_ux.description"),
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="bg-gray-900">
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">{t("services.title")}</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t("services.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
              >
                Découvrir tous nos services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-blue-100 mb-8">Contactez-nous dès aujourd'hui pour discuter de vos besoins</p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                {t("home.cta")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
