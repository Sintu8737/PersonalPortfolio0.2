import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Building, ExternalLink, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'PwC India',
      position: 'React.js Front End Developer',
      duration: '09-2022 - Present',
      location: 'Bengaluru, India',
      type: 'Full-time',
      description: [
        'Developed responsive UI components using React.js for enterprise applications',
        'Implemented functional components, hooks and reusable UI patterns',
        'Optimized performance and improved component structure'
      ],
      technologies: ['React.js', 'TypeScript', 'Git', 'Agile/Scrum']
    },
    {
      company: 'Qualtech Edge',
      position: 'Frontend Developer',
      duration: '10-2021 - 08-2022',
      location: 'Bengaluru, India',
      type: 'Full-time',
      description: [
        'Built financial dashboards with advanced data visualization',
        'Developed interactive UI features using React and Chart.js',
        'Managed bug fixes and change requests for financial applications'
      ],
      technologies: ['React', 'Redux', 'Chakra UI', 'Chart.js']
    }
  ];

  const stats = [
    { label: 'Experience', value: '3+' },
    { label: 'Companies', value: '2' },
    { label: 'Projects', value: '10+' },
    { label: 'Tech Stack', value: '10+' }
  ];

  return (
    <section className=" bg-obsidian text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-gold via-rose-gold to-copper bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400">
            My professional journey and achievements
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#111827] p-4 rounded-xl text-center border border-gray-700">
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-[#111827] p-6 rounded-2xl border border-gray-700">

              {/* Top */}
              <div className="mb-4">
                <h3 className="text-xl font-display font-semibold text-white">{exp.position}</h3>
                <p className="text-gray-400 text-sm">{exp.company}</p>

                <div className="flex gap-4 text-gray-400 text-sm mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <ul className="list-disc ml-5 text-gray-300 text-sm mb-4">
                {exp.description.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-[#1f2937] px-3 py-1 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Experience;