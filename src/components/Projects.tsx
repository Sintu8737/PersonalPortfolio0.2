import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {  Calendar, ArrowRight,  Rocket, Eye, GitBranch, Zap, Layers, Box } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: 'miFIN',
      duration: '939 Days',
      type: 'Loan Origination Product',
      description: 'Enterprise-grade loan origination system revolutionizing customer onboarding and credit assessment workflows.',
      features: [
        'AI-Powered Credit Scoring',
        'Real-time Risk Assessment',
        'Multi-Bank Connectivity'
      ],
      technologies: ['React Query', 'Redux Toolkit', 'TypeScript', 'Chakra UI', 'useForm','React Hook Form','Zustand','CI/CD'],
      highlights: ['40% Faster Processing', '99.9% Uptime', '50K+ Daily Users'],
      liveUrl: 'https://wwww.qualtechedge.ai',
      githubUrl: 'https://github.com/Sintu8737',
      category: 'Enterprise',
      difficulty: 'Advanced',
      impact: 'High'
    },
    {
      title: 'Edorbit AR Learning',
      duration: '395 Days',
      type: 'Educational Technology Platform',
      description: 'Immersive AR learning platform transforming education through interactive 3D experiences and real-time collaboration.',
      features: [
        'WebXR Integration',
        '3D Model Rendering',
        'Real-time Collaboration',
        'AI Tutoring System'
      ],
      technologies: ['React.js', 'JavaScript', 'Axios','Material UI','OpenAI','AR','Github','CI/CD','Firebase'],
      highlights: ['200K+ Students', '95% Satisfaction', 'AR/VR Ready'],
      liveUrl: 'https://www.edorbit.com',
      githubUrl: 'https://github.com/Sintu8737',
      category: 'Innovation',
      difficulty: 'Expert',
      impact: 'Very High'
    },
    {
      title: 'ATH Project',
      duration: '180 Days',
      type: 'Real-time Analytics Platform',
      description: 'Cutting-edge analytics dashboard processing millions of data points in real-time with AI-powered insights.',
      features: [
        'Real-time Data Streaming',
        'ML Predictive Analytics',
        'Custom Visualization Engine',
        'Automated Reporting'
      ],
      technologies: ['Next.js', 'Motion', 'React-bits', 'Tailwind CSS', 'JavaScript','OpenAI'],
      highlights: ['1M+ Events/Sec', 'Sub-second Latency', 'AI-Powered Insights'],
      liveUrl: 'https://apply.artstoheartsproject.com/',
      category: 'E-commerce',
      difficulty: 'Expert',
      impact: 'Very High'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-velvet via-midnight to-obsidian relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-cosmic bg-300% animate-gradient-slow opacity-10"></div>
        
        {/* Mouse-following grid */}
        <motion.div
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="absolute w-[800px] h-[800px] opacity-20 pointer-events-none"
        >
          <div className="grid grid-cols-8 gap-1">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-gradient-to-r from-gold/50 to-rose-gold/50"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Revolutionary Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-glass/60 backdrop-blur-glass rounded-full border border-gold/40 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)" }}
          >
            <Rocket className="w-6 h-6 text-gold mr-3" />
            <span className="text-gold font-body font-semibold">Featured Projects</span>
          </motion.div>
          
          <h2 className="text-5xl font-display font-bold text-white mb-8">
            <span className="block text-silver/80 mb-3">My</span>
            <span className="bg-gradient-to-r from-gold via-rose-gold to-copper bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-teal via-purple to-neon-blue rounded-full mx-auto mb-8"
          />
        </motion.div>

        {/* 3D Project Showcase */}
        <div className="relative">
          {/* Floating Category Pills */}
          <div className="flex justify-center mb-12 space-x-4">
            {['Enterprise', 'Innovation', 'Analytics'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-2 bg-glass/60 backdrop-blur-glass rounded-full border border-glass-border cursor-pointer"
              >
                <span className="text-sm font-medium text-white">{category}</span>
              </motion.div>
            ))}
          </div>

          {/* Main Project Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 15,
                  z: 50,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative group"
                onMouseEnter={() => setSelectedProject(index)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Project Card */}
                <div className="relative bg-charcoal/90 backdrop-blur-glass rounded-3xl border border-gold/30 overflow-hidden shadow-luxury-gold">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-gold via-rose-gold to-copper"
                    />
                  </div>

                  {/* Project Header */}
                  <div className="relative p-6 border-b border-gold/20">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.h3
                          whileHover={{ scale: 1.05 }}
                          className="text-2xl font-display font-bold text-silver mb-2"
                        >
                          {project.title}
                        </motion.h3>
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-gold/30 to-rose-gold/30 rounded-full text-xs font-medium text-gold">
                            {project.category}
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-copper/30 to-bronze/30 rounded-full text-xs font-medium text-rose-gold">
                            {project.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ 
                          rotate: selectedProject === index ? [0, 360] : 0,
                          scale: selectedProject === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-gradient-to-r from-gold to-rose-gold rounded-lg"
                      >
                        <Layers className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-sm text-silver">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4 text-copper" />
                        <span>{project.impact} Impact</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="relative p-6">
                    {/* Description */}
                    <motion.p
                      animate={{ height: selectedProject === index ? "auto" : "3rem" }}
                      className="text-gray-300 mb-6 text-sm leading-relaxed overflow-hidden"
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-display font-semibold text-teal-light mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.div
                            key={tech}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: idx * 0.1,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="px-3 py-1 bg-glass/60 backdrop-blur-glass rounded-lg border border-teal/30 text-xs text-teal-light font-medium"
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-display font-semibold text-purple-light mb-3">Impact Metrics</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-center p-2 bg-glass/40 rounded-lg"
                          >
                            <div className="text-lg font-display font-bold bg-gradient-to-r from-teal-light to-purple-light bg-clip-text text-transparent">
                              {highlight.split(' ')[0]}
                            </div>
                            <div className="text-xs text-gray-400">
                              {highlight.split(' ').slice(1).join(' ')}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-teal to-purple text-white font-display font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-glow"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotateY: -10 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-3 bg-glass/60 backdrop-blur-glass text-white font-display font-semibold rounded-xl border border-glass-border hover:border-teal flex items-center justify-center"
                      >
                        <GitBranch className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                {selectedProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          x: Math.random() * 200 - 100,
                          y: Math.random() * 200 - 100
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="absolute w-2 h-2 bg-gradient-to-r from-teal to-purple rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="inline-block"
            >
              <div className="px-8 py-4 bg-gradient-to-r from-teal via-purple to-neon-blue rounded-2xl shadow-glow">
                <div className="flex items-center space-x-3">
                  <Box className="w-6 h-6 text-white" />
                  <span className="text-white font-display font-bold text-lg">
                    Ready to Build Something Amazing?
                  </span>
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
