import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400"></div>
      
      {/* Timeline items container */}
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
};

export default Timeline;