// components/Slide.js
import React from 'react';

const Slide = ({ slide, isActive }) => {
  const { title, subtitle, content, bg, accent } = slide;

  return (
    <div className={`h-screen snap-start flex items-center justify-center relative overflow-hidden ${bg}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-pink-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
          {title}
        </div>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-8">
          {subtitle}
        </div>
        
        <div className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          {content}
        </div>
        
      </div>
      
      {/* Slide number indicator */}
      <div className="absolute bottom-6 right-6 text-gray-600 text-sm">
        {slide.id}/{5}
      </div>
    </div>
  );
};

export default Slide;