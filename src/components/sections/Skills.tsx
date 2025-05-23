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

// Generate a grid of nodes for the neural network
const generateNodes = () => {
  const nodes = [];
  for (let i = 0; i < 20; i++) {
    nodes.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    });
  }
  return nodes;
};

const nodes = generateNodes();

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              background: `radial-gradient(circle at center, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.4))`,
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connections */}
        {nodes.map((node, i) => (
          nodes.slice(i + 1).filter(() => Math.random() > 0.7).map((nextNode, j) => (
            <motion.div
              key={`${i}-${j}`}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${Math.hypot(nextNode.x - node.x, nextNode.y - node.y)}%`,
                height: '2px',
                background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))',
                transformOrigin: 'left',
                transform: `rotate(${Math.atan2(nextNode.y - node.y, nextNode.x - node.x)}rad)`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: (i + j) * 0.1,
                ease: "easeInOut",
              }}
            />
          ))
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <SectionHeading title="Skills" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <h3 className="text-xl font-bold text-white mb-4 relative">{category.category}</h3>
              <div className="flex flex-wrap gap-3 relative">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(168, 85, 247, 0.3)',
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-gray-300 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;