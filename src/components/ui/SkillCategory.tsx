import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">{title}</h3>
      
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
            </div>
            
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${skill.level}%`, animationDelay: `${index * 100}ms` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;