import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that follows best practices"
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Focus",
      description: "Combining aesthetic design with intuitive user experiences for maximum impact"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-platform compatibility"
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Working effectively with teams, clients, and stakeholders to deliver exceptional results"
    }
  ];

  return (
    <section id="about" className="section-padding bg-section-alternate">
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
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
            <p className="section-subtitle">
              Dedicated IT professional and recent graduate from Cebu Institute of Technology University 
              with hands-on experience in fullstack web development and WordPress solutions. Currently working 
              as an App/Cloud Support Associate at Accenture, combining enterprise cloud expertise with 
              development skills.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <div className="card-elevated p-8 lg:p-10">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-gradient">
                  Building Digital Solutions End-to-End
                </h3>
                <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  <p>
                    As a dedicated fullstack developer and recent graduate from Cebu Institute of Technology 
                    University, I bring a comprehensive skill set spanning both frontend and backend technologies. 
                    Currently working at <span className="text-blue-600 dark:text-blue-400 font-semibold">Accenture as an App/Cloud Support Associate</span>, 
                    I combine cloud infrastructure expertise with my development background to deliver robust solutions.
                  </p>
                  <p>
                    My experience as Team Leader & Junior Web Developer at Creative Solutions, alongside my current role 
                    at Accenture, has strengthened my ability to work across the full technology stack - from application 
                    development to cloud infrastructure management. I specialize in WordPress site development, creating 
                    custom themes and implementing tailored solutions for diverse client needs.
                  </p>
                  <p>
                    My technical foundation includes modern frameworks like React.js and TypeScript, backend technologies 
                    including Java Spring Boot, .NET C#, and Python, plus experience with legacy systems using COBOL. 
                    Combined with my cloud support experience at Accenture, this diverse background allows me to adapt 
                    to various project requirements and technology stacks while ensuring scalable, cloud-ready solutions.
                  </p>
                  <p>
                    Currently serving as Project Lead for the Wheels On Go car rental application while maintaining 
                    my professional growth at Accenture, I demonstrate strong leadership skills and the ability to 
                    manage multiple responsibilities across different technology domains.
                  </p>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                  <motion.div 
                    className="text-center p-6 card-blue hover:scale-105 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-6 card-blue hover:scale-105 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-6 card-blue hover:scale-105 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Client Satisfaction</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Enhanced Highlights */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group card-elevated p-8 hover-lift hover-glow"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          {highlight.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 