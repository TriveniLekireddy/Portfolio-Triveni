import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 mb-8"
          >
            <ArrowUp size={24} />
          </button>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Triveni Lekireddy</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating innovative solutions and turning ideas into reality.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8 text-gray-400">
            <p>&copy; {new Date().getFullYear()} Triveni Lekireddy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
