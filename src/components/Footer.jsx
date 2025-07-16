import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Paul Seyi Adokiye</div>
          <p className="text-gray-400 dark:text-gray-500 mb-6">
            Senior Fullstack Developer crafting exceptional digital experiences
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400 dark:text-gray-500">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 dark:border-gray-900">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2025 Paul Seyi Adokiye. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;