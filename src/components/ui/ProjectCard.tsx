import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  demoLink,
  codeLink
}) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group p-6 relative"
      whileHover={{ y: -5 }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative">
        <motion.h3 
          className="text-xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.p 
          className="text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </motion.p>
        
        <div className="flex justify-between items-center">
          {demoLink !== "#" ? (
            <motion.a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="mr-1">Demo</span>
              <ExternalLink size={16} />
            </motion.a>
          ) : (
            <span></span>
          )}
          
          <motion.a 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="mr-1">Code</span>
            <Github size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;