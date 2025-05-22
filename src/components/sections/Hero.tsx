import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Vedant Pandey
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                Aspiring Data Scientist
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              I craft intelligent, data-driven solutions using modern AI tools. From NLP to deep learning, I build systems that solve real problems. I turn raw data into meaningful insights and visual stories. Driven by curiosity, I create scalable models that make an impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://drive.google.com/file/d/1uASwIwFia0D2q0pIN76mjK9Lvk0By1i-/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-purple-500/20"
              >
                Resume
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
              <img 
                src="https://drive.google.com/uc?export=view&id=1qRGzv8JT-O1uC6nDEYBPFbZr_jYKdXP5" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center animate-bounce">
          <a href="#education" className="p-2 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;