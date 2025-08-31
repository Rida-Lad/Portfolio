import React from 'react';

const Navbar = ({ currentSlide, scrollToSlide, totalSlides }) => {
  const icons = [
    { icon: '🏠', label: 'Home' },
    { icon: '👤', label: 'About' },
    { icon: '💼', label: 'Work' },
    { icon: '📞', label: 'Contact' },
    { icon: '📝', label: 'Blog' }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-6">
        {icons.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`nav-icon text-xl ${currentSlide === index ? 'active-nav' : 'text-gray-400'}`}
            aria-label={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;