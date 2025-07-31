"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Palette, Zap, Globe, Database, Shield, Rocket } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("services.web_dev.title"),
      description: t("services.web_dev.description"),
      features: ["Sites vitrines responsives", "Plateformes e-commerce", "Applications SaaS", "APIs REST & GraphQL"],
      color: "from-blue-500 to-cyan-500",
      image: "/images/web.jpg",
    },
    {
      icon: Smartphone,
      title: t("services.mobile_dev.title"),
      description: t("services.mobile_dev.description"),
      features: [
        "Applications iOS natives",
        "Applications Android natives",
        "Apps cross-platform Flutter",
        "Intégration API & Backend",
      ],
      color: "from-purple-500 to-pink-500",
      image: "/images/ap.png",
    },
    {
      icon: Palette,
      title: t("services.ui_ux.title"),
      description: t("services.ui_ux.description"),
      features: [
        "Design d'interfaces modernes",
        "Prototypage interactif",
        "Tests utilisateurs",
        "Design system & guidelines",
      ],
      color: "from-pink-500 to-rose-500",
      image: "/images/ux.jpg",
    },
    {
      icon: Zap,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      features: [
        "Maintenance préventive",
        "Optimisation des performances",
        "Mises à jour sécuritaires",
        "Support technique 24/7",
      ],
      color: "from-yellow-500 to-orange-500",
      image: "/images/maint.png",
    },
  ]

  const additionalServices = [
    {
      icon: Globe,
      title: "Hébergement & Déploiement",
      description: "Solutions d'hébergement sécurisées et déploiement automatisé",
    },
    {
      icon: Database,
      title: "Architecture & Base de données",
      description: "Conception d'architectures scalables et optimisation BDD",
    },
    {
      icon: Shield,
      title: "Sécurité & Conformité",
      description: "Audit sécurité, RGPD et mise en conformité",
    },
    {
      icon: Rocket,
      title: "Conseil & Stratégie",
      description: "Accompagnement stratégique et conseil en transformation digitale",
    },
  ]

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">{t("services.title")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("services.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}>
                      Demander un devis
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-xl">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`}></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Services Complémentaires</h2>
            <p className="text-xl text-gray-400">Une gamme complète de services pour accompagner votre croissance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Besoin d'un service personnalisé ?</h2>
            <p className="text-xl text-blue-100 mb-8">Contactez-nous pour discuter de vos besoins spécifiques</p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
