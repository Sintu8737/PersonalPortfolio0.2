import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Zap, Globe, Terminal, Palette, MessageSquare, Briefcase, Users } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = React.useMemo(() => [
    'Frontend Architect',
    'React Specialist',
    'UI/UX Magician',
    'Code Craftsman'
  ], []);
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-obsidian relative overflow-hidden">
      {/* Dynamic background with mouse-follow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-midnight to-charcoal">
        <div className="absolute inset-0 bg-gradient-luxury bg-[300%] animate-gradient-slow opacity-20"></div>

        {/* Mouse-following gradient orb */}
        <motion.div
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="absolute w-96 h-96 bg-gradient-to-r from-gold/30 via-rose-gold/30 to-copper/30 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-32 h-32 border-2 border-gold/30 rotate-45"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          x: [0, -50, 50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 border-2 border-bronze/30 rotate-12"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 w-24 h-24 border border-sapphire/30 rounded-full"
      />

      {/* 3D Card Layout */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Glitch Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-tight">
                <span className="block text-silver mb-2">CREATIVE</span>
                <motion.span
                  className="block bg-gradient-to-r from-gold via-rose-gold to-copper bg-clip-text text-transparent relative"
                  whileHover={{ scale: 1.05 }}
                >
                  DEVELOPER
                  <motion.div
                    animate={{ height: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-gold via-rose-gold to-copper bg-clip-text text-transparent"
                    style={{ clipPath: "inset(0 0 100% 0)" }}
                  />
                </motion.span>
              </h1>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-gold via-rose-gold to-copper rounded-full mt-4"
              />
            </motion.div>

            {/* 3D Typing Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ rotateY: 10, rotateX: -10 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              <div className="bg-velvet/90 backdrop-blur-glass rounded-2xl border border-gold/30 p-6 shadow-luxury-gold">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="p-2 bg-gradient-to-r from-gold to-rose-gold rounded-lg"
                  >
                    <Terminal className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="text-2xl font-mono text-gold">
                    {text}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="animate-pulse"
                    >|</motion.span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Floating Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: "Clean Code", color: "gold" },
                { icon: Palette, label: "Modern UI", color: "rose-gold" },
                { icon: Zap, label: "Fast Performance", color: "copper" },
                { icon: Globe, label: "Responsive", color: "bronze" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 10px 30px rgba(${item.color === 'gold' ? '255, 215, 0' : item.color === 'rose-gold' ? '255, 179, 71' : item.color === 'copper' ? '184, 115, 51' : '205, 127, 50'}, 0.4)`
                  }}
                  className="bg-charcoal/80 backdrop-blur-glass rounded-xl border border-gold/30 p-4 text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className={`w-12 h-12 bg-gradient-to-r from-${item.color} to-${item.color === 'gold' ? 'rose-gold' : item.color === 'rose-gold' ? 'copper' : item.color === 'copper' ? 'bronze' : 'gold'} rounded-lg flex items-center justify-center mx-auto mb-3`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-sm font-medium text-silver">{item.label}</span>
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* Right 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ rotateY: 15, rotateX: -15 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* Main Profile Card */}
            <div className="relative">
              {/* Card Background */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-gold via-rose-gold to-copper rounded-3xl opacity-30 blur-xl"
              />

              <div className="relative bg-charcoal/90 backdrop-blur-glass rounded-3xl border border-gold/30 p-8 shadow-luxury-gold">
                {/* Profile Image with 3D effect */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6"
                >
                  <div className="w-48 h-48 mx-auto relative">
                    {/* 3D Frame with Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-gold via-rose-gold to-copper rounded-full p-1"
                    >
                      <div className="w-full h-full bg-obsidian rounded-full overflow-hidden flex items-center justify-center">
                        <img
                          src="/sintupic.png"
                          alt="Sintu Kumar"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </motion.div>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                        className="absolute w-2 h-2 bg-gradient-to-r from-gold to-rose-gold rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: "3+", label: "Years" },
                    { value: "10+", label: "Projects" },
                    { value: "10+", label: "Tech Stack" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className="text-2xl font-display font-bold bg-gradient-to-r from-gold to-rose-gold bg-clip-text text-transparent"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs text-silver mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links 3D */}
                <div className="flex justify-center space-x-4">
                  {[
                    { icon: Code2, href: "https://github.com" },
                    { icon: Briefcase, href: "https://linkedin.com" },
                    { icon: MessageSquare, href: "https://twitter.com" },
                    { icon: Users, href: "https://instagram.com" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, 360],
                        boxShadow: "0 0 20px rgba(20, 184, 166, 0.5)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-3 bg-charcoal/60 backdrop-blur-glass rounded-full border border-gold/30 hover:border-gold"
                    >
                      <social.icon className="w-5 h-5 text-silver hover:text-gold" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-gray-400">
          <ArrowDown className="w-6 h-6 mb-2" />
          <span className="text-sm font-body">DISCOVER</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
