import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="flex justify-between items-center">
        {demoLink !== "#" ? (
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span className="mr-1">Demo</span>
            <ExternalLink size={16} />
          </a>
        ) : (
          <span></span>
        )}
        
        <a 
          href={codeLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
        >
          <span className="mr-1">Code</span>
          <Github size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;