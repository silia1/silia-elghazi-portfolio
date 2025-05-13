"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { GithubIcon, ExternalLinkIcon, X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Internship Management Platform",
    description: "Spring Boot, React.js, PostgreSQL,Python",
    image: "/Mirai2.jpg",
    github: "https://github.com/silia1/MIRAI.git",
    demo: "/Mirai.mp4",
  },
  {
    title: "EMOVISION – Real-Time Emotion Detection with Computer Vision",
    description: "Python, OpenCV, TensorFlow, Keras, NumPy, CNN, Streamlit, Flask",
    image: "/9.png",
    github: "https://github.com/silia1/EMOVISION-MLOPS-project-.git",
  },
  {
    title: "Children's Activity Management",
    description: "Laravel, Vue.js, PL/SQL, Docker",
    image: "/A.jfif",
    github: "https://github.com/silia1/Children-s-Activity-Management-Plateform.git",
    demo: "https://youtu.be/e1oxxrIgGJA",
  },
  {
    title: "Club Activity Management",
    description: "Nest.js, SQL, Next.js",
    image: "/clubhub.png",
    github: "https://github.com/silia1/Clubhub-Project.git",
    demo: "https://youtu.be/ksEMMN1GQpQ",
  },
]
const miniProjects = [
  {
    title: "Deploiement sur Kubernetes avec Jenkins",
    description: "Docker, Jenkins, sonarqube, trivy, argo",
    image: "/new2.png",
    github: "https://github.com/silia1/Deploiement-sur-Kubernetes-avec-Jenkins.git",
  },
  {
    title: "CICD Pipeline To Deploy To Kubernetes Cluster Using Jenkins",
    description: "Docker, Jenkins, Kubernetes",
    image: "/new.png",
    github: "https://github.com/silia1/project-CICD-Pipeline-To-Deploy-To-Kubernetes-Cluster-Using-Jenkins.git",
  },
  {
    title: "Deployed-Java-Applications-with-Docker-and-Kubernetes",
    description: "Java, Docker, Kubernetes",
    image: "/3.png",
    github: "https://github.com/silia1/Deployed-Java-Applications-with-Docker-and-Kubernetes.git",
  },
  {
    title: "CI/CD Pipeline using GitHub Action's",
    description: "Docker, Github Actions",
    image: "/4.png",
    github: "https://github.com/silia1/CI-CD-Pipeline-using-GitHub-Action-s.git",
  },
  {
    title: "JAVAFX-application-gestion-Ecole",
    description: "Java, JAVAFX",
    image: "/5.jpeg",
    github: "https://github.com/silia1/JAVAFX-application-gestion-Ecole-.git",
  },
  {
    title: "Chat using websocket",
    description: "Spring Boot, Websocket",
    image: "/6.png",
    github: "https://github.com/silia1/auth-with-email-validation-using-Spring-boot-Spring-security.git",
  },
  {
    title: "Student System Management",
    description: "Spring MVC, Thymeleaf, Spring Data JPA, MySQL database",
    image: "/7.png",
    github: "https://github.com/silia1/spring-boot-student-management-.git",
  },
  {
    title: "JSP Servlet",
    description: "Spring MVC, Thymeleaf, Spring Data JPA, MySQL database",
    image: "/11.png",
    github: "https://github.com/silia1/une-Application-Web-en-JSP-Servlet.git",
  },
  {
    title: "Authentification using spring security - email validation",
    description: "Spring Boot, Spring Security",
    image: "/22.jpg",
    github: "https://github.com/silia1/une-Application-Web-en-JSP-Servlet.git",
  },
]

