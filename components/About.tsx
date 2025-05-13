"use client"

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Code, Lightbulb, Compass, Zap, Heart } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("passion")
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const tabs = [
    { id: "passion", label: "Passion", icon: Heart },
    { id: "skills", label: "Expertise", icon: Code },
    { id: "approach", label: "Approach", icon: Lightbulb },
    { id: "vision", label: "Vision", icon: Compass },
  ]

  const tabContent = {
    passion:
      "I don't just write code—I craft digital experiences that resonate. Every line of code I write is fueled by a deep-seated passion for solving complex problems and creating solutions that make a difference in people's lives. Technology isn't just my career; it's my canvas for innovation.",

    skills:
      "My technical arsenal spans the full development spectrum: from crafting responsive frontends with React and Next.js to building robust backends with Java and Spring Boot. I architect systems that are not just functional, but secure, scalable, and optimized for performance—where elegant code meets practical application.",

    approach:
      "I approach development as both a science and an art. The science lies in writing clean, efficient code that performs flawlessly. The art is in creating intuitive interfaces and seamless experiences that delight users. This balance of technical precision and creative energy defines my work and sets it apart.",

    vision:
      "In a rapidly evolving digital landscape, I'm committed to staying at the cutting edge. I continuously explore emerging technologies and methodologies, pushing boundaries to create solutions that aren't just current—they're forward-thinking. My goal is to build applications that stand the test of time while embracing innovation.",
  }

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
      },
    }),
  }

  const title = "Transforming Ideas into Digital Reality"
  const titleWords = title.split(" ")

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-red-500 blur-3xl"></div>
      </div>

      <motion.div ref={containerRef} style={{ opacity, y }} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-500 flex items-center justify-center mb-6"
          >
            <Zap size={32} className="text-white" />
          </motion.div>

          <div className="mb-4 text-center">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={wordAnimation}
                className="inline-block mr-2 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-500"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-500 to-red-500 mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-500/20 rounded-lg blur-xl"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer who transforms ideas into powerful digital solutions. My journey
                in technology is driven by curiosity and a relentless pursuit of excellence.
              </p>

            
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden shadow-xl">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-3 whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? "text-white border-b-2 border-red-500"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    <tab.icon size={16} className="mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <p className="text-gray-300 leading-relaxed">{tabContent[activeTab as keyof typeof tabContent]}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-500/20 rounded-full blur-xl"></div>
            <a
              href="#contact"
              className="relative inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-red-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all"
            >
              Let's Create Something Amazing
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  )
}
