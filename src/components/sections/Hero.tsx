import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 mt-10" data-aos="fade-right">
            <div className="mb-6 pt-8">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Vedant Pandey
              </h1>
              <h2 className="text-2xl md:text-xl font-medium text-gray-300">
                Aspiring Data Scientist
              </h2>
            </div>
            
            <p className="text-lg md:text-m text-gray-400 mb-8 text-justify" >
              I build intelligent, user-focused solutions by combining data science, software engineering, and modern web technologies. With experience in NLP, deep learning, and full-stack development, I enjoy creating applications that are both impactful and efficient. From designing scalable ML pipelines to crafting responsive user interfaces, I bring a holistic approach to development. I transform complex data into actionable insights and write clean, maintainable code. Whether it’s building visualizations, automating workflows, or enhancing user experience, I focus on clarity, performance, and real-world value. Driven by curiosity and a passion for learning, I aim to develop solutions that don’t just function, but truly make a difference.
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
          
          <div className="order-1 lg:order-2 flex justify-center mt-12 ml-4 md:ml-6 lg:ml-10" data-aos="fade-left">

            <div className="relative w-72 h-[450px] md:w-[400px] md:h-[500px] overflow-hidden border-4 border-gray-800 shadow-xl">

              <img  
                src="/profile.jpg" 
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