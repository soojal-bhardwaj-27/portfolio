import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-playfair font-semibold">Prof. Neeharika Sengar</h3>
              <p className="text-gray-400 mt-2">Computer Science Professor & Researcher</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Prof. Neeharika Sengar. All rights reserved.
            </p>
            
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#activities" className="hover:text-white transition-colors duration-300">Activities</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;