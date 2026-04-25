
import { motion } from 'framer-motion';
import { Award, Briefcase, Code } from 'lucide-react';

const About = () => {
  const journey = [
    { 
      year: '2020 – 2023', 
      title: 'B.Tech in Computer Science', 
      description: 'Built a strong foundation in programming and web development. Started exploring frontend technologies like HTML, CSS, JavaScript, and React during this phase.', 
      color: 'gold', 
      icon: Code 
    },
    { 
      year: '2023 – 2025', 
      title: 'Frontend Developer at Qualtech Edge', 
      description: 'Started professional journey working on financial applications and dashboards. Worked with React, TypeScript, Chakra UI, Redux, and Chart.js to build scalable UI features and handle real-world business logic.', 
      color: 'rose', 
      icon: Briefcase 
    },
    { 
      year: '2025 – Present', 
      title: 'React.js Frontend Developer at PwC India', 
      description: 'Working on enterprise-level applications with focus on performance optimization, reusable components, and scalable architecture. Collaborating with cross-functional teams in Agile environments and following best coding practices.', 
      color: 'copper', 
      icon: Award 
    }
  ];

  const certifications = [
    'Fundamentals of Digital Marketing',
    'React & TypeScript Advanced',
    'JavaScript ES6+ Mastery'
  ];

  return (
    <section id="about" className="py-20 bg-obsidian text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-display font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-gold via-rose-gold to-copper bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Frontend Developer with 2+ years of experience in React.js, JavaScript, and TypeScript. Focused on building scalable, high-performance web applications and delivering clean, user-friendly interfaces.
          </p>
        </div>

        {/* Main Content - Full Width Horizontal Layout */}
        <div className="bg-[#111827] p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-display font-bold text-silver mb-6">My Journey</h3>
          
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Frontend Developer with 2+ years of experience in React.js, JavaScript, and TypeScript. Focused on building scalable, high-performance web applications and delivering clean, user-friendly interfaces.
          </p>

          {/* Journey Timeline - Horizontal Layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`p-3 bg-gradient-to-r from-${item.color} to-${item.color === 'gold' ? 'orange' : item.color === 'rose' ? 'pink' : 'amber'} rounded-lg mx-auto mb-4 w-fit`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-yellow-400 mb-2">{item.year}</div>
                <h4 className="text-xl font-display font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications - Horizontal Layout */}
          <div>
            <h4 className="text-xl font-display font-semibold text-silver mb-4">Certifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1f2937] p-4 rounded-lg flex items-center gap-3"
                >
                  <Award size={18} className="text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;