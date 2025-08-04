import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/KennethAyade'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/kenneth-ayade-60bb23197/'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      href: 'https://www.instagram.com/kennethayade/'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      href: 'https://www.facebook.com/ayadekenneth19/'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:ayadekennethorland13@gmail.com'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <motion.h3 
              className="text-3xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Kenneth Ayade
            </motion.h3>
            <motion.p 
              className="text-blue-100 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Fullstack Developer and App/Cloud Support Associate at Accenture, specializing in WordPress solutions 
              and modern web technologies. Passionate about creating comprehensive digital experiences from frontend 
              to backend with enterprise-level cloud expertise.
            </motion.p>
            
            {/* Enhanced Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl text-blue-200 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl group border border-white/20"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <span className="block group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4 
              className="text-xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-blue-100 hover:text-white transition-colors duration-200 cursor-pointer block font-medium hover:translate-x-2 transition-transform"
                    whileHover={{ x: 8 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4 
              className="text-xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h4>
            <motion.div 
              className="space-y-4 text-blue-100 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>
                <a 
                  href="mailto:ayadekennethorland13@gmail.com"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  ayadekennethorland13@gmail.com
                </a>
              </p>
              <p className="font-medium">Available for freelance projects</p>
              <p className="font-medium">Remote work worldwide</p>
            </motion.div>

            {/* Enhanced Resume Download */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  Download Resume
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bottom Footer */}
        <motion.div 
          className="border-t border-white/20 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-blue-100 text-sm">
              <span>© {currentYear} Kenneth Ayade. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-blue-100 text-sm">
              <span>Built with</span>
              <Heart size={16} className="text-red-400 mx-1" />
              <span>using React & Vite</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 