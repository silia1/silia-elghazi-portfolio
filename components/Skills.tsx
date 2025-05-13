"use client"

import { motion } from "framer-motion"
import {
  SiNestjs,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiNumpy,
  SiPytorch,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGitlab,
  SiGithub,
  SiLinux,
  SiOracle,
  SiSpring,
  SiDotnet,
  SiJenkins,
  SiOpencv,
} from "react-icons/si"

const skills = {
  Frontend: [
    { name: "React", icon: <SiReact size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "JavaScript", icon: <SiJavascript size={32} /> },
    { name: "HTML", icon: <SiHtml5 size={32} /> },
    { name: "CSS", icon: <SiCss3 size={32} /> },
  ],
  Backend: [
    { name: "NestJS", icon: <SiNestjs size={32} /> },
    { name: "Python", icon: <SiPython size={32} /> },
    { name: "Spring Boot", icon: <SiSpring size={32} /> },
    { name: ".NET", icon: <SiDotnet size={32} /> },
    { name: "Java", icon: <img src="java.png" alt="Java" className="w-8 h-8" /> },
    { name: "C", icon: <img src="c.png" alt="C" className="w-8 h-8" /> },
    { name: "C++", icon: <img src="c-.png" alt="C++" className="w-8 h-8" /> },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb size={32} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
    { name: "MySQL", icon: <SiMysql size={32} /> },
    { name: "Oracle", icon: <SiOracle size={32} /> },
  ],
  DevOps: [
    { name: "Docker", icon: <SiDocker size={32} /> },
    { name: "Kubernetes", icon: <SiKubernetes size={32} /> },
    { name: "GitHub", icon: <SiGithub size={32} /> },
    { name: "GitLab", icon: <SiGitlab size={32} /> },
    { name: "Linux", icon: <SiLinux size={32} /> },
    { name: "CI/CD Pipeline", icon: <span className="text-lg">🛠️</span> },
    { name: "Jenkins", icon: <SiJenkins size={32} /> },
  ],
  "Machine Learning": [
    { name: "TensorFlow", icon: <SiTensorflow size={32} /> },
    { name: "PyTorch", icon: <SiPytorch size={32} /> },
    { name: "NumPy", icon: <SiNumpy size={32} /> },
    { name: "OpenCV", icon: <SiOpencv size={32} /> },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-red-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {techs.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="group flex flex-col items-center text-sm hover:text-red-500 transition duration-300"
                  >
                    <div className="bg-gray-700 p-3 rounded-full shadow-inner group-hover:ring-2 group-hover:ring-red-500 transition-all">
                      {icon}
                    </div>
                    <span className="mt-2">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
