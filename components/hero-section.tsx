"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function HeroSection() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Logo animé en très grand */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative">
              <img
                src="/images/logo-original.png"
                alt="picApic Logo"
                className="w-96 md:w-[500px] h-24 md:h-32 mx-auto object-contain brightness-0 invert"
              />
              {/* Effet de glow permanent très visible */}
              <div className="absolute inset-0 w-96 md:w-[500px] h-24 md:h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 opacity-40 blur-lg"></div>
              {/* Animation de pulsation */}
              <div className="absolute inset-0 w-96 md:w-[500px] h-24 md:h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">{t("home.hero_title")}</p>
            <p className="text-lg text-gray-400">{t("home.hero_subtitle")}</p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("home.description")}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                {t("home.cta")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Services Icons */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-8 mt-16">
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-2 text-gray-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-sm">Web</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-2 text-gray-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-purple-400" />
              </div>
              <span className="text-sm">Mobile</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-2 text-gray-300">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center">
                <Palette className="w-8 h-8 text-pink-400" />
              </div>
              <span className="text-sm">Design</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
