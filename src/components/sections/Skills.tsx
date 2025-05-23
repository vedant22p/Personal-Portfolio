import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

const skillsData = [ 
  {
    category: "Languages",
    skills: ["Python", "C++", "SQL", "MySQL", "HTML", "CSS", "TypeScript"]
  },
  {
    category: "Frameworks and Libraries",
    skills: ["TensorFlow", "Scikit-Learn", "Keras", "OpenCV", "HuggingFace", "FastAPI", "Streamlit", "Pandas", "React", "Tailwind CSS"]
  },
  {
    category: "Technologies and Tools",
    skills: ["AWS", "GitHub", "PowerBI", "MLflow", "Seaborn"]
  },
  {
    category: "Data Science",
    skills: ["Data Analysis", "Data Visualization", "Machine Learning", "Deep Learning", "NLP", "MLOps"]
  },
  {
    category: "Core CSE",
    skills: ["Data Structures", "Algorithms", "OOPs", "Operating System", "DBMS"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <SectionHeading title="Skills" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-duration="1000">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-gray-300 rounded-full text-sm font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;