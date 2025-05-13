"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award, Calendar, Building } from "lucide-react"

const certifications = [
  {
    title: "Master Microservices with Spring Boot and Spring Cloud",
    description:
      "Spring Boot, Microservices, Spring Cloud, Docker, Kubernetes, Eureka, API Gateway, Resilience4J, Zipkin, Open API, Feign Client",
    issuedBy: "Udemy",
    date: "May 2025",
    image: "/microservices.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-11c6250f-d5d6-40ac-80d3-608c499779f0.pdf",
  },
  {
    title: "Docker Advanced",
    description:
      "Docker networking, Docker container orchestration, Docker Compose, Docker Swarm, Docker container storage, Docker volumes, Docker security, container security, authentication.",
    issuedBy: "Coursera",
    date: "April 2025",
    image: "/docker.jpg",
    link: "https://www.coursera.org/account/accomplishments/certificate/6LZPKOQO9Z7G",
  },
  {
    title: "Cloud Computing Fundamentals",
    description:
      "Cloud Computing, Cloud Infrastructure, Cloud Migration, Cloud Security, Computing Services, Containers, Docker, Hybrid Cloud, (IaaS), (PaaS), Private Cloud, Public Cloud, Software As A Service (SaaS), Virtualization.",
    issuedBy: "Microsoft",
    date: "Mai 2025",
    image: "/cloud.jpg",
    link: "https://skills.yourlearning.ibm.com/certificate/PLAN-2EC3A305F2C3",
  },
  {
    title: "Hands-on Machine Learning Deployment: A Practical Guide to Docker, Kubernetes, and KubeFlow Pipeline.",
    description:
      "Machine Learning Deployment, Docker, Kubernetes, KubeFlow Pipeline, MLOps, MLFlow, Containerization, Orchestration, Automated Workflows, Scalable ML Models",
    issuedBy: "Professeur Abdelhak Tali - Code 212 / Ensa Tanger ",
    date: "Mai 2025",
    image: "/hands.png",
    link: "https://drive.google.com/file/d/1qaQonzcfdAtPwSC0jrhHkxdNK_jU7-DR/view?usp=drive_link",
  },
  {
    title: "C intermediate",
    description:
      "Pointers, memory management, data structures, file I/O, dynamic allocation, modular programming, error handling, linked lists, recursion, advanced functions",
    issuedBy: "Sololearn",
    date: "August 2023",
    image: "/C .jpg",
    link: "https://drive.google.com/file/d/1lZlHX30wGHuOkR4mhNwSwHijhd4cAApH/view?usp=drive_link",
  },
  {
    title: "SQL intermediate",
    description:
      "SQL Intermediate, multi-table queries, data integrity, data manipulation, joins, subqueries, data relationships, complex queries, database optimization, data analysis",
    issuedBy: "Sololearn",
    date: "August 2023",
    image: "/SQL.jpg",
    link: "https://drive.google.com/file/d/1ZtVfyLZbqOWiyjDyccqZPqRYaShBCe-i/view?usp=drive_link",
  },
  {
    title: "PHP",
    description:
      "Object-oriented programming, sessions, file handling, form validation, error handling, database integration, APIs, authentication, security, MVC pattern",
    issuedBy: "Sololearn",
    date: "August 2023",
    image: "/PHP.jpg",
    link: "https://drive.google.com/file/d/13T9lMcqdRxySITLs8YtEroOEXb-3NG-D/view?usp=drive_link",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-950 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,69,0,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.1),transparent_50%)]"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-300 mb-4">
            Certifications
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional credentials that validate my expertise and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 transform transition-all duration-300 hover:shadow-orange-500/10 relative group"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-600/10 to-transparent rounded-tr-full transform -translate-x-12 translate-y-12 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>

              <div className="p-6 flex justify-between items-center relative z-10">
                <div className="flex-1 pr-4">
                  <motion.h3
                    className="text-xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {certification.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-sm mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {certification.description}
                  </motion.p>

                  <div className="flex flex-col space-y-2 mb-4">
                    <motion.div
                      className="flex items-center text-gray-400 text-xs"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      <Building size={14} className="mr-2 text-orange-500" />
                      <span>{certification.issuedBy}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center text-gray-400 text-xs"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <Calendar size={14} className="mr-2 text-orange-500" />
                      <span>{certification.date}</span>
                    </motion.div>
                  </div>

                  {/* Certificate Link */}
                  {certification.link && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    >
                      <a
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-600/20 text-orange-400 hover:text-white hover:from-orange-500 hover:to-red-600 transition-all duration-300 border border-orange-500/30 group-hover:border-orange-500/80"
                      >
                        <ExternalLink size={14} className="mr-2" />
                        View Certificate
                      </a>
                    </motion.div>
                  )}
                </div>

                <div className="flex-shrink-0 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="relative w-[200px] h-[110px] overflow-hidden rounded-lg border-2 border-gray-700/70 shadow-lg group-hover:shadow-orange-500/20 transition-all duration-500"
                  >
                    <img
                      src={certification.image || "/placeholder.svg"}
                      alt={certification.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay with shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent opacity-60"></div>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ width: "200%" }}
                    ></div>

                    {/* Certificate badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      <Award size={16} className="text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom decorative line */}
              <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
