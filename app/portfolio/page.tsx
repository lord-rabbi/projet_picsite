"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X, Filter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  category: "web" | "mobile" | "design"
}

export default function PortfolioPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: t("portfolio.projects.0.title"),
      description: t("portfolio.projects.0.description"),
      image: "/images/cap1.png",
      link: "https://supremeconstruction.click/",
      category: "web",
    },
    {
      id: 2,
      title: t("portfolio.projects.1.title"),
      description: t("portfolio.projects.1.description"),
      image: "/images/cap2.png",
      link: "https://picapic.top",
      category: "web",
    },
  ]

  const categories = [
    { id: "all", label: t("portfolio.all") },
    { id: "web", label: t("portfolio.web") },
    { id: "mobile", label: t("portfolio.mobile") },
    { id: "design", label: t("portfolio.design") },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="bg-gray-900 min-h-screen">
      {}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">{t("portfolio.title")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("portfolio.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">Filtrer par :</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                          {t("portfolio.view_project")}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 line-clamp-2">{project.description}</p>
                    <div className="mt-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === "web"
                            ? "bg-blue-500/20 text-blue-400"
                            : project.category === "mobile"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-pink-500/20 text-pink-400"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      selectedProject.category === "web"
                        ? "bg-blue-500/20 text-blue-400"
                        : selectedProject.category === "mobile"
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-pink-500/20 text-pink-400"
                    }`}
                  >
                    {selectedProject.category}
                  </span>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(selectedProject.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("portfolio.view_project")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
