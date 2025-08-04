import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import LightweightContactForm from './LightweightContactForm';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "ayadekennethorland13@gmail.com",
      href: "mailto:ayadekennethorland13@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+639617800476",
      href: "tel:+639617800476"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "Available Worldwide",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/KennethAyade"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/kenneth-ayade-60bb23197/"
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/kennethayade/"
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/ayadekenneth19/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-hero">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">
              Get In Touch
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
            <p className="section-subtitle">
              Ready to bring your ideas to life? Let's discuss your project and create 
              something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="card-elevated p-10">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-gradient">
                  Let's Build Something Together
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Currently working as an 
                  <span className="text-blue-600 dark:text-blue-400 font-semibold"> App/Cloud Support Associate at Accenture</span>, 
                  I bring enterprise-level experience to every project. Whether you need WordPress development, 
                  fullstack solutions, cloud infrastructure support, or technical leadership for your team, 
                  I'm here to help bring your vision to life.
                </p>

                {/* Enhanced Contact Info Cards */}
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex items-center space-x-6 p-6 card-blue hover-lift hover-glow"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400 font-medium">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Social Links */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-xl text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="block group-hover:scale-110 transition-transform">
                          {social.icon}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div variants={itemVariants}>
              <LightweightContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 