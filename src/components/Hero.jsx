import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block">Paul Seyi Adokiye</span>
            <span className="block text-blue-600 dark:text-blue-400">Senior Fullstack</span>
            <span className="block">Developer</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Crafting exceptional digital experiences with modern technologies.
            Passionate about clean code, scalable architecture, and user-centered design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleScrollToAbout}
              className="rounded bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="mailto:alex@example.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <button
          onClick={handleScrollToAbout}
          className="absolute bottom-8 left-[42%] transform sm:left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;