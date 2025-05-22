import React from 'react';
import { Github, Instagram, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-800 text-gray-300 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Vedant Pandey. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-5">
            <a href="https://github.com/vedant22p" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/vedant22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/vedant22.p" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="mailto:vedant.pandey2202@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://leetcode.com/u/user0352V/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Code size={20} />
              <span className="sr-only">LeetCode</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Built with React, Tailwind CSS, and TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;