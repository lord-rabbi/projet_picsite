"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 relative">
              <img
                src="/images/logo-original.png"
                alt="picApic Logo"
                className="w-56 h-14 object-contain brightness-0 invert relative z-10"
              />
              <div className="absolute inset-0 w-56 h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm"></div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t("home.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-200">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-200">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-200">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-200">
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-200">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span>contactpicapic@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <span>+243 996 577 810</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <span>RDC, Kinshasa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} <span className="text-blue-400 font-medium">picApic</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
