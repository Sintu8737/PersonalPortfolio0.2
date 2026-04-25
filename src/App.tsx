import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0a0a0a;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #14b8a6, #8b5cf6);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #2dd4bf, #a78bfa);
      }
      
      /* Custom selection colors */
      ::selection {
        background: rgba(20, 184, 166, 0.3);
        color: white;
      }
      ::-moz-selection {
        background: rgba(20, 184, 166, 0.3);
        color: white;
      }
      
      /* Smooth transitions for all elements */
      * {
        transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
      }
      
      /* Custom focus styles */
      :focus-visible {
        outline: 2px solid #14b8a6;
        outline-offset: 2px;
      }
      
      /* Loading animations */
      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
      
      /* Gradient text animation */
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="App bg-obsidian text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-velvet border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-silver text-sm">
              © 2024 Sintu Kumar. Crafted with passion and modern web technologies.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a 
                href="https://github.com/Sintu8737" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-silver hover:text-gold transition-colors duration-300"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sintu-kumar8737/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-light transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:sintuj8737@gmail.com"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
