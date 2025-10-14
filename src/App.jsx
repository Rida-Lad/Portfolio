import { useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const quotes = [
    "Passionate about creating innovative solutions that make a difference",
    "Always learning and adapting to cutting-edge technologies",
    "Believer in clean code, best practices, and elegant architecture",
    "Team player with strong communication and collaboration skills",
    "Focused on user-centered design and exceptional experiences"
  ];

  const themes = [
    {
      bg: 'bg-gradient-to-br from-black via-gray-900 to-gray-800',
      accent: 'from-gray-400 to-gray-300',
      icon: 'text-gray-300 hover:text-gray-100',
      shape: 'border-gray-400'
    },
    {
      bg: 'bg-gradient-to-br from-black via-blue-900 to-blue-800',
      accent: 'from-blue-400 to-blue-300',
      icon: 'text-blue-300 hover:text-blue-100',
      shape: 'border-blue-400'
    },
    {
      bg: 'bg-gradient-to-br from-black via-purple-900 to-purple-800',
      accent: 'from-purple-400 to-purple-300',
      icon: 'text-purple-300 hover:text-purple-100',
      shape: 'border-purple-400'
    },
    {
      bg: 'bg-gradient-to-br from-black via-yellow-900 to-yellow-800',
      accent: 'from-yellow-400 to-yellow-300',
      icon: 'text-yellow-300 hover:text-yellow-100',
      shape: 'border-white'
    },
    {
      bg: 'bg-gradient-to-br from-black via-emerald-900 to-emerald-800',
      accent: 'from-emerald-400 to-emerald-300',
      icon: 'text-emerald-300 hover:text-emerald-100',
      shape: 'border-emerald-400'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const currentTheme = themes[currentIndex];

  return (
    <div className={`min-h-screen transition-all duration-1000 ${currentTheme.bg} text-white overflow-hidden relative`}>
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <motion.div 
          className={`absolute top-10 left-5 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border-2 ${currentTheme.shape} rounded-full opacity-15`}
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className={`absolute bottom-10 right-5 md:bottom-20 md:right-20 w-20 h-20 md:w-40 md:h-40 border-2 ${currentTheme.shape} opacity-10 rotate-45`}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Medium shapes */}
        <motion.div 
          className={`absolute top-1/3 right-8 md:right-1/4 w-12 h-12 md:w-24 md:h-24 border ${currentTheme.shape} opacity-20 rounded-lg`}
          animate={{ 
            rotate: [0, 45, 90, 135, 180],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div 
          className={`absolute bottom-1/4 left-8 md:left-1/4 w-10 h-10 md:w-20 md:h-20 border ${currentTheme.shape} opacity-25 rounded-full`}
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Small floating particles */}
        <motion.div 
          className={`absolute top-3/4 left-1/2 w-4 h-4 md:w-6 md:h-6 border ${currentTheme.shape} opacity-30 rounded-full`}
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, -20, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className={`absolute top-1/2 left-1/5 w-3 h-3 md:w-5 md:h-5 border ${currentTheme.shape} opacity-25 rounded-full`}
          animate={{ 
            y: [0, 30, -30, 0],
            x: [0, -15, 15, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/3 left-1/3 h-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-1/3 top-1/3 w-full"></div>
        </div>
      </div>

      {/* Navigation - Improved spacing */}
      <nav className="relative z-10 flex justify-center mt-5 pt-6 md:pt-8 px-4">
        <div className="flex space-x-8 md:space-x-12">
          {[
            { 
              href: 'https://wa.me/+212605975668', 
              icon: <FaWhatsapp className="w-8 h-8" />,
              label: 'WhatsApp'
            },
            { 
              href: 'mailto:ridlad7@gmail.com', 
              icon: <SiGmail className="w-8 h-8" />,
              label: 'Gmail'
            },
            { 
              href: 'https://linkedin.com/in/rida-ladib', 
              icon: <FaLinkedin className="w-8 h-8" />,
              label: 'LinkedIn'
            },
            { 
              href: 'https://github.com/Rida-Lad', 
              icon: <FaGithub className="w-8 h-8" />,
              label: 'GitHub'
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.icon} transition-all duration-300 transform hover:scale-110 md:hover:scale-125 hover:rotate-12`}
              whileHover={{ scale: 1.2, rotate: 12 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Main Content - Optimized spacing */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-100px)] px-4">
        <div className="text-center w-full max-w-2xl lg:max-w-4xl">
          
          {/* Animated Quote with better responsive spacing */}
          <div className="relative h-32 md:h-40 lg:h-48 flex items-center justify-center mb-8 md:mb-12">
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center px-2"
                >
                  <div className="relative max-w-3xl">
                    {/* Quote decoration - responsive */}
                    <div className={`absolute -left-4 md:-left-8 -top-2 md:-top-4 text-2xl md:text-4xl opacity-50 bg-gradient-to-br bg-clip-text text-transparent ${currentTheme.accent}`}>
                      "
                    </div>
                    <p style={{fontFamily:"Parkinsans"}} className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light px-6 md:px-8 leading-relaxed">
                      {quotes[currentIndex]}
                    </p>
                    <div className={`absolute -right-4 md:-right-8 -bottom-2 md:-bottom-4 text-2xl md:text-4xl opacity-50 bg-gradient-to-br bg-clip-text text-transparent ${currentTheme.accent}`}>
                      "
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 md:space-x-3 mt-8 md:mt-12">
            {quotes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsVisible(true);
                  }, 300);
                }}
                className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${currentTheme.accent} scale-125` 
                    : 'bg-white hover:bg-white'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

        </div>
      </main>


    </div>
  );
};

export default App;