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
    <section id="about" className="section-padding bg-gradient-to-br from-white via-slate-50/60 to-blue-50/40 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate frontend developer with a keen eye for design and a commitment to creating 
              exceptional digital experiences that make a difference.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Crafting Digital Excellence
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  With over 3 years of experience in frontend development, I specialize in creating 
                  modern, responsive web applications that not only look great but also provide 
                  exceptional user experiences. My journey in web development has been driven by 
                  a passion for turning creative ideas into functional, beautiful digital solutions.
                </p>
                <p>
                  I've had the privilege of working on diverse projects ranging from fintech platforms 
                  to e-commerce solutions, each presenting unique challenges that have strengthened 
                  my problem-solving skills and technical expertise. I believe in writing clean, 
                  maintainable code and staying current with the latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to 
                  open-source projects, or learning about emerging technologies that can enhance 
                  user experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100/50 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100/50 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100/50 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Highlights */}
            <motion.div variants={itemVariants}>
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100/50 hover:shadow-lg transition-shadow duration-300 shadow-md"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {highlight.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
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