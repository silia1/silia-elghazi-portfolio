'use client'

import { motion } from 'framer-motion'
import { InboxIcon as EnvelopeIcon, PhoneIcon, LinkedinIcon } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Contact
        </motion.h2>
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <EnvelopeIcon className="w-6 h-6 mr-4 text-red-500" />
              <a href="mailto:elghazisilia@gmail.com" className="hover:text-red-500 transition-colors">
                elghazisilia@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <LinkedinIcon className="w-6 h-6 mr-4 text-red-500" />
              <a href="https://linkedin.com/in/silia-el-ghazi" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                linkedin.com/in/silia-el-ghazi
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

