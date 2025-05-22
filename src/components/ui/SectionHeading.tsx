import React from 'react';

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>
      <div className="mt-4 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;