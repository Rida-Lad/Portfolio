import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Slide from './components/Slide';

function App() {
  const containerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, bg: 'bg-gradient-to-br from-gray-900 to-black' },
    { id: 2, bg: 'bg-gradient-to-br from-gray-900 to-black' },
    { id: 3, bg: 'bg-gradient-to-br from-gray-900 to-black' },
    { id: 4, bg: 'bg-gradient-to-br from-gray-900 to-black' },
    { id: 5, bg: 'bg-gradient-to-br from-gray-900 to-black' }
  ];

  const handleScroll = () => {
    const scrollPosition = containerRef.current.scrollTop;
    const slideHeight = window.innerHeight;
    const current = Math.round(scrollPosition / slideHeight);
    setCurrentSlide(current);
  };

  const scrollToSlide = (index) => {
    containerRef.current.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <Navbar 
        currentSlide={currentSlide} 
        scrollToSlide={scrollToSlide} 
        totalSlides={slides.length} 
      />
      
      <div 
        ref={containerRef}
        className="container"
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            slideNumber={slide.id}
            bg={slide.bg}
            isActive={currentSlide === index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;