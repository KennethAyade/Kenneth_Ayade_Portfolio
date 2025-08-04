import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Instagram, Facebook } from 'lucide-react';

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-hero">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-50/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-16 w-8 h-8 bg-blue-500/20 rounded-lg animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-blue-600/30 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-blue-400/40 rounded-sm animate-float opacity-70" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="section-container">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Professional Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse-blue"></div>
              <span className="text-blue-700 font-medium text-sm">Available for new opportunities</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.5 
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text block mt-2">
                Kenneth Ayade
              </span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-4 font-light">
              Fullstack Developer
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">WordPress Specialist</span>
              <span className="text-gray-400">•</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React Developer</span>
              <span className="text-gray-400">•</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Team Leader</span>
              <span className="text-gray-400">•</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Accenture Associate</span>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              I build comprehensive web solutions from frontend to backend, specializing in{' '}
              <span className="text-blue-600 font-semibold">WordPress development</span> and React applications. 
              Currently working as an{' '}
              <span className="text-blue-600 font-semibold">App/Cloud Support Associate at Accenture</span>, 
              I combine enterprise cloud expertise with modern full-stack technologies including{' '}
              <span className="text-blue-600 font-semibold">Java Spring Boot</span>,{' '}
              <span className="text-blue-600 font-semibold">.NET C#</span>, and{' '}
              <span className="text-blue-600 font-semibold">Python</span>.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 px-4 sm:px-0"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-primary w-full sm:w-auto min-w-[220px] group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3">
                View My Portfolio
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className="btn-secondary w-full sm:w-auto min-w-[220px] group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3">
                Let's Connect
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Professional Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-4 mb-16"
          >
            <motion.a
              href="https://github.com/KennethAyade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/kenneth-ayade-60bb23197/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/kennethayade/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/ayadekenneth19/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={24} className="group-hover:scale-110 transition-transform" />
            </motion.a>
            
            <motion.a
              href="mailto:ayadekennethorland13@gmail.com"
              className="p-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Modern Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Discover More</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="cursor-pointer p-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white/70 transition-all"
              onClick={scrollToProjects}
            >
              <ArrowDown size={20} className="text-blue-600" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 