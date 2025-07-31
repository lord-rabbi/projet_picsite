"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/admin", label: t("nav.admin") },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Version TRÈS GRANDE et lisible pour la navbar */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <img
                src="/images/logo-original.png"
                alt="picApic Logo"
                className="w-64 h-16 object-contain brightness-0 invert transition-all duration-300 group-hover:scale-105"
              />
              {/* Effet de glow permanent pour la visibilité */}
              <div className="absolute inset-0 w-64 h-16 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 blur-sm"></div>
              {/* Effet de glow renforcé au hover */}
              <div className="absolute inset-0 w-64 h-16 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  pathname === item.href ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="text-gray-300 hover:text-white"
              >
                {language.toUpperCase()}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="text-gray-300 hover:text-white"
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      pathname === item.href
                        ? "text-blue-400 bg-gray-700"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
