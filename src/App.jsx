import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Slide from './components/Slide';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const slides = [
    {
      id: 1,
      title: "It's Rida Ladib",
      subtitle: "Specializing in Web Development & Management",
      content: "I create engaging digital experiences with React and modern web technologies.",
      bg: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
      accent: "from-red-600 to-pink-500"
    },
    {
      id: 2,
      title: "My Skills",
      subtitle: "Technologies I Master",
      content: "React, JavaScript, Tailwind CSS, Node.js, Git/Github, Python, Mysql",
      bg: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
      accent: "from-red-700 to-pink-600"
    },
    {
      id: 3,
      title: "My Projects",
      subtitle: "Recent Work",
      content: "Survey Project, Interactive Slides, MySafari Platform",
      bg: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
      accent: "from-red-800 to-pink-700"
    },
    {
      id: 4,
      title: "Let's Connect",
      subtitle: "Get In Touch",
      content: "I'm available for freelance projects and full-time opportunities.",
      bg: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
      accent: "from-red-900 to-pink-900"
    }
  ];

  // Handle scroll events for slide detection
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      if (e.deltaY > 50 && currentSlide < slides.length - 1) {
        setIsScrolling(true);
        setCurrentSlide(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 800);
      } else if (e.deltaY < -50 && currentSlide > 0) {
        setIsScrolling(true);
        setCurrentSlide(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, isScrolling, slides.length]);

  // Scroll to the current slide
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentSlide * window.innerHeight,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (!isScrolling) {
      setIsScrolling(true);
      setCurrentSlide(index);
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <Navbar currentSlide={currentSlide} goToSlide={goToSlide} totalSlides={slides.length} />
      
      <div 
        ref={containerRef}
        className="h-full overflow-y-hidden snap-y snap-mandatory"
      >
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            slide={slide}
            isActive={currentSlide === index}
          />
        ))}
      </div>

      {/* Navigation indicator */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-red-600 scale-125' : 'bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 text-gray-400 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

export default App;