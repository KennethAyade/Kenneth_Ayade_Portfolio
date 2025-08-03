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
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "HTML5/CSS3", level: 95, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
        { name: "Next.js", level: 80, color: "bg-gray-800" }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git/GitHub", level: 85, color: "bg-gray-800" },
        { name: "Vite", level: 80, color: "bg-purple-500" },
        { name: "Webpack", level: 75, color: "bg-blue-400" },
        { name: "Figma", level: 80, color: "bg-pink-500" },
        { name: "Framer Motion", level: 85, color: "bg-purple-600" },
        { name: "Redux", level: 75, color: "bg-purple-700" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 75, color: "bg-green-600" },
        { name: "Express.js", level: 70, color: "bg-gray-600" },
        { name: "MongoDB", level: 70, color: "bg-green-500" },
        { name: "REST APIs", level: 80, color: "bg-blue-500" },
        { name: "JWT Auth", level: 75, color: "bg-red-500" },
        { name: "Firebase", level: 65, color: "bg-orange-400" }
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
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {skill.name}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${skill.color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-slate-50/80 to-blue-50/60 dark:bg-gray-900">
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
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use to bring 
              ideas to life in the digital world.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white/90 backdrop-blur-sm border border-gray-100/50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
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

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 backdrop-blur-sm border border-blue-100/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends, tools, and best practices in web development. Currently exploring Web3, 
                AI integration, and advanced React patterns.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Web3', 'AI/ML', 'GraphQL', 'Docker', 'AWS', 'Three.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
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