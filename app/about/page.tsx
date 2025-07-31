"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Code2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const technologies = [
    { name: "PHP", logo: "/images/php.png" },
    { name: "MySQL", logo: "/images/mysql.png" },
    { name: "Flask", logo: "/images/flask.png" },
    { name: "AdonisJS", logo: "/images/adonis.png" },
    { name: "Go", logo: "/images/go.png" },
    { name: "Bootstrap", logo: "/images/boot.png" },
    { name: "Tailwind", logo: "images/tail.png" },
    { name: "Angular", logo: "/images/ang.png" },
    { name: "Flutter", logo: "/images/flut.png" },
    { name: "JavaScript", logo: "/images/js.png" },
  ]

  // Le tableau 'team' est maintenant défini dans les traductions
  // Nous allons le récupérer via t('about.team_members')
  const team = [
    {
      name: t("about.team_members.0.name"),
      role: t("about.team_members.0.role"),
      image: "/images/c.jpg",
      description: t("about.team_members.0.description"),
    },
    {
      name: t("about.team_members.1.name"),
      role: t("about.team_members.1.role"),
      image: "/images/d.jpg",
      description: t("about.team_members.1.description"),
    },
    {
      name: t("about.team_members.2.name"),
      role: t("about.team_members.2.role"),
      image: "/images/a.jpg",
      description: t("about.team_members.2.description"),
    },
    {
      name: t("about.team_members.3.name"),
      role: t("about.team_members.3.role"),
      image: "/images/e.jpg",
      description: t("about.team_members.3.description"),
    },
    {
      name: t("about.team_members.4.name"),
      role: t("about.team_members.4.role"),
      image: "/images/b.jpg",
      description: t("about.team_members.4.description"),
    },
  ]

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">{t("about.title")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">{t("about.story_title")}</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{t("about.story_text")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">{t("about.vision_title")}</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{t("about.vision_text")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">{t("about.team_title")}</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Code2 className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl font-bold text-white">{t("about.technologies_title")}</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-3 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
              >
                <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
