import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import { projects, projectCategories } from '../../data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

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

  const ProjectCard = ({ project, onOpenModal }) => (
    <motion.div
      layout
      variants={itemVariants}
      className="group card-project overflow-hidden hover-lift hover-glow flex flex-col"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {/* Enhanced Project Image */}
      <div className="h-56 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
          <div className="text-white p-6 w-full">
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-blue-100 text-sm">{project.category}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} className="text-white" />
          </motion.a>
          {project.githubUrl !== '#' && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} className="text-white" />
            </motion.a>
          )}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 left-6 w-3 h-3 bg-white/30 rounded-full"></div>
        <div className="absolute top-12 left-8 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-8 w-4 h-4 bg-white/10 rounded-full"></div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-4 py-2 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            {project.category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-300 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{project.year}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Enhanced Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-100"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1.5 text-xs text-blue-600 bg-blue-50 rounded-lg font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Enhanced Action Buttons - Now at bottom */}
        <div className="flex space-x-3 mt-auto">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-center text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Live 
            <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
          <motion.button
            onClick={() => onOpenModal(project)}
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Details 
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="section-padding bg-section-blue">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title-blue section-title-accent">
              WordPress Development Portfolio
            </h2>
            <p className="section-subtitle-blue mb-12">
              A showcase of professional WordPress websites built with custom themes, advanced functionality, 
              and optimized performance. Each project demonstrates expertise in WordPress development and client-focused solutions.
            </p>

            {/* Enhanced Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {projectCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-white/90 backdrop-blur-sm border border-blue-100 text-blue-700 hover:bg-blue-50 hover:border-blue-200 shadow-md hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpenModal={openProjectModal} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="card-blue p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Interested in working together? Let's discuss your project and create 
                something amazing with WordPress or any modern technology stack!
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
                              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border dark:border-gray-800"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-8 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-t-3xl">
                <button
                  onClick={closeProjectModal}
                  className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
                >
                  <X size={24} />
                </button>
                
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                    {selectedProject.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
                
                <div className="flex space-x-4 mt-6">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Live
                  </a>
                  {selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-white/20 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges & Results */}
                <div className="grid md:grid-cols-2 gap-8">
                  {selectedProject.challenges && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Challenges</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>
                  )}

                  {selectedProject.results && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Results</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.results}
                      </p>
                    </div>
                  )}
                </div>

                {/* Project Status */}
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-xl border dark:border-blue-800/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Project Status</h4>
                      <p className="text-gray-600 dark:text-gray-400">Year: {selectedProject.year}</p>
                    </div>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {selectedProject.status || 'Completed'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 