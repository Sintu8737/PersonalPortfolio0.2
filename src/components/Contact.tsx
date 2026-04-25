import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_8gwqql9',    // Replace with your EmailJS service ID
      'template_3j9iq1v',   // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sintu Kumar',
        reply_to: formData.email
      },
      'kGyHxjkJBn8TrO8kb'     // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      showToast('Message sent successfully!', 'success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.log('FAILED...', error);
      showToast('Failed to send message. Please try again.', 'error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sintuj8737@gmail.com',
      href: 'mailto:sintuj8737@gmail.com',
      color: 'gold'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8737810566',
      href: 'tel:+918737810566',
      color: 'rose-gold'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#',
      color: 'copper'
    }
  ];

  
  return (
    <section id="contact" className="py-24 bg-obsidian text-white">
      {/* Toast Notification */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-20 left-1/ transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg max-w-sm mx-auto ${
            toast.type === 'success' 
              ? 'bg-gradient-to-r from-gold to-rose-gold text-white' 
              : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
          }`}
        >
          <div className="flex items-center space-x-2">
            {toast.type === 'success' ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 00-8 8 8 8 0 018-8 8 8 0zm-1 0a1 1 0 102 102 1 1 1 1 011-1-1-1zM9 9a1 1 0 100 102 1 1 1 011-1-1-1H9z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-18 8 8 8 0 0118 8 8 8 0zm-7 4a1 1 0 11-2 1 1 1 011-1-1-1H9a1 1 0 100 102 1 1 1 011-1-1-1zm7 4a1 1 0 100 102 1 1 1 011-1-1-1H9z" clipRule="evenodd" />
              </svg>
            )}
            <span className="font-medium">{toast.message}</span>
          </div>
        </motion.div>
      )}
      
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
            <Mail className="w-6 h-6 text-gold mr-3" />
            <span className="text-gold font-body font-semibold">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-5xl font-display font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-gold via-rose-gold to-copper bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-2xl text-silver/90 max-w-4xl mx-auto leading-relaxed px-8 py-6 bg-glass/40 backdrop-blur-glass rounded-3xl border border-gold/30 shadow-luxury-gold">
            Ready to bring your ideas to life? Let's discuss how we can work together
          </p>
        </motion.div>

        {/* Main Content Grid - Clean Two Column */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info - Simplified */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a2e] backdrop-blur-glass rounded-3xl border border-gold/50 p-8 shadow-luxury-gold"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-[#16213e] rounded-2xl border border-gold/20"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className={`p-3 bg-gradient-to-r from-${info.color} to-${info.color === 'gold' ? 'rose-gold' : info.color === 'rose-gold' ? 'copper' : info.color === 'copper' ? 'bronze' : 'silver'} rounded-lg flex-shrink-0`}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-xl font-display font-semibold text-white">{info.label}</h4>
                    <a 
                      href={info.href}
                      className={`text-white hover:text-gold transition-colors duration-300`}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-[#16213e] backdrop-blur-glass rounded-2xl border border-gold/20 p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="mailto:sintuj8737@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gold to-rose-gold text-white font-display font-semibold rounded-xl flex items-center justify-center space-x-2 hover:shadow-glow transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </motion.a>
                <motion.a
                  href="tel:+918737810566"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-[#1a1a2e] text-white font-display font-semibold rounded-xl border border-gold/30 hover:border-gold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Me</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-glass/50 backdrop-blur-glass rounded-2xl border border-glass-border p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-teal to-purple rounded-full mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-display font-medium text-white mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#16213e] border border-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-display font-medium text-white mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#16213e] border border-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-display font-medium text-white mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gold" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-[#16213e] border border-gold/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-gold to-rose-gold text-white font-display font-semibold rounded-xl hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-glass-border">
                <p className="text-gray-400 text-sm text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