export default function Projects() {
  const [showVideo, setShowVideo] = useState(false)
  const [videoUrl, setVideoUrl] = useState("")
  const [activeTab, setActiveTab] = useState("main")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 8
  const totalPages = Math.ceil(miniProjects.length / projectsPerPage)

  const containerRef = useRef<HTMLDivElement>(null)

  const openVideo = (url: string) => {
    setVideoUrl(url)
    setShowVideo(true)
  }

  const closeVideo = () => {
    setShowVideo(false)
    setVideoUrl("")
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const currentMiniProjects = miniProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  const scrollToProjects = () => {
    containerRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A collection of my work showcasing my skills and experience in software development
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-800 rounded-lg">
            <button
              onClick={() => setActiveTab("main")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeTab === "main"
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white",
              )}
            >
              Main Projects
            </button>
            <button
              onClick={() => setActiveTab("mini")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeTab === "mini"
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white",
              )}
            >
              Mini Projects
            </button>
          </div>
        </div>

        {/* Main Projects */}
        <AnimatePresence mode="wait">
          {activeTab === "main" && (
            <motion.div
              key="main-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 group"
                >
                  <div className="relative overflow-hidden">
                    <div className="h-56 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent pt-10">
                      <p className="text-gray-300 text-sm">{project.description}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-orange-500 transition-colors"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          <GithubIcon size={20} />
                        </motion.a>
                        {project.demo && (
                          <motion.button
                            onClick={() => openVideo(project.demo!)}
                            className="text-gray-300 hover:text-orange-500 transition-colors"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            aria-label="View demo"
                          >
                            <ExternalLinkIcon size={20} />
                          </motion.button>
                        )}
                      </div>
                    </div>

                    {project.demo && (
                      <button
                        onClick={() => openVideo(project.demo!)}
                        className="mt-3 text-sm px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                      >
                        View Demo
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Mini Projects */}
          {activeTab === "mini" && (
            <motion.div
              key="mini-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {currentMiniProjects.map((miniProject, index) => (
                  <motion.div
                    key={miniProject.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    onHoverStart={() => setHoveredProject(index)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-700 group flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden">
                      <div className="h-36 overflow-hidden">
                        <Image
                          src={miniProject.image || "/placeholder.svg"}
                          alt={miniProject.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.a
                          href={miniProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-900 bg-opacity-80 rounded-full text-white hover:text-orange-500 transition-colors"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          <GithubIcon size={18} />
                        </motion.a>
                      </div>
                    </div>

                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <h3 className="text-sm font-bold text-white mb-1 line-clamp-2">{miniProject.title}</h3>
                      <p className="text-gray-400 text-xs mt-1">{miniProject.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className={cn(
                        "p-2 rounded-full transition-all duration-200",
                        currentPage === 0
                          ? "text-gray-600 cursor-not-allowed"
                          : "text-gray-300 hover:text-white hover:bg-gray-700",
                      )}
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <div className="text-gray-300 text-sm">
                      {currentPage + 1} / {totalPages}
                    </div>

                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages - 1}
                      className={cn(
                        "p-2 rounded-full transition-all duration-200",
                        currentPage === totalPages - 1
                          ? "text-gray-600 cursor-not-allowed"
                          : "text-gray-300 hover:text-white hover:bg-gray-700",
                      )}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-full max-w-3xl border border-gray-700 relative"
            >
              <div className="p-2 absolute top-0 right-0 z-10">
                <button
                  onClick={closeVideo}
                  className="bg-gray-900 bg-opacity-70 text-gray-300 hover:text-white p-2 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="aspect-video">
                {videoUrl.includes("youtu") ? (
                  <iframe
                    src={videoUrl
                      .replace("youtu.be/", "youtube.com/embed/")
                      .replace("youtube.com/watch?v=", "youtube.com/embed/")}
                    className="w-full h-full"
                    allowFullScreen
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                ) : (
                  <video src={videoUrl} controls autoPlay className="w-full h-full">
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating back to top button */}
      <motion.button
        onClick={scrollToProjects}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-full shadow-lg z-20 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ChevronLeft size={24} className="rotate-90" />
      </motion.button>
    </section>
  )
}
