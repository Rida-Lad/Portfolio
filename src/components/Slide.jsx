
const Slide = ({ slideNumber, bg, isActive }) => {
  return (
    <div className={`slide ${bg} relative flex items-center justify-center`}>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Slide {slideNumber}</h1>
        <p className="text-xl text-gray-300">
          {isActive ? 'Active Content Here' : 'Scroll to view'}
        </p>
      </div>
      
      {/* Red accent elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-red-600 rounded-full opacity-20"></div>
      <div className="absolute top-10 right-10 w-12 h-12 bg-red-600 opacity-30"></div>
    </div>
  );
};

export default Slide;