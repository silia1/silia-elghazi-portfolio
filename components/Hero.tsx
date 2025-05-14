"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon, DribbbleIcon as BehanceIcon } from 'lucide-react'
import GeometricBackground from '@/components/GeometricBackground'

export default function Hero() {
  return (
    <>
      {/* Fond géométrique animé */}
      <GeometricBackground />

      <section id="home" className="min-h-screen flex items-center relative z-10 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* LEFT SIDE — Texte */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-left mb-12 md:mb-0"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi,<br />
                I'm <span className="text-red-500">Silia</span><br />
                <span className="text-4xl md:text-5xl">Full Stack Developer</span>
              </h1>

              <div className="flex space-x-4 mt-8">
  <a 
    href="#contact"
    className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
  >
    Contact
  </a>

  <a 
    href="/silia.pdf"
    download
    className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
  >
    Download my CV
  </a>
</div>

<div className="flex space-x-6 mt-12">
  <a
    href="https://www.linkedin.com/in/silia1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-red-500 transition-colors"
  >
    <LinkedinIcon size={24} />
  </a>
  <a
    href="https://github.com/silia1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-red-500 transition-colors"
  >
    <GithubIcon size={24} />
  </a>
  <a
    href="https://silia1.github.io/portfolio/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-red-500 transition-colors"
  >
    <BehanceIcon size={24} />
  </a>
</div>

            </motion.div>

            {/* RIGHT SIDE — Blob + Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative flex justify-center"
            >
              <div className="relative w-[530px] h-[530px] translate-x-[-10%]">
                
                {/* SVG BLOB ROUGE */}
                <svg
                  viewBox="0 0 500 500"
                  className="absolute w-full h-full z-0"
                  style={{ filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))" }}
                >
                  <path
                    d="M409.5,290.8c-19.4,79.9-118.7,139.1-209.5,121.1S31.5,295.6,41.9,206.5S169.4,37.3,260.2,55.3S428.9,210.9,409.5,290.8z"
                    fill="#ef4444"
                  />
                </svg>

                {/* CLIP-PATH SVG MASQUE */}
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="blob" clipPathUnits="objectBoundingBox">
                      <path d="M0.82,0.57 C0.77,0.91,0.53,1,0.29,0.94 C0.06,0.88,-0.04,0.54,0.04,0.29 C0.12,0.04,0.36,-0.03,0.6,0.03 C0.83,0.08,0.87,0.22,0.82,0.57" />
                    </clipPath>
                  </defs>
                </svg>

                {/* IMAGE MASQUÉE */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-[71%] h-[71%] relative overflow-hidden [clip-path:url(#blob)]">
                    <Image
                      src="/JJ.png"
                      alt="Silia El Ghazi"
                      fill
                      className="object-contain object-[center_0%] scale-70 translate-x-[-1px] translate-y-[-1px]"
                      priority
                    />
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
