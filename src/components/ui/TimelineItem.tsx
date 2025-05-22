import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: React.ReactNode;
  period: string;
  location: string;
  description: string;
  skills: string[];
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  skills,
  isLeft
}) => {
  return (
    <div className="relative flex items-center justify-center" data-aos={isLeft ? "fade-right" : "fade-left"} data-aos-duration="1000">
      <div className={`w-full flex ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Content */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <span className="inline-block px-3 py-1 mb-3 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium">
              {period}
            </span>
            
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="text-purple-400 font-medium">{subtitle}</div>
            <p className="text-sm text-gray-400 mb-4">{location}</p>
            
            <p className="text-gray-300 mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Empty space for timeline */}
        <div className="w-full md:w-1/2"></div>
      </div>
    </div>
  );
};

export default TimelineItem;