const Navbar = ({ currentSlide, goToSlide, totalSlides }) => {
  const navItems = [
    { name: 'Home'},
    { name: 'Skills'},
    { name: 'Projects'},
    { name: 'Contact'}
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-md py-4 px-6 border-b border-gray-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-red-600 font-bold text-2xl tracking-tight">RIDA LADIB</div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex items-center space-x-1 transition-all duration-300 ${
                currentSlide === index ? 'text-red-600' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;