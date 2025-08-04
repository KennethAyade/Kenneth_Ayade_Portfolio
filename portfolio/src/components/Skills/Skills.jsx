import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "HTML5/CSS3", level: 95, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
        { name: "WordPress", level: 95, color: "bg-blue-700" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Java", level: 85, color: "bg-red-600" },
        { name: "Spring Boot", level: 80, color: "bg-green-600" },
        { name: ".NET C#", level: 80, color: "bg-purple-600" },
        { name: "Python", level: 75, color: "bg-blue-500" },
        { name: "COBOL", level: 70, color: "bg-gray-600" },
        { name: "REST APIs", level: 85, color: "bg-blue-500" }
      ]
    },
    {
      title: "Tools & Development",
      skills: [
        { name: "WordPress Development", level: 95, color: "bg-blue-700" },
        { name: "Git/GitHub", level: 85, color: "bg-gray-800" },
        { name: "Cloud Support (Accenture)", level: 80, color: "bg-blue-600" },
        { name: "Application Support", level: 80, color: "bg-green-600" },
        { name: "JWT Auth", level: 80, color: "bg-red-500" },
        { name: "Database Design", level: 75, color: "bg-green-500" },
        { name: "Project Leadership", level: 85, color: "bg-purple-500" },
        { name: "Agile/Scrum", level: 80, color: "bg-orange-500" }
      ]
    }
  ];

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

  const SkillBar = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      className="mb-6"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </span>
        <span className="text-sm text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
        <motion.div
          className={`h-3 rounded-full ${skill.color} shadow-lg relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 animate-shimmer"></div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-section-alternate">
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
              Technical Skills & Leadership
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
            <p className="section-subtitle">
              A comprehensive overview of my technical expertise spanning fullstack development, 
              from WordPress solutions to enterprise-level applications with modern technologies. 
              Currently working as an App/Cloud Support Associate at Accenture, bringing enterprise 
              cloud experience to every project.
            </p>
          </motion.div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card-elevated p-8 hover-lift hover-glow group"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={categoryIndex * 6 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="card-blue p-12 max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Continuous Growth & Learning
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                As a recent CIT-U graduate currently working as an App/Cloud Support Associate at Accenture, 
                I'm committed to expanding my technical expertise across the full development stack. My current 
                role provides hands-on experience with enterprise-level cloud infrastructure and application 
                support, while my diverse background from modern frameworks to legacy systems like COBOL gives 
                me unique problem-solving perspectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Cloud Architecture', 'Azure/AWS', 'DevOps', 'Enterprise Applications', 'Microservices', 'System Monitoring'].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 