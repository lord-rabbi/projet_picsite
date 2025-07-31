"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LayoutDashboard, FolderOpen, Plus, Edit, Trash2, LogOut, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  category: "web" | "mobile" | "design"
}

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "E-commerce Fashion",
      description: "Plateforme e-commerce moderne avec paiement intégré",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com",
      category: "web",
    },
    {
      id: 2,
      title: "App Mobile Banking",
      description: "Application mobile de banque avec authentification biométrique",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com",
      category: "mobile",
    },
  ])

  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    category: "web" as "web" | "mobile" | "design",
  })

  const handleAddProject = () => {
    setIsAddingProject(true)
    setFormData({
      title: "",
      description: "",
      image: "",
      link: "",
      category: "web",
    })
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link,
      category: project.category,
    })
  }

  const handleSaveProject = () => {
    if (editingProject) {
      // Update existing project
      setProjects(projects.map((p) => (p.id === editingProject.id ? { ...editingProject, ...formData } : p)))
      setEditingProject(null)
    } else {
      // Add new project
      const newProject: Project = {
        id: Math.max(...projects.map((p) => p.id)) + 1,
        ...formData,
      }
      setProjects([...projects, newProject])
      setIsAddingProject(false)
    }

    setFormData({
      title: "",
      description: "",
      image: "",
      link: "",
      category: "web",
    })
  }

  const handleDeleteProject = (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
      setProjects(projects.filter((p) => p.id !== id))
    }
  }

  const handleCancel = () => {
    setEditingProject(null)
    setIsAddingProject(false)
    setFormData({
      title: "",
      description: "",
      image: "",
      link: "",
      category: "web",
    })
  }

  const tabs = [
    { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
    { id: "projects", label: "Projets", icon: FolderOpen },
  ]

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">pA</span>
              </div>
              <h1 className="text-xl font-bold text-white">Administration picApic</h1>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "dashboard" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h2 className="text-3xl font-bold text-white mb-8">Tableau de bord</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2">Total Projets</h3>
                    <p className="text-3xl font-bold text-blue-400">{projects.length}</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2">Projets Web</h3>
                    <p className="text-3xl font-bold text-green-400">
                      {projects.filter((p) => p.category === "web").length}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2">Apps Mobile</h3>
                    <p className="text-3xl font-bold text-purple-400">
                      {projects.filter((p) => p.category === "mobile").length}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Projets récents</h3>
                  <div className="space-y-3">
                    {projects.slice(0, 3).map((project) => (
                      <div key={project.id} className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{project.title}</h4>
                          <p className="text-gray-400 text-sm">{project.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">Gestion des Projets</h2>
                  <Button onClick={handleAddProject} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un projet
                  </Button>
                </div>

                {/* Add/Edit Form */}
                {(isAddingProject || editingProject) && (
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      {editingProject ? "Modifier le projet" : "Ajouter un projet"}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Titre</label>
                        <Input
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Catégorie</label>
                        <Select
                          value={formData.category}
                          onValueChange={(value: "web" | "mobile" | "design") =>
                            setFormData({ ...formData, category: value })
                          }
                        >
                          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web">Web</SelectItem>
                            <SelectItem value="mobile">Mobile</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-white font-medium mb-2">Description</label>
                        <Textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Image URL</label>
                        <Input
                          value={formData.image}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Lien du projet</label>
                        <Input
                          value={formData.link}
                          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4 mt-6">
                      <Button onClick={handleSaveProject} className="bg-green-600 hover:bg-green-700 text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Sauvegarder
                      </Button>
                      <Button
                        onClick={handleCancel}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Annuler
                      </Button>
                    </div>
                  </div>
                )}

                {/* Projects List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              project.category === "web"
                                ? "bg-blue-500/20 text-blue-400"
                                : project.category === "mobile"
                                  ? "bg-purple-500/20 text-purple-400"
                                  : "bg-pink-500/20 text-pink-400"
                            }`}
                          >
                            {project.category}
                          </span>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditProject(project)}
                              className="border-gray-600 text-gray-300 hover:bg-gray-700"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteProject(project.id)}
                              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
