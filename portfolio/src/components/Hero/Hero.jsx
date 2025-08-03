import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/60">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.5 
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text animate-glow">
                Kenneth Ayade
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Frontend Developer & 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> UI/UX Enthusiast</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              I create exceptional digital experiences that combine beautiful design with 
              robust functionality. Specializing in React.js, modern web technologies, 
              and user-centered development.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4 sm:px-0"
          >
            <motion.button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2 min-w-[200px] justify-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ExternalLink size={20} />
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 min-w-[200px] justify-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <Mail size={20} />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              href="https://github.com/kennethayade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/kennethayade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:ayadekennethorland13@gmail.com"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="cursor-pointer"
              onClick={scrollToProjects}
            >
              <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/60 rounded-full opacity-60 animate-float"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-16 w-6 h-6 bg-purple-400/60 rounded-full opacity-40 animate-float"
        animate={{ 
          y: [0, -30, 0],
          x: [0, -15, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-green-400/60 rounded-full opacity-50 animate-float"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
};

export default Hero; 