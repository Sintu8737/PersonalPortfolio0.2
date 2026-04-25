import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skills = {
    'Frontend Core': {
      icon: Code2,
      color: 'gold',
      items: ['React.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3']
    },
    'UI Frameworks': {
      icon: Palette,
      color: 'rose-gold',
      items: ['Tailwind CSS', 'Chakra UI', 'Styled Components', 'Material-UI']
    },
    'State & Data': {
      icon: Database,
      color: 'copper',
      items: ['Redux Toolkit', 'React Query', 'Zustand', 'Axios', 'GraphQL']
    },
    'Tools & Libraries': {
      icon: Wrench,
      color: 'bronze',
      items: ['Git', 'Framer Motion', 'React Hook Form', 'NPM', 'JIRA']
    }
  };

  return (
    <section id="skills" className="py-24 bg-obsidian text-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-glass/60 backdrop-blur-glass rounded-full border border-gold/40 mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)" }}
          >
            <Code2 className="w-6 h-6 text-gold mr-3" />
            <span className="text-gold font-body font-semibold">Technical Skills</span>
          </motion.div>

          <h2 className="text-5xl font-display font-bold text-white mb-8">

            <span className="bg-gradient-to-r from-gold via-rose-gold to-copper bg-clip-text text-transparent">
              My Expertise
            </span>
          </h2>

          <p className="text-2xl text-silver/90 max-w-4xl mx-auto leading-relaxed px-8 py-6 bg-glass/40 backdrop-blur-glass rounded-3xl border border-gold/30 shadow-luxury-gold">
            Comprehensive skill set spanning frontend development, UI/UX design, and modern development workflows
          </p>
        </motion.div>

        {/* Skills Grid - Clean 2x2 Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, data], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-charcoal/80 backdrop-blur-glass rounded-3xl border border-gold/30 p-8 shadow-luxury-gold"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className={`p-3 bg-gradient-to-r from-${data.color} to-${data.color === 'gold' ? 'rose-gold' : data.color === 'rose-gold' ? 'copper' : data.color === 'copper' ? 'bronze' : 'silver'} rounded-lg`}
                >
                  <data.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-silver">{category}</h3>
              </div>

              <div className="space-y-3">
                {data.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-glass/40 rounded-xl"
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r from-${data.color} to-${data.color === 'gold' ? 'rose-gold' : data.color === 'rose-gold' ? 'copper' : data.color === 'copper' ? 'bronze' : 'silver'} rounded-full`}></div>
                    <span className="text-silver/90 font-medium text-lg">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
